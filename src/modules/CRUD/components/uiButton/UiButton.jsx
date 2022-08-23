import React from 'react';
import {Styled} from './styles.js'

const UiButton = (props) => {
    return (
        <Styled.Button  {...props}>
            <Styled.Icon src={props.icon} alt="icon"/>
        </Styled.Button>
    );
};

export default UiButton;