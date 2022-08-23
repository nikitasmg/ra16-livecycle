import styled from 'styled-components'

const Button = styled.button`
  position: ${props => props.position ? props.position : 'absolute'};
  top: ${props => props.top};
  left: ${props => props.left};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 40px;
  height: 40px;
  
  padding: 5px;
  border: 2px solid black;
  border-radius: 50%;
  
  background-color: white;
  cursor: pointer;
  
  transition: all linear .2s;
  
  &:hover {
    transition: all ease .2s;
    border-color: grey;
  }
`


const Icon = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  
`

export const Styled = {
    Button,
    Icon
}