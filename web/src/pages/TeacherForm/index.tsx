/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

const TeacherForm: React.FC = () => {
  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' },
  ]);

  const addNewScheduleItem = () => {
    setScheduleItems([...scheduleItems, { week_day: 0, from: '', to: '' }]);
  };

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
          <Textarea name="bio" label="Biografia" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

          <Select
            name="subject"
            label="Materia"
            options={[
              { value: 'Portugues', label: 'Portugues' },
              { value: 'Matematica', label: 'Matematica' },
              { value: 'Ciencias', label: 'Ciencias' },
            ]}
          />
          <Input name="cost" label="Custo da sua hora por aula" />
        </fieldset>

        <fieldset>
          <legend>
            Horarios disponiveis
            <button type="button" onClick={addNewScheduleItem}>
              + Novo horario
            </button>
          </legend>

          {scheduleItems.map(scheduleItem => {
            return (
              <div key={scheduleItem.week_day} className="schedule-item">
                <Select
                  name="week_day"
                  label="Dia da semana"
                  options={[
                    { value: '0', label: 'Domingo' },
                    { value: '1', label: 'Segunda-feira' },
                    { value: '2', label: 'Terca-feira' },
                    { value: '3', label: 'Quarta-feira' },
                    { value: '4', label: 'Quinta-feira' },
                    { value: '5', label: 'Sexta-feira' },
                    { value: '6', label: 'Sabado-feira' },
                  ]}
                />
                <Input type="time" name="from" label="Das" />
                <Input type="time" name="to" label="Ate" />
              </div>
            );
          })}
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
