import React from 'react';
import {Styled} from "./style.js";

const AddForm = ({city, offset, changeCity, changeOffset, handleSubmit}) => {
    return (
        <Styled.Form onSubmit={handleSubmit}>
            <Styled.Label>
                Название
                <Styled.Input
                    type={"text"}
                    placeholder={'city'}
                    value={city}
                    onChange={(e) => changeCity(e.target.value)}
                />
            </Styled.Label>
            <Styled.Label>
                Временная зона
                <Styled.Input
                    type={"number"}
                    placeholder={'time zone'}
                    value={offset}
                    onChange={(e) => changeOffset(e.target.value)}
                />
            </Styled.Label>
            <Styled.Button type='submit'>
                Добавить
            </Styled.Button>
        </Styled.Form>
    );
};

export default AddForm;