import React, { useState } from 'react';
import styled from 'styled-components';
import DataInfo from './component/DataInfo';
import DayInfo from './component/DayInfo';


const Apps = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-size: 20px;
  font-family: Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif;
`

const MainInfo = styled.div`
  height: 5vh;
  font-size: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 
`
const Logo = styled.p`
  text-align: center
`

const ButtonAdd = styled.button`
  font-size: 25px;
  border: 0px;
  font-size: 40px;
  color: red;
  font-family: coursive;
  font-weight: bold;
  background-color: #0000000;
  &:hover {
    cursor: pointer;
    color: palevioletred;
  }
  &:active {
    color: red;
  }
`

const Modal = styled.div`
  position: fixed;
  background-color: #00000080;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalComponent = styled.div`
  background-color: #cbcbcb;
  height: 25vh;
  width: 50vw;
  border-radius: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`


const TextDiv = styled.div`
  background-color: #cbcbcb;
  height: 20vh;
  border-radius: 20px;
  padding: 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`


const Input = styled.input`
  &:focus-visible{
  animation: show1 0.5s 1;
  outline: none;
  };
  height: 25px;
`
const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
`

const CloseButton = styled.button`
  color: #144ef1;
  font-weight: bold;
  font-size: 20px;
  background-color: rgba(0,0,0,0);
  border: 1px solid gray;
  border-left: 0;
  border-right: 0;
  border-bottom: 0;
  border-radius: 0px 0px 0px 20px;
  padding: 10px;
  width: 100%;
    &:hover {
    cursor: pointer;
    color: red;
  }
`

const OkButton = styled.button`
  color: #144ef1;
  font-size: 20px;
  background-color: rgba(0,0,0,0);
  border: 1px solid gray;
  border-right: 0;
  border-bottom: 0;
  border-radius: 0px 0px 20px 0px;
  padding: 10px;
  width: 100%;
    &:hover {
    cursor: pointer;
    color: #144ef9bd;
  }
`
const H = styled.p`
  font-weight: bold;
`

const P = styled.p`
`

function App() {
  const [isAdd, Add] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const AddNewEvent = () => {
    let el = document.getElementById(message.split("-").join([]));
    if(el){
      el.style.backgroundColor = "#cecef1";
      Add(false);
    } else{
      alert("enter '00' instead of your minutes")
    }

  }

  const AddNewEventModal =
      <Modal>
        <ModalComponent>
          <TextDiv>
            <H>https://Calendar.com</H>
            <P>Enter event time:</P>
            <P>00:00-00</P>
            <Input 
            type="text"
            id="message"
            name="message"
            onChange={handleChange} />
          </TextDiv>
          <ButtonDiv>
            <CloseButton onClick={() => Add(false)}>Cancel</CloseButton>
            <OkButton onClick={() => AddNewEvent()}>OK</OkButton>
          </ButtonDiv>
        </ModalComponent>

      </Modal>;


  return (
    <Apps>
      <MainInfo>
        <Logo>Interview Calendar</Logo>
        <ButtonAdd onClick={() => Add(true)} >+</ButtonAdd>
      </MainInfo>
      <DataInfo/>
      <DayInfo/>
      {isAdd? AddNewEventModal : null}
    </Apps>
  );
}

export default App;
