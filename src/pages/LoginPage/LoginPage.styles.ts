import styled from 'styled-components';

export const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  text-align: center;
`;

export const LoginPageForm = styled.form`
  display: grid;
  margin: auto;
  grid-auto-columns: max-content;
  grid-auto-rows: max-content;
`;

export const LoginPageInput = styled.input`
  border-radius: 3px;
`;

export const LoginPageFormButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
`;

export const LoginPageFormButton = styled.button`
  width: 70px;
`;
