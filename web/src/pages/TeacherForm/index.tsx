/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

const TeacherForm: React.FC = () => {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo eh preencher esse formulario."
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>

          <Input name="name" label="Nome completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="WhatsApp" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

          <Input name="subject" label="Materia" />
          <Input name="cost" label="Custo da sua hora por aula" />
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante" />
            importante!
            <br />
            Preencha todos os dados
          </p>

          <button type="button">Salvar cadastro</button>
        </footer>
      </main>
    </div>
  );
};

export default TeacherForm;
