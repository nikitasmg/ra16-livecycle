import React, {useEffect, useState} from 'react';
import UiButton from "./components/uiButton/UiButton.jsx";
import Card from "./components/card/Card.jsx";
import TextArea from "./components/textArea/TextArea.jsx";
import {Styled} from "./styles.js";
import {CardServices} from "./services/CardServices.js";

const Crud = () => {
    const [content, setContent] = useState('')
    const [cards, setCards] = useState([])
    const cardService = CardServices()

    useEffect(( ) => {
        getAllCards()
    }, [])

    const addOne = async (e) => {
        e.preventDefault()
        const card = {
            id: String(Date.now()),
            content
        }
        cardService.add(card)
            .then(getAllCards)
        setContent('')
    }

    const handleDelete = async (id) => {
        cardService._delete(id).then(getAllCards)
    }

    const getAllCards = async () => {
        cardService.getAll()
            .then(({data}) => setCards(data))
    }

    const handleRefresh = async () => {
        await getAllCards()
    }
    return (
        <>  <Styled.Header>
            <Styled.Title>Notes</Styled.Title>
            <UiButton
                icon={'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Refresh_icon.svg/1200px-Refresh_icon.svg.png'}
                position={'relative'}
                onClick={handleRefresh}
            />
        </Styled.Header>

            <Styled.Cards>
                {cards.length && cards.map(card => <Card key={card.Id} card={card} deleteCard={(id) => handleDelete(id)}/>)}
            </Styled.Cards>
            <Styled.Form onSubmit={(e) => addOne(e)}>
                <TextArea value={content} onChange={(e) => setContent(e)}/>
                <UiButton icon={'https://iconape.com/wp-content/files/xh/367685/svg/send-logo-icon-png-svg.png'}
                          bottom={'15px'} right={'15px'}/>
            </Styled.Form>


        </>
    );
};

export default Crud;