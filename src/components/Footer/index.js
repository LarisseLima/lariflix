import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/loguinho.png'

function Footer() {
  return (
    <FooterBase>
      <img src={Logo} alt="Logo LariFlix" />
      <p>
        Criado por <a href="https://www.linkedin.com/in/larisselima/">Larisse Lima
          </a>
        {' '}

         (Na Imersão React da  <a href="https://www.alura.com.br/"> Alura)
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
