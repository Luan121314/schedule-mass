import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Alert from '../../components/Alert';
import Button from '../../components/inputs/Button';
import { ReservationProps } from '../../interfaces';
import Layout from '../../Layout';
import api from '../../services/api';
import './styles.css';

const ReservationFinal = () => {
    const history = useHistory();
    const params = useParams<{ id: string }>();
    const [reservation, setReservation] = useState<ReservationProps>()

    function handleRedirectToPageHome() {
        history.push('/')
    }

    function handleLoadReservation() {
        api.get<ReservationProps>(`reservations/${params.id}`).then(response => {
            setReservation(response.data)
        })
    }

    useEffect(handleLoadReservation, [params]);

    if(!reservation){
        return<></>
    }

    return (
        <Layout>
            <div className="ReservationFinal-container">
                <header>
                    Pronto, está reservado 😄
                </header>
                <main>

                    <div className="content">
                        <div className="data">
                            <span><strong>Nome: </strong> {reservation?.user.name}</span>
                            <span><strong>Email: </strong> {reservation?.user.email}</span>
                            <span><strong>Celular: </strong> {reservation?.user.phone}</span>
                            <span><strong>Reservas: </strong> {reservation?.companion === 0 ? 'Apenas uma' : `Eu + ${reservation.companion}` }</span>
                            <span><strong>Comunidade: </strong> {reservation?.community.name}</span>
                            <span><strong>Endereço: </strong> {reservation?.community.address}</span>
                            <span><strong>Horário: </strong> 18h45</span>
                        </div>

                        <div className="password">
                            <span>Essa é sua senha, apresente na entrada.</span>
                            <div className="text-password">
                                <Alert>bvebv</Alert>
                            </div>
                        </div>
                        <h2>Caso precise você pode pegar essas informações no seu email</h2>
                    </div>
                    <Button
                        label="Entendi"
                        name="undestand"
                        onClick={handleRedirectToPageHome}
                    />
                </main>
            </div>
        </Layout>
    )
}

export default ReservationFinal;