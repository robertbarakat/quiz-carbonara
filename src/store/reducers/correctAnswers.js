import {
    ADD_CORRECT_ANSWER,
    RESET_CORRECT_ANSWERS,
} from '../actions/correctAnswers';

const initialState = 0;

export const correctAnswersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CORRECT_ANSWER:
            return state + 1;
        case RESET_CORRECT_ANSWERS:
            return 0;
        default:
            return state;
    }
};
