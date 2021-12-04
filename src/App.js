import React from 'react';
import Header from './components/Header/Header';
import QuizContainer from './components/QuizContainer/QuizContainer';

function App() {
    return (
        <div className='app-container'>
            <Header
                title='Test: come si fa la carbonara?'
                subtitle='Rispondi alle domande'
            />

            <QuizContainer>
                <h3>Testo random</h3>
            </QuizContainer>
        </div>
    );
}

export default App;
