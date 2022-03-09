import React from 'react';
import { Celular } from '../components/Celular';
import { Container } from '../components/Container';
import { MdPhoneInTalk } from 'react-icons/md';
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';
import { AiOutlineGlobal, AiOutlineFacebook } from 'react-icons/ai';


import styled from '../styles/Home.module.css';

const logo = '/logo-vejartes.png';
const logoCvDigital = '/logo-cvdigital.png';
const divisor = '/separator.png';

const Header:React.FC = () => {
    return (
        <header className={styled.header} >
            <img src={logo} />
        </header>
    );
};

const Content = () => {
    return (
        <main className={styled.main}>
            <h2>Nossos Serviços:</h2>
            <p>
                <a>Artes Gráfica & Digitais</a> <br/>
                <a>Panfletos</a>                
                <a>Banner</a> <br/>
                <a>Cartões de Visita</a> <br/>
                <a>Criação de Sites e Aplicativos</a>
            </p>
            
        </main>
    );
};

const InterativeArea = () => {
    return (
        <section className={styled.interativeArea}>
            <div className={styled.content}>
                <a href='tel:+5581982917622'><MdPhoneInTalk/></a>
                <a href='https://api.whatsapp.com/send?phone=5581982917622&text=Gostaria%20de%20mais%20informa%C3%A7%C3%B5es&lang=pt_br' ><FaWhatsapp/></a>
                <a href='https://vejartes.com.br'><AiOutlineGlobal/></a>

                <a href='https://www.instagram.com/vejartes/?hl=pt'><FaInstagram/></a>
                <a href='https://pt-br.facebook.com/vejartes/'><AiOutlineFacebook/></a>
                <a href='https://maps.app.goo.gl/7oG35NZi4uv4g6s18'><FaMapMarkerAlt/></a>
            </div>
            {/* <ButtonAction /> */}            
        </section>
    );
};

const Footer = () => {
    return (
        <footer className={styled.footer}>
            <img src={logo} />
            <img src={logoCvDigital} />
        </footer>
    );
};

const Home: React.FC = () => {
    return (
        <Container>
            <Celular>
                <Header />
                <Content />
                <div className={styled.divisor}>
                    <img src={divisor} />
                </div>

                <InterativeArea />
                <Footer />
            </Celular>
        </Container>
    );
};

export default Home;