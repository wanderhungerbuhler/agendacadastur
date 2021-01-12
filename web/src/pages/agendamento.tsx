import React, { useCallback, useEffect, useMemo, useState } from "react";
import Head from 'next/head';
import { useRouter } from 'next/router';
import DayPicker, { DayModifiers } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import ButtonNext from "@/components/ButtonNext";

import { Calendar, Hour } from "@/styles/pages/Agendamento";
import api from "@/services/api";
import { format } from "date-fns";

interface MonthAvailabilityItem {
  day: number;
  hour: string;
  available: boolean;
}

interface Appointment {
  hour: string;
  available: boolean;
}

interface DataProps {
  cpf: string;
  name: string;
  email: string;
  cadastur: string;
  phone: string;
  whatsapp: string;
}

interface AppointmentsProps {
  date: string;
  hour: string;
}

export default function Agendamento() {
  const router = useRouter();

  const [disabledButton, setdisabledButton] = useState(false);

  const [user, setUser] = useState<DataProps>();
  const [appointments, setAppointments] = useState<AppointmentsProps>();


  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const [monthAvailability, setMonthAvailability] = useState<MonthAvailabilityItem[]>([]);

  const handleDayChange = useCallback((day: Date, modifiers: DayModifiers) => {
    if(modifiers.available && !modifiers.disabled) {
      setSelectedDate(day);
    }
  }, []);

  const handleMonthChange = useCallback((month: Date) => {
    setCurrentMonth(month);
  }, []);

  useEffect(() => {
    const monthBR = currentMonth.getMonth()+1;
    console.log(format(monthBR, 'MM'));

    api.get('/appointments', {
      params: {
        date: currentMonth.getFullYear()+'-'+'0'+monthBR+'-'+format(selectedDate, 'dd'),
      },
    }).then(response => {
      setMonthAvailability(response.data);
    });

  }, [currentMonth, selectedDate]);

  const [selectedHour, setSelectedHour] = useState<string[]>([]);
  
  const formatDate = format(selectedDate, 'yyyy-MM-dd');

  const handleSelectHour = useCallback((hour: string) => {
    setSelectedHour([hour]);
    setdisabledButton(true);
  }, []);
  

  useEffect(() => {
    const user = JSON.stringify(localStorage.getItem('@Cadastur:user'));
    const date = JSON.stringify(localStorage.getItem('@Cadastur:appointment'));
    const hour = JSON.stringify(localStorage.getItem('@Cadastur:appointmenthour'));

    const dataUser = JSON.parse(user);

    const dataAppointments = {
      date: JSON.parse(date),
      hour: JSON.parse(hour)
    }

    setUser(dataUser);
    setAppointments(dataAppointments)
  }, []);


  const handleConfirmAppointment = useCallback(async () => {
    localStorage.setItem('@Cadastur:appointment', formatDate);
    localStorage.setItem('@Cadastur:appointmenthour', String(selectedHour));
    
    router.push('confirmacao', 'confirmacao', { shallow: true });
  }, [formatDate, selectedHour]);
  
  // const disabledDays = useMemo(() => {
  //   const dates = monthAvailability
  //   .filter(monthDay => monthDay.available === false)
  //   .map(monthDay => {
  //     const monthBR = currentMonth.getMonth() + 1; 
  //     const date = currentMonth.getFullYear()+'-'+monthBR+'-'+selectedDate.getDate();
      
      
  //     return new Date(date);
  //   });
    
  //   console.log(dates);

  //   return dates;
  // }, [currentMonth, monthAvailability]);
  
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

            { selectedDate && (
              <Hour>
                { monthAvailability ? (
                  monthAvailability.map(appointments => (
                    <span key={appointments.hour}
                      onClick={() => handleSelectHour(appointments.hour)}
                      className={selectedHour.includes(appointments.hour) ? 'selected' : ''}
                    >{appointments.hour}</span>
                  ))
                ) : <p>Não existem horários disponíveis neste dia.</p>  }
              </Hour>
            )}

          </Calendar>

        </Main>
      <Footer>
        <ButtonNext children="Voltar" onClick={() => router.back()} />
        { disabledButton && <ButtonNext children="Avançar" onClick={() => handleConfirmAppointment()} /> }
      </Footer>
    </>
  );
}
