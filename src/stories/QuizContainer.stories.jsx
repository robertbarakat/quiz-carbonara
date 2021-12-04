import React from 'react';
import QuizContainer from '../components/QuizContainer/QuizContainer';

export default {
    title: 'Components/Quiz Container',
    component: QuizContainer,
};

const mockedData = {
    question: 'Che formaggio useresti?',
    answers: ['Pecorino', 'Grana', 'Gruviera'],
    correct: 0,
};

const Template = (args) => <QuizContainer {...args} />;

export const Default = Template.bind({});
Default.args = {
    quizData: mockedData,
};
