import React, {useState} from 'react';
import AddForm from "./components/addForm/AddForm.jsx";
import Clock from "./components/clock/Clock.jsx";
import styled from "styled-components";

const WorldClock = () => {
    const [clocks, setClocks] = useState([])
    const [city, setCity] = useState('')
    const [offset, setOffset] = useState('')
    const closeClock = (id) => {
        setClocks(() => clocks.filter(el => el.id !== id))
    }
    const addClock = (e) => {
        e.preventDefault();
        const clock = {
            id: Date.now(),
            city,
            offset
        }
        setClocks(prev => [...prev, clock])
        resetInputs()
    }

    const resetInputs = () => {
        setOffset('')
        setCity('')
    }

    const ClockList = styled.div`
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 50px;
    `
    return (
        <>
            <AddForm
                handleSubmit={e => addClock(e)}
                city={city}
                offset={offset}
                changeCity={(value) => setCity(value)}
                changeOffset={(value) => setOffset(value)}
            />
            <ClockList>
                {clocks.map(clock => <Clock key={clock.id} clock={clock} closeClock={(id) => closeClock(id)}/>)}
            </ClockList>
        </>
    );
};

export default WorldClock;