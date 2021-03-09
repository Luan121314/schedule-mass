import React from 'react';
import { Link } from 'react-router-dom';
import {FaAngleRight} from 'react-icons/fa'
import churchImg from './../../assets/images/church01.png'
import './styles.css'

const Home = () => {
    return (
        <div className="home-container">
            <div className="logo">
                <img
                    src={churchImg}
                    alt=""
                    className="img-logo"
                />
                <span className="title" >Paróquia São Joaquin</span>
            </div>
            <div className="content">
                <div>
                    <p>
                        Conforme as medidas de prevenção a COVID-19 as atividade nas
                        igrejas continuam, porém com
                        as seguintes regras:
                    </p>
                    <div className="rules">
                        <li>-Ocupação com 30% da capacidade total</li>
                        <li>-Uso obrigatório de máscara</li>
                        <li>-Uso do álcool gel</li>
                    </div>
                    <p>
                        De acordo com a primeira medida, referente a lotação. Nossa igreja tem 24 assentos disponíveis, reserve o seu 😉.
                    </p>
                </div>

                    <p className="reservation" >As reservas estão em <span>10%</span></p>

                <Link to="/reservations" >Reservar <FaAngleRight size={20} /></Link>
            </div>
        </div>
    )
}

export default Home;