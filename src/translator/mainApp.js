import React, {useState} from "react";
import Phrase from "./phrase"
import TransForm from "./form"


function App({prop, getPhrase}) {
    let [tr, setTry] = useState(0);
    let [attempt, setAttempt] = useState(3);

    function TransTry(id, phrase) {
        getPhrase(id, phrase)
        if (phrase === prop[id].translate) {
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
            {prop.map((phrase, id) => {
                return (
                    <div key={phrase.id}>
                        <Phrase
                            phrase={phrase}
                            Try={tr}
                            attempt={attempt}
                            id={id}
                        />
                        <TransForm
                            translate={TransTry}
                            attempt={attempt}
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