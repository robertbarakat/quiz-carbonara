import {
    ADD_CORRECT_ANSWER,
    RESET_CORRECT_ANSWERS,
} from '../actions/correctAnswers';

export const addCorrectAnswer = () => ({
    type: ADD_CORRECT_ANSWER,
});

export const resetCorrectAnswers = () => ({
    type: RESET_CORRECT_ANSWERS,
});
