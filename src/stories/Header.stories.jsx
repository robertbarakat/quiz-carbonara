import React from 'react';
import Header from '../components/Header/Header';

export default {
    title: 'Components/Header',
    component: Header,
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'Test: come si fa la carbonara?',
    subtitle: 'Rispondi alle domande',
};
