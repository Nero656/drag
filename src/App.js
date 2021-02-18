// import Nav from 'react-bootstrap/Nav'
import React, {useState} from "react";
import MainApp from './translator/mainApp'
import Navbar from 'react-bootstrap/Navbar'
import Context from "./contex";

function App() {
    let [phrases, setPhrases] = React.useState([
        {
          id: 0,
          completed: false,
          title: 'Купить хлеб',
          translate: 'Buy bread'
        },
        {
            id: 1,
            completed: false,
            title: 'Вечером Джон будет смотреть кино',
            translate: 'John will watch a movie tonight'
        },
        {
            id: 2,
            completed: false,
            title: 'Джейсон любит кататься на мотоцикле',
            translate: 'Jason loves to ride a motorcycle'
        },
    ]);

    let [GlobId, setId] = useState(0);
    // let [GlobPhrase, setPhrase] = useState('');

    function TransSuccess(id, phrase){
        console.log(id, phrase);
        setPhrases(
            phrases.map(
                phrases => {
                    if (phrases.id === id && phrase === phrases.translate){
                        phrases.completed = !phrases.completed;
                    }
                    return phrases;
                }
            )
        )
    }

    async function idCreate(id){
        setId(id);

        console.log(GlobId);
    }

    function phraseCreate(phrase) {
        TransSuccess(GlobId, phrase);
    }

    return (
        <Context.Provider value={{}}>
            <div className="App">
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                    </Navbar.Collapse>
                </Navbar>
                <MainApp prop = {phrases} idPhrase = {idCreate} getPhrase={phraseCreate} />
            </div>
        </Context.Provider>
    );
}

export default App;
