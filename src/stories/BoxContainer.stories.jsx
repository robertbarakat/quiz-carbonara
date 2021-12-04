import React from 'react';
import BoxContainer from '../components/BoxContainer/BoxContainer';

export default {
    title: 'Components/Box Container',
    component: BoxContainer,
};

const Template = (args) => <BoxContainer {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: <p>Contenuto del box va qui</p>,
};
