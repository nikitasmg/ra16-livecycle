import React from 'react';
import {Styled} from "./styles.js";
import UiButton from "../uiButton/UiButton.jsx";

const Card = ({card ,deleteCard}) => {
    return (
        <Styled.Card>
            {card.Content}
            <UiButton icon={'https://free-png.ru/wp-content/uploads/2022/01/free-png.ru-388.png'} top={'-20px'} right={'-20px'} onClick={() => deleteCard(card.Id)} />
        </Styled.Card>
    );
};

export default Card;