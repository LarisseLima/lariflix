import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/loguinho.png'

function Footer() {
  return (
    <FooterBase>
      <img src={Logo} alt="Logo LariFlix"/>
      <p>
        Criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
