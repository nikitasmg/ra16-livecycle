import WorldClock from "./modules/WorldClock/WorldClock.jsx";
import styled from 'styled-components'
import Crud from "./modules/CRUD/Crud.jsx";

function App() {
    const Wrapper = styled.div`
      padding: 20px 50px;
    `
    return (
        <Wrapper>
            {/*<WorldClock/>*/}
            <Crud/>
        </Wrapper>
    )
}

export default App
