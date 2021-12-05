import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Default } from './QuizContainer.stories';

const mockedData = {
    question: 'Che formaggio useresti?',
    answers: ['Pecorino', 'Grana', 'Gruviera'],
    correct: 0,
};

test('Quiz Container is rendered', () => {
    const { container } = render(<Default quizData={mockedData} />);
    expect(container.firstChild).toHaveClass('quiz-container');
    expect(container).not.toBeNull();
    expect(container).toBeInTheDocument();
    expect(container.firstChild).toHaveTextContent('Che formaggio useresti?');
    expect(container.firstChild).toHaveTextContent('Pecorino');
    expect(container.firstChild).toHaveTextContent('Grana');
    expect(container.firstChild).toHaveTextContent('Gruviera');
});

test('onclick handler is called on Quiz Container', async () => {
    const onClickSpy = jest.fn();
    render(<Default quizData={mockedData} handleChange={onClickSpy} />);
    const answerElement = screen.getByText('1) Pecorino'); // Individuo la risposta contenente la risposta 1) Pecorino
    answerElement.click();
    expect(onClickSpy).toHaveBeenCalled();
});
