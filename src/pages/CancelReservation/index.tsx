import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Alert from '../../components/Alert';
import Button from '../../components/inputs/Button';
import { AxiosErrorRequest, ReservationProps } from '../../interfaces';
import Layout from '../../Layout';
import api from '../../services/api';
import './styles.css';

const CancelReservation = () => {
    const history = useHistory();
    const params = useParams<{ id: string }>();
    const [reservation, setReservation] = useState<ReservationProps>()
    const [messageError, setMessageError] = useState<string>();


    function handleLoadReservation() {
        api.get<ReservationProps>(`reservations/${params.id}`).then(response => {
            setReservation(response.data)
        })
    }

    async function handleDeleteReservation() {
        try {

            await api.delete<ReservationProps>(`reservations/${params.id}`).then(response => {
                setReservation(response.data)
            })
            history.push('/')


        } catch (error) {
            const {response} = error as AxiosErrorRequest;
            setMessageError(`Ops deu algum erro \n${response.data.message}`)
        }
    }

    useEffect(handleLoadReservation, [params]);

    if (!reservation) {
        return <></>
    }
    return (
        <Layout>
            <div className="reservationCancel-container">
                <header>
                    Cancelar reserva
                    <p>Confirme os dados entes de cancelar, este processo é irreversível !</p>
                </header>
                <main>

                    <div className="content">
                        <div className="data">
                            <span><strong>Nome: </strong> {reservation?.user.name}</span>
                            <span><strong>Email: </strong> {reservation?.user.email}</span>
                        </div>

                    </div>
                    {messageError && (
                        <Alert>
                            {messageError}
                        </Alert>
                    )}
                    <Button
                        label="Cancelar"
                        name="cancel"
                        onClick={handleDeleteReservation}
                    />
                </main>
            </div>
        </Layout>
    )
}

export default CancelReservation;