import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa'
import churchImg from './../../assets/images/church.png'
import './styles.css'
import api from '../../services/api';
import manifest from '../../manifest';
import { CommunityProps } from '../../interfaces';



const Home = () => {
    const [communities, setCommunities] = useState<CommunityProps[]>([]);

    function handleLoadCommunities() {
        api.get<CommunityProps[]>("communities").then(response => {
            setCommunities(response.data)
        });
    }

    useEffect(handleLoadCommunities, [])
    return (
        <div className="home-container">
            <div className="logo">
                <img
                    src={churchImg}
                    alt=""
                    className="img-logo"
                />
                <span className="title" >{manifest.title}</span>
            </div>
            <div className="content">
                <div>
                    <p>
                        Conforme as medidas de prevenção a COVID-19 as atividade nas
                        igrejas continuam, porém com
                        as seguintes regras:
                    </p>
                    <div className="rules">
                        <li>-Ocupação com {manifest.limitation}% da capacidade total</li>
                        <li>-Uso obrigatório de máscara</li>
                        <li>-Uso do álcool gel</li>
                    </div>
                    <p>
                        De acordo com a primeira medida, referente a lotação. Confira as disponibilidade de assentos na comunidade desejada e reserve 😉.
                    </p>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Comunidade</th>
                            <th>Disponibilidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {communities.map(community => (
                            <tr key={community.id} >
                                <td>{community.name}</td>
                                <td>{community.limiter - community.reservation}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>


                <Link to="/reservations" >Reservar <FaAngleRight size={20} /></Link>
            </div>
        </div>
    )
}

export default Home;