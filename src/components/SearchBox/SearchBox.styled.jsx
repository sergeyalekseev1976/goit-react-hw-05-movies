import styled from 'styled-components';

export const FormWrap = styled.form`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  max-width: 400px;
  border-radius: 3px;
  overflow: hidden;
  border: 1px solid;
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  border-radius: 3px;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const FormBtn = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-color: transparent;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    color: orangered;
  }
`;
