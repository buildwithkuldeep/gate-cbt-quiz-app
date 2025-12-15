export const initialState = {
  currentIndex: 0,
  answers: {}
};

export function quizReducer(state, action) {
  switch (action.type) {
    case "SAVE_ANSWER":
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.payload.questionId]: action.payload.answer
        }
      };

    case "NEXT":
      return {
        ...state,
        currentIndex: state.currentIndex + 1
      };

    case "PREV":
      return {
        ...state,
        currentIndex: state.currentIndex - 1
          };
     case "JUMP_TO":
      return {
        ...state,
        currentIndex: action.payload
        };
  

    default:
      return state;
  }
}
