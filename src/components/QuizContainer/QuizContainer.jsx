import React from 'react';

function QuizContainer({ quizData, currentQuestionIdx, handleChange }) {
    return (
        <div className='quiz-container'>
            <div className='quiz-container-question'>{quizData.question}</div>

            <div className='quiz-container-answers'>
                {quizData.answers.map((item, idx) => (
                    <p
                        key={idx}
                        onClick={() =>
                            handleChange(
                                currentQuestionIdx,
                                idx,
                                quizData.correct
                            )
                        }
                    >
                        {`${idx + 1}) ${item}`}
                    </p>
                ))}
            </div>
        </div>
    );
}

export default QuizContainer;
