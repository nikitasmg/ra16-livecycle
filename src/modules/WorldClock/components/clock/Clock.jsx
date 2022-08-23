import React, {useEffect, useState} from 'react';
import {Styled} from "./style.js";
import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)

const Clock = ({clock, closeClock}) => {
    const [time, setTime] = useState(dayjs().utc().utcOffset(+clock.offset))

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(dayjs().utc().utcOffset(+clock.offset))
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <Styled.Wrapper>
            <Styled.Title> {clock.city} </Styled.Title>
            <Styled.Clock>
                <Styled.Minutes rotate={time.minute() * 6}/>
                <Styled.Seconds rotate={time.second() * 6}/>
                <Styled.Hour rotate={time.hour() * 30}/>
                <Styled.Twelve>12</Styled.Twelve>
                <Styled.One>1</Styled.One>
                <Styled.Two>2</Styled.Two>
                <Styled.Three>3</Styled.Three>
                <Styled.Four>4</Styled.Four>
                <Styled.Five>5</Styled.Five>
                <Styled.Six>6</Styled.Six>
                <Styled.Seven>7</Styled.Seven>
                <Styled.Eight>8</Styled.Eight>
                <Styled.Nine>9</Styled.Nine>
                <Styled.Ten>10</Styled.Ten>
                <Styled.Eleven>11</Styled.Eleven>
                <Styled.Close onClick={() => closeClock(clock.id)}/>
            </Styled.Clock>
        </Styled.Wrapper>
    );
};

export default Clock;