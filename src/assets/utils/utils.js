export const esitoQuiz = (num) => {
    switch (num) {
        case 0:
            return 'Non sai proprio fare la carbonara';
        case 1:
            return 'Non ci siamo';
        case 2:
            return 'Devi studiare di più, ci sei quasi';
        case 3:
            return 'Bravo, sai fare la carbonara';
        default:
            return 'Non sai proprio fare la carbonara';
    }
};

export const isAnswerCorrect = (answerIndex, correctAnswerIndex) =>
    answerIndex === correctAnswerIndex;
