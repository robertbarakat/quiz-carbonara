import React from 'react';
import { esitoQuiz } from '../../assets/utils/utils';

function EsitoQuiz({ correctAnswers, totalAnswers }) {
    return (
        <div className='esito-quiz-container'>
            <h4>
                Hai risposto correttamente a {correctAnswers} domande su{' '}
                {totalAnswers}
            </h4>
            <h3>{esitoQuiz(correctAnswers)}</h3>
        </div>
    );
}

export default EsitoQuiz;
