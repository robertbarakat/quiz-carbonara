import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    addCorrectAnswer,
    resetCorrectAnswers,
} from './store/actionCreators/correctAnswers';

import BoxContainer from './components/BoxContainer/BoxContainer';
import Button from './components/Button/Button';
import EsitoQuiz from './components/EsitoQuiz/EsitoQuiz';
import Header from './components/Header/Header';
import QuizContainer from './components/QuizContainer/QuizContainer';

import mockedData from './assets/mockedData/data.json';
import { isAnswerCorrect } from './assets/utils/utils';

const initialState = mockedData.map((el, idx) => ({
    ...el,
    id: idx,
    isActive: idx === 0,
}));

function App() {
    const correctAnswers = useSelector((state) => state.correctAnswers);
    const dispatch = useDispatch();

    const [data, setData] = useState(initialState);
    const [showResult, setShowResult] = useState(false);

    // Metodo per gestire la risposta dell'utente
    const handleChange = (currentQuestionIdx, playerAnswer, correctAnswer) => {
        // Incremento dle reducer in caso di risposta corretta
        if (isAnswerCorrect(playerAnswer, correctAnswer))
            dispatch(addCorrectAnswer());

        // Gestione della schermata da visualizzare
        if (currentQuestionIdx < data.length - 1) {
            const newData = data.map((el, idx) =>
                idx === currentQuestionIdx + 1
                    ? { ...el, isActive: true }
                    : { ...el, isActive: false }
            );
            setData(newData);
        } else setShowResult(true);
    };

    // Reset per ricominciare
    const resetQuiz = () => {
        dispatch(resetCorrectAnswers());
        setShowResult(false);
        setData(initialState);
    };

    return (
        <div className='app-container'>
            <Header
                title='Test: come si fa la carbonara?'
                subtitle='Rispondi alle domande'
            />

            <BoxContainer>
                {!showResult &&
                    data
                        .filter((el) => el.isActive)
                        .map((item, idx) => (
                            <React.Fragment key={{ idx }}>
                                <QuizContainer
                                    quizData={item}
                                    currentQuestionIdx={item.id}
                                    handleChange={handleChange}
                                />
                            </React.Fragment>
                        ))}

                {showResult && (
                    <>
                        <EsitoQuiz
                            correctAnswers={correctAnswers}
                            totalAnswers={data.length}
                        />

                        <Button
                            label='Riprova'
                            primary
                            style={{ width: '100%' }}
                            onClick={resetQuiz}
                        />
                    </>
                )}
            </BoxContainer>
        </div>
    );
}

export default App;
