import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Clock = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  box-shadow: 0 2px 30px rgba(0, 0, 0, 0.2);
  font-size: 24px;
  color: #444;
  
  :after {
    background: #aaa;
    content: "";
    width: 12px;
    height: 12px;
    border-radius: 50%;
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 2px solid #fff;
  }
`

const Minutes = styled.div`
  position: absolute;
  width: 4px;
  height: 80px;
  background: #444;
  top: 22.5%;
  left: 49%;
  transform-origin: bottom;
  transform: rotateZ(${props => props.rotate}deg);
`

const Hour = styled.div`
  position: absolute;
  width: 6px;
  height: 60px;
  background: #222;
  top: 30%;
  left: 49%;
  transform-origin: bottom;
  transform: rotateZ(${props => props.rotate}deg);
`


const Seconds = styled.div`
  position: absolute;
  width: 2px;
  height: 118px;
  background: red;
  top: 10.5%;
  left: 50%;
  transform-origin: bottom;
  transform: rotateZ(${props => props.rotate}deg);
`

const Digits = styled.span`
  position: absolute;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 700;
`

const Title = styled.h3`
  font-size: 20px;
  margin-bottom: 20px;
`

const Twelve = styled(Digits)`
  top: 10px;
  left: 46%;
`
const One = styled(Digits)`
  top: 10%;
  right: 26%;
`
const Eleven = styled(Digits)`
  top: 10%;
  left: 26%;
`
const Two = styled(Digits)`
  top: 25%;
  right: 10%;
`

const Three = styled(Digits)`
  right: 10px;
  top: 46%;
`

const Four = styled(Digits)`
  right: 30px;
  top: 67%;
`
const Five = styled(Digits)`
  right: 78px;
  top: 80%;
`
const Six = styled(Digits)`
  bottom: 10px;
  left: 50%;
`

const Seven = styled(Digits)`
  left: 80px;
  top: 82%;
`

const Eight = styled(Digits)`
  left: 30px;
  top: 67%;
`

const Nine = styled(Digits)`
  left: 10px;
  top: 46%;
`

const Ten = styled(Digits)`
  top: 25%;
  left: 10%;
`

const Close = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0;
  right: -20px;
  cursor:pointer;
  :after {
    content: '';
    position: absolute;
    top: 10px;
    right: 0;
    width: 20px;
    height: 2px;
    background-color: black;
    transform: rotate(45deg);
  }

  :before {
    content: '';
    position: absolute;
    top: 10px;
    right: 0;
    width: 20px;
    height: 2px;
    background-color: black;
    transform: rotate(-45deg);
  }
`
export const Styled = {
    Clock,
    Title,
    Hour,
    Seconds,
    Minutes,
    One,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
    Ten,
    Eleven,
    Twelve,
    Close,
    Wrapper
}