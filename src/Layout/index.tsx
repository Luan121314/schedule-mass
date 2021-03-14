import React from 'react';
import { FaChurch, FaFacebook, FaHeart, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import manifest from '../manifest';
import './styles.css';

const Layout: React.FC = ({ children }) => {
    return (
        <div className="container">
            <header>
                <span className="title" >{manifest.title}</span>
                <FaChurch size={30} />
            </header>
            <main className="content-main">
                {children}
            </main>
            <footer>
                <div className="contact">

                    <span className="title" >Nossas redes sociais</span>
                    <div className="content-contact">
                        <a target="_blank" rel="noopener noreferrer" href={`https://wa.me/${manifest.socialNetwork.whatsApp}/?text=Olá podemos conversar ? Aguardo seu retorno !`} >
                            <FaWhatsapp color="#34af23" size={35} />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href={`https://pt-br.facebook.com/${manifest.socialNetwork.facebook}`} >
                            <FaFacebook color="#3b5998" size={35} />
                        </a>

                        <a target="_blank" rel="noopener noreferrer" href={`https://instagram.com/${manifest.socialNetwork.instagram}`} >
                            <FaInstagram color="#3f729b" size={35} />
                        </a>

                        <a target="_blank" rel="noopener noreferrer" href={`mailto:${manifest.socialNetwork.email}`} >
                            <SiGmail color="#dd4b39" size={35} />
                        </a>
                    </div>
                </div>
                <div className="developer">
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/luan121314" >
                        <span>developer by </span> <FaHeart size={10} color="f00" /> Luan apps
                   </a>
                </div>
            </footer>
        </div>
    )
}

export default Layout;