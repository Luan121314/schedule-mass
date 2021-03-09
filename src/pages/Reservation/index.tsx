import React from 'react';
import Alert from '../../components/Alert';
import Button from '../../components/inputs/Button';
import Input from '../../components/inputs/Input';
import Select from '../../components/inputs/Select';
import Layout from '../../Layout';
import './styles.css';

const Reservation = () => {
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
                            <Input name="name" label="Nome" required />
                            <Input name="email" label="Email" type="email" required />
                            <Input
                                name="persons"
                                label="Acompanhantes"
                                type="number"
                                required
                                min={0}
                                max={4}
                            />
                            <Select
                                label="Comunidade"
                                name="community"
                                options={[
                                    "São Paulo",
                                    "São José",
                                    "São Joaquin",
                                    "Sagrado Coração"
                                ]}
                            />
                        </div>
                        <Button name="reserve" label="Reservar" />

                    </form>
                </main>
            </div>
        </Layout>
    )
}

export default Reservation;