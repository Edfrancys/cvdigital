import { NextPage } from 'next';
import React from 'react';
import { Celular } from '../components/Celular';
import { Container } from '../components/Container';

import styled from '../styles/Home.module.css'

const Header = ()=> {
  return (
    <header className={styled.header}>
      Header
    </header>
  );
}

const Content = ()=> {
  return (
    <main className={styled.main}>
      Main
    </main>
  );
}

const Footer = ()=> {
  return (
    <footer className={styled.footer}>
        Footer
    </footer>
  );
}

const Home: NextPage = () => {
    return (
        <Container>
          <Celular>
             <Header />
             <Content />
             <Footer />
          </Celular>
        </Container>
    );
};

export default Home;