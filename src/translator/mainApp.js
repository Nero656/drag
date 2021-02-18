import React, {useState} from "react";
import Phrase from "./phrase"
import TransForm from "./form"


function App({prop, idPhrase, getPhrase}) {
    // const rand = prop.phrases[Math.floor((Math.random() * prop.phrases.length))];
    let [tr, setTry] = useState(0);
    let [attempt, setAttempt] = useState(3);
    let [itemId, setId] = useState(0)

    function PhraseId(id) {
        idPhrase(id);
        setId(id)
        // console.log(itemId)
    }


    function TransTry(phrase) {
        getPhrase(phrase)
        // console.log(phrase);
        if (phrase === prop[itemId].translate) {
            setAttempt(attempt + 1);
            setTry(tr = 1);
        }
        else if (attempt <= 2) {
            setAttempt(attempt - 1);
            setTry(tr = 2);
        } else if (attempt >= 2) {
            setAttempt(attempt - 1);
        }
    }

    return (
        <div className='indent container appForm'>
            <span>колличество попыток: {attempt}</span>
            {/*<Phrase phrase = {rand} Try={tr} attempt = {attempt}/>*/}
            {prop.map((phrase, id) => {
                return (
                    <div key={phrase.id}>
                        <Phrase
                            phrase={phrase}
                            Try={tr}
                            attempt={attempt}
                            id={itemId}
                        />
                        <TransForm
                            translate={TransTry}
                            attempt={attempt}
                            id={PhraseId}
                            propId={phrase.id}
                            comp={phrase.completed}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default App;