import React from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';

import Logo from '../../assets/img/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import * as S from './styles';

const SignUp: React.FC = () => {
  return (
    <S.Container>
      <S.Background />
      <S.Content>
        <img src={Logo} alt="GoBaber" title="GoBaber" />

        <form>
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
        </form>

        <a href="createConta">
          <FiArrowLeft />
          Voltar para logon
        </a>
      </S.Content>
    </S.Container>
  );
};

export default SignUp;
