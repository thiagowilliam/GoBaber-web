import styled from 'styled-components';
import { shade } from 'polished';

import signInBackgroundImg from '../../assets/img/sign-in-background.png';

export const Container = styled.section`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;
export const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
      color: #fff;
    }

    a {
      color: #f4ede8;
      display: block;
      text-decoration: none;
      margin-top: 24px;
      transition: all 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    color: #ff9000;
    display: block;
    text-decoration: none;
    margin-top: 24px;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    font-size: 18px;
    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }

    svg {
      margin-right: 16px;
    }
  }
`;
export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`;
