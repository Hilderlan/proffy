import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/26195401?s=460&u=6ef94d387483ba3cd321981ea0e5bdd18e6f1d75&v=4"
          alt="Hilderlan"
        />
        <div>
          <strong>Hilderlan</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Teste tyeasdasdadasdasd
        <br />
        askljdalskdjasldjasdkjals TESTE asdklçasdkçasdkçlasdkalçsdkalçsdkasdkl
      </p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ 100,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato.
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
