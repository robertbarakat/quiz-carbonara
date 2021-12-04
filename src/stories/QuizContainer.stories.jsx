import React from 'react';

import QuizContainer from '../components/QuizContainer/QuizContainer';

export default {
    title: 'Components/Quiz Container',
    component: QuizContainer,
};

const Template = (args) => <QuizContainer {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: <p>Contenuto del box va qui</p>,
};
