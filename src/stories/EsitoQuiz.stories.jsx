import React from 'react';
import EsitoQuiz from '../components/EsitoQuiz/EsitoQuiz';

export default {
    title: 'Components/Esito Quiz',
    component: EsitoQuiz,
    argTypes: {
        correctAnswers: {
            options: [0, 1, 2, 3],
            control: { type: 'radio' },
        },
    },
};

const Template = (args) => <EsitoQuiz {...args} />;

export const NoGoodAnswers = Template.bind({});
NoGoodAnswers.args = {
    correctAnswers: 0,
    totalAnswers: 3,
};

export const OneGoodAnswers = Template.bind({});
OneGoodAnswers.args = {
    correctAnswers: 1,
    totalAnswers: 3,
};

export const TwoGoodAnswers = Template.bind({});
TwoGoodAnswers.args = {
    correctAnswers: 2,
    totalAnswers: 3,
};

export const ThreeGoodAnswers = Template.bind({});
ThreeGoodAnswers.args = {
    correctAnswers: 3,
    totalAnswers: 3,
};
