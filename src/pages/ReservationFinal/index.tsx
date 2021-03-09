import React from 'react';
import { useHistory } from 'react-router';
import Alert from '../../components/Alert';
import Button from '../../components/inputs/Button';
import Layout from '../../Layout';
import './styles.css';


const ReservationFinal = () => {
    const history = useHistory()

    function handleRedirectToPageHome() {
        history.push('/')
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
                            <span><strong>Nome: </strong> Luan Correia Neves</span>
                            <span><strong>Email: </strong> luan.staner@gmail.com</span>
                            <span><strong>Celular: </strong> 11 968979457</span>
                            <span><strong>Reservas: </strong> 2</span>
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