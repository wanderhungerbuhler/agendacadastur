import React, { useCallback, useEffect, useState } from "react";
import Head from 'next/head';
import { useRouter } from 'next/router';

import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import ButtonNext from "@/components/ButtonNext";

import { CardsAtendimento } from '@/styles/pages/Atendimento';
import api from "@/services/api";

const atendimentos= [
  { id: 1, title: 'Retirada de Carteira' },
  // { id: 2, title: 'Atendimento Cadastur' }
];

const Atendimento: React.FC = () => {
  const router = useRouter();
  const [selectAtendimento, setSelectAtendimento] = useState<number[]>([]);

  const handleSelectAtendimento = useCallback(async (atendimento: number) => {
    if(atendimento) {
      setSelectAtendimento([atendimento]);
    }
  }, []);

  if(selectAtendimento[0] == 1) {
    localStorage.setItem('@Cadastur:atendimento', JSON.stringify({ tipo_atendimento: String(selectAtendimento)}));
    router.push('/agendamento', '/agendamento', { shallow: true });
  }else if(selectAtendimento[0] == 2){
    router.push('/teste', '/teste', { shallow: true });
    localStorage.setItem('@Cadastur:atendimento', JSON.stringify({ tipo_atendimento: String(selectAtendimento)}));
  }

  return (
    <>
      <Header subTitle="Atendimento" />
      <Head>
        <title>Cadastur - Atendimento</title>
      </Head>

        <Main>
          <h1>Escolha o tipo de Atendimento</h1>

          <CardsAtendimento>
            <ul>
              {atendimentos.map(atendimento => (
                <li
                  key={atendimento.id}
                  onClick={() => handleSelectAtendimento(atendimento.id)}
                  className={selectAtendimento.includes(atendimento.id) ? 'selected' : ''}
                >{atendimento.title}</li>
              ))}
            </ul>
          </CardsAtendimento>

        </Main>
      <Footer>
        <ButtonNext children="Voltar" onClick={() => router.back()} />
      </Footer>
    </>
  );
}

export default Atendimento;
