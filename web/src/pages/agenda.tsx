import React, { useCallback, useEffect, useState } from "react";
import Head from 'next/head';
import { useRouter } from 'next/router';
import DayPicker, { DayModifiers } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import ButtonNext from "@/components/ButtonNext";

import { Calendar } from "@/styles/pages/Agendamento";
import api from "@/services/api";
import { format } from "date-fns";


interface UserDataAppointments {
  nome: string;
  telefone: string;
  whatsapp: string;
  hora_agendamento: string;
}

export default function Agendamento() {
  const router = useRouter();

  const [usersAppointments, setUsersAppointments] = useState<UserDataAppointments[]>([]);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const handleDayChange = useCallback((day: Date, modifiers: DayModifiers) => {
    if(modifiers.available && !modifiers.disabled) {
      setSelectedDate(day);
    }
  }, []);

  const handleMonthChange = useCallback((month: Date) => {
    setCurrentMonth(month);
  }, []);
  
  useEffect(() => {
    api.post('/appointments', {
      date: format(selectedDate, 'yyyy-MM-dd')
    }).then(response => {
      setUsersAppointments(response.data);
    });
  }, [selectedDate]);

  console.log(usersAppointments);
  
  return (
    <>
      <Header subTitle="Agendamento" />
      <Head>
        <title>Cadastur - Agendamento</title>
      </Head>
        <Main>
          <h1>Escolha uma Data</h1>

          <Calendar>
            <DayPicker
              weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
              fromMonth={new Date()}
              toMonth={new Date(2021, 1)}
              disabledDays={[{ daysOfWeek: [0, 6] },
                new Date('2021-01-21'),
                {
                  after: new Date('2021-02-13'),
                  before: new Date('2021-02-19'),
                }
              ]}
              modifiers={{
                available: { daysOfWeek: [1, 2, 3, 4, 5]}
              }}
              selectedDays={selectedDate}
              onDayClick={handleDayChange}
              onMonthChange={handleMonthChange}
              months={[
                'Janeiro',
                'Fevereiro',
                'Março',
                'Abril',
                'Maio',
                'Junho',
                'Julho',
                'Agosto',
                'Setembro',
                'Outubro',
                'Novembro',
                'Dezembro',
              ]}
            />

            <section>
              { usersAppointments.map(user => (
                <article>
                  <h3>{user.nome}</h3>
                  <p><b>Telefone:</b> {user.telefone}</p>
                  <p><b>WhatsApp:</b> {user.whatsapp}</p>
                  <p><b>Horário:</b> {user.hora_agendamento}</p>
                  <span>Agendado</span>
                </article>
              )) }
            </section>

          </Calendar>

        </Main>
      <Footer>
      </Footer>
    </>
  );
}
