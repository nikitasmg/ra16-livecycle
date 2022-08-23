import styled from "styled-components";

const Form = styled.form`
  position:relative;
  width:500px;
`

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  margin-bottom: 50px;
`

const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 20px;
  
  margin-bottom: 40px;
`

const Title = styled.h1`
  font-size: 40px;
`
export const Styled = {
    Form,
    Cards,
    Header,
    Title
}