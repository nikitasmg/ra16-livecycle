import styled from "styled-components";

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  width: 500px;
  align-items: self-end;
  margin-bottom: 50px;
`

const Input = styled.input`
  border: 1px solid black;
  padding: 5px 15px;
`

const Button = styled.button`
  padding: 5px 15px;
  border: 1px solid black;
`

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
`


export const Styled = {
    Form,
    Input,
    Button,
    Label
}