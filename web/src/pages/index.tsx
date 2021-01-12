import React, { useCallback, useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import getValidationErrors from '@/utils/getValidationErrors';

import { FiCreditCard, FiAlignLeft, FiMail, FiPhone } from 'react-icons/fi';
import { BsCardText } from 'react-icons/bs';
import { FaWhatsapp } from 'react-icons/fa';

import Header from '@/components/Header';
import Input from '@/components/Input';
import InputMask from '@/components/InputMask';
import Footer from '@/components/Footer';
import ButtonNext from '@/components/ButtonNext';

import { Wrapper, Container } from '@/styles/pages/Home';
import api from '../services/api';

interface DataProps {
  cpf: string;
  name: string;
  email: string;
  cadastur: string;
  phone: string;
  whatsapp: string;
}

export default function Home() {
  const formRef = useRef<FormHandles>(null);
  const router = useRouter();

  const [data, setData] = useState<DataProps>();
  const [disabled, setDisabled] = useState(null);

  const [errors, setErrors] = useState(false);

  const handleBlur = useCallback((event) => {
    setDisabled(event);
  }, []);

  const handleSubmit = useCallback(async (dataForm: DataProps) => {
    try {
      const schema = Yup.object().shape({
        cpf: Yup.string().required('CPF obrigatório'),
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string().email('Digite um e-mail válido').required('E-mail obrigatório'),
        cadastur: Yup.string().required('Cadastur obrigatório'),
        phone: Yup.string().required('Telefone obrigatório'),
      });

      await schema.validate(dataForm, {
        abortEarly: false,
      });

      const credentials = {cpf: dataForm.cpf, name: dataForm.name, email: dataForm.email, cadastur: dataForm.cadastur, phone: dataForm.phone, whatsapp: dataForm.whatsapp };
      localStorage.setItem('@Cadastur:user', JSON.stringify(credentials));

      router.push('/atendimento', '/atendimento', { shallow: true })

    }catch(err) {
      const erros = getValidationErrors(err);
      formRef.current.setErrors(erros);

      if(err.errors.length > 0) {
        setErrors(true);
      }
    }

  }, []);

  useEffect(() => {
    const response = localStorage.getItem('@Cadastur:user');
    setData(JSON.parse(response));
  }, []);

  if(data) {
    formRef.current?.setFieldValue('cpf', data.cpf);
    formRef.current?.setFieldValue('name', data.name);
    formRef.current?.setFieldValue('email', data.email);
    formRef.current?.setFieldValue('cadastur', data.cadastur);
    formRef.current?.setFieldValue('phone', data.phone);
    formRef.current?.setFieldValue('whatsapp', data.whatsapp);
  }

  return (
    <Wrapper>
      <Head>
        <title>Cadastur - Retirada de Carteira</title>
      </Head>

      <Header subTitle="Dados Pessoais" />

      <Container>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <InputMask icon={FiCreditCard} label="CPF" name="cpf" mask="999.999.999-99" />
          <Input icon={FiAlignLeft} label="Nome Completo" name="name" />
          <Input icon={FiMail} label="E-mail" name="email" />
          <InputMask icon={BsCardText} label="Cadastur" name="cadastur" mask="9999999"
            onBlur={(event) => handleBlur(event.target.value)}
          />
          <InputMask icon={FiPhone} label="Telefone" name="phone" mask="(99) 9999-9999" />
          <InputMask icon={FaWhatsapp} label="WhatsApp" name="whatsapp" mask="(99) 99999-9999" />
          <ButtonNext type="submit" children="Continuar" /> 
          {/* { disabled
            ? <ButtonNext type="submit" onClick={() => !errors ? '' : router.push('/atendimento', '/atendimento', { shallow: true })} children="Continuar" />
            : <ButtonNext style={{ background: '#ccc', cursor: 'no-drop' }} type="button" children="Continuar" />
          } */}
        </Form>
      </Container>

      <Footer />
    </Wrapper>
  )
}
