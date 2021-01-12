import { useCallback, useEffect, useState } from "react";
import { useRouter } from 'next/router';
import api from '../services/api';

import { Container } from '../styles/pages/Confirmacao';

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

export default function Confirmacao() {
  const router = useRouter();
  const [user, setUser] = useState<DataProps>();
  const [appointments, setAppointments] = useState<AppointmentsProps>();

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
    setAppointments(dataAppointments);
  }, []);

  const handleSendNewUser = useCallback(async() => {
    const users = JSON.parse(String(user));
      const newUser = {
        cpf: users.cpf,
        name: users.name,
        email: users.email,
        cadastur: users.cadastur,
        phone: users.phone,
        whatsapp: users.whatsapp,
        date: appointments.date,
        hour: appointments.hour
      }
  
      localStorage.setItem('@Cadastur:user', JSON.stringify(newUser));

    try {
      const response = await api.post('/users', newUser);

      if(response) {
        alert(`Enviamos um e-mail de confirmação do seu agendamento!`);
        router.push('http://guiadeturismo.rj.gov.br');
      }

    } catch(err) {
      console.log(err);
    }
  }, [user, appointments]);

 return(
  <Container>
    <h1>Você confirma o agendamento?</h1>
    <button onClick={() => handleSendNewUser()}>Confirmado!</button>
  </Container>
 );
}