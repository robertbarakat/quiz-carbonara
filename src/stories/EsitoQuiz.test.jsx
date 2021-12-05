import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {
    NoGoodAnswers,
    OneGoodAnswers,
    TwoGoodAnswers,
    ThreeGoodAnswers,
} from './EsitoQuiz.stories';

test('Esito Quiz with no good answer is rendered', () => {
    const { container } = render(
        <NoGoodAnswers correctAnswers={0} totalAnswers={3} />
    );
    expect(container.firstChild).toHaveClass('esito-quiz-container');
    expect(container).not.toBeNull();
    expect(container).toBeInTheDocument();
    expect(container.firstChild).toHaveTextContent(
        'Non sai proprio fare la carbonara'
    ); // Esito in caso di 0 risposte positive
});

test('Esito Quiz with 1 good answer is rendered', () => {
    const { container } = render(
        <OneGoodAnswers correctAnswers={1} totalAnswers={3} />
    );
    expect(container.firstChild).toHaveClass('esito-quiz-container');
    expect(container).not.toBeNull();
    expect(container).toBeInTheDocument();
    expect(container.firstChild).toHaveTextContent('Non ci siamo'); // Esito in caso di 1 risposta positiva
});

test('Esito Quiz with 2 good answer is rendered', () => {
    const { container } = render(
        <TwoGoodAnswers correctAnswers={2} totalAnswers={3} />
    );
    expect(container.firstChild).toHaveClass('esito-quiz-container');
    expect(container).not.toBeNull();
    expect(container).toBeInTheDocument();
    expect(container.firstChild).toHaveTextContent(
        'Devi studiare di più, ci sei quasi'
    ); // Esito in caso di 2 risposte positive
});

test('Esito Quiz with 3 good answer is rendered', () => {
    const { container } = render(
        <ThreeGoodAnswers correctAnswers={3} totalAnswers={3} />
    );
    expect(container.firstChild).toHaveClass('esito-quiz-container');
    expect(container).not.toBeNull();
    expect(container).toBeInTheDocument();
    expect(container.firstChild).toHaveTextContent(
        'Bravo, sai fare la carbonara'
    ); // Esito in caso di 3 risposte positive
});
