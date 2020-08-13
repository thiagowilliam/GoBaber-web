import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import Logo from '../../assets/img/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import * as S from './styles';

const SignIn: React.FC = () => {
  return (
    <S.Container>
      <S.Content>
        <img src={Logo} alt="GoBaber" title="GoBaber" />

        <form>
          <h1>Faça seu logon</h1>

          <Input icon={FiMail} name="email" placeholder="E-mail" />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Password"
          />

          <Button>Entrar</Button>

          <a href="forgot">Esqueci minha senha</a>
        </form>

        <a href="createConta">
          <FiLogIn />
          Criar conta
        </a>
      </S.Content>
      <S.Background />
    </S.Container>
  );
};

export default SignIn;
