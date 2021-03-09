import React from 'react';
import { FaChurch, FaFacebook, FaHeart, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import './styles.css';

const Layout: React.FC = ({ children }) => {
    return (
        <div className="container">
            <header>
                <span className="title" >Paróquia São Joaquin</span>
                <FaChurch size={30} />
            </header>
            <main className="content-main">
                {children}
            </main>
            <footer>
                <div className="contact">

                    <span className="title" >Nossas redes sociais</span>
                    <div className="content-contact">
                        <a target="_blank" rel="noopener noreferrer" href='https://wa.me/5511948396907/?text=Olá podemos conversar ? Aguardo seu retorno !' >
                            <FaWhatsapp color="#34af23" size={35} />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://pt-br.facebook.com/paroquiasaojoaquin" >
                            <FaFacebook color="#3b5998" size={35} />
                        </a>

                        <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/paroquiasaojoaquin" >
                            <FaInstagram color="#3f729b" size={35} />
                        </a>

                        <a target="_blank" rel="noopener noreferrer" href="mailto:paroquiasaojoaquin.contato@gmail.com" >
                            <SiGmail color="#dd4b39" size={35} />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/paroquiasaojoaquin" >
                            <FaTwitter color="#00aced" size={35} />
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