import React, { FormEvent, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { ValidationError } from 'yup';
import Alert from '../../components/Alert';
import Button from '../../components/inputs/Button';
import Input from '../../components/inputs/Input';
import Select from '../../components/inputs/Select';
import { AxiosErrorRequest, CommunityProps, ReservationProps } from '../../interfaces';
import Layout from '../../Layout';
import api from '../../services/api';
import reservationValidation from '../../validation/reservationValidation';
import './styles.css';

const Reservation = () => {
    const history = useHistory();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [companion, setCompanion] = useState(0);
    const [community, setCommunity] = useState("");
    const [communities, setCommunities] = useState<CommunityProps[]>([]);
    const [messageError, setMessageError] = useState<string>();

    function handleLoadCommunities() {
        api.get<CommunityProps[]>("communities").then(response => {
            setCommunities(response.data)
        });
    }

    useEffect(handleLoadCommunities, []);

    async function handleCreateReservation(e: FormEvent) {
        e.preventDefault();

        const data = {
            name,
            email,
            phone,
            companion,
            community_id: community
        }

        try {

            await reservationValidation.create(data);
            const response = await api.post<ReservationProps>("reservations", data).then()
            const { id } = response.data
            history.push(`/reservations/${id}`);

        } catch (error) {
            if (error instanceof ValidationError) {
                setMessageError(error.message);
                return
            }
            const {response} = error as AxiosErrorRequest
            setMessageError(`Ops tem algo errado\n - ${response.data.message}`);
        }
    }

    return (
        <Layout>
            <div className="reservation-container">
                <main className="main">
                    <header>
                        <Alert>
                            Lembre-se, faça a reserva com a certeza de que irá comparecer.
                            <label className="verse">Amarás ao teu próximo como a ti mesmo. (Mateus 22:39)</label>
                        </Alert>
                    </header>
                    <form className="form-content">
                        <h2>Preencha o formulário</h2>
                        <div className="input-group">

                            <Input
                                name="name"
                                label="Nome"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />

                            <Input
                                name="email"
                                label="Email"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <Input
                                name="phone"
                                label="Celular"
                                type="tel"
                                required
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />

                            <Input
                                name="persons"
                                label="Acompanhantes"
                                type="number"
                                required
                                min={0}
                                max={4}
                                value={companion}
                                onChange={(e) => setCompanion(Number(e.target.value))}
                            />
                            <Select
                                label="Comunidade"
                                name="community"
                                value={community}
                                onChange={(e) => setCommunity(e.target.value)}
                                options={communities.map(community => (
                                    {
                                        value: community.id,
                                        label: `${community.name} às ${community.time}`
                                    }
                                ))}
                            />
                        </div>
                        {messageError && (
                            <Alert>
                                {messageError}
                            </Alert>
                        )}
                        <Button
                            name="reserve"
                            label="Reservar"
                            onClick={handleCreateReservation}
                        />

                    </form>
                </main>
            </div>
        </Layout>
    )
}

export default Reservation;