import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  width: 200px;
  background-color: #26314f;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding: 50px 90px;
  border-radius: 30px;
`;

export const Title = styled.h1`
  font-size: 25px;
  font-weight: 700;
  padding: 10px;
  color: white;
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  border-radius: 10px;
  padding: 10px;
  outline: none;

  &:focus-visible {
    background-color: hsl(224, 35%, 65%);
    transition: 1s;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  cursor: pointer;
  color: #fff;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  background-color: #ff8533;
  &:hover {
    background-color: #fff;
    color: #9992f9;
    font-weight: 700;
    transition: 1s;
  }
`;
