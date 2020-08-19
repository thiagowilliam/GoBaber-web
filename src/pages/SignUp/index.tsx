import React, { useCallback } from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import Logo from '../../assets/img/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import * as S from './styles';

const SignUp: React.FC = () => {
  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatorio'),
        email: Yup.string()
          .required('E-mail obrigatorio')
          .email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'No minimo 6 dígitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <S.Container>
      <S.Background />
      <S.Content>
        <img src={Logo} alt="GoBaber" title="GoBaber" />

        <Form onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>

          <Input icon={FiUser} name="name" placeholder="Nome" />
          <Input icon={FiMail} name="email" placeholder="E-mail" />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Password"
          />

          <Button>Cadastrar</Button>
        </Form>

        <a href="createConta">
          <FiArrowLeft />
          Voltar para logon
        </a>
      </S.Content>
    </S.Container>
  );
};

export default SignUp;
