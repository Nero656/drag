import React from "react";
import Alert from 'react-bootstrap/Alert';

export default function phrase({phrase, Try, attempt, id}){
    return(
        <div>
            <h1 className='text-center'>{phrase.title}</h1>
            {
                phrase.completed === true &&
                <Alert  variant='success'>
                    <p>Вы успешно перевели фразу<b>&ensp;{phrase.title}</b></p>
                </Alert>
            }
            {
                Try === 2 && attempt > 0 && phrase.completed === false && id === phrase.id &&
                <Alert variant='warning'>
                    <p>У вас осталось мало попыток</p>
                    <p>подсказка: <b>&ensp;{phrase.translate.substring(0,20)+'...'}</b></p>
                </Alert>
            }
            {
                attempt === 0 && phrase.completed === false && id === phrase.id &&
                <Alert variant='danger'>
                    <p>Вы не смогли перевети фразу<b>&ensp;{phrase.title}</b></p>
                    <p>правильный ответ будет: <b>&ensp;{phrase.translate}</b></p>
                </Alert>
            }
        </div>
    );
}