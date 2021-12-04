import React from 'react';
import Button from '../components/Button/Button';

export default {
    title: 'Components/Button',
    component: Button,
};

const Template = (args) => <Button {...args} />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
    primary: true,
    label: 'Button Label',
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
    secondary: true,
    label: 'Button Label',
};
