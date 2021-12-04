import { combineReducers } from 'redux';
import { correctAnswersReducer } from './reducers/correctAnswers';

export const rootReducers = combineReducers({
    correctAnswers: correctAnswersReducer,
});
