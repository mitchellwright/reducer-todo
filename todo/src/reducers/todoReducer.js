export const TOGGLE_TODO = "TOGGLE_TODO";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";
export const ADD_TODO = "ADD_TODO";

export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987590,
  },
  {
    item: "Clean my room",
    completed: false,
    id: 3892987589,
  },
  {
    item: "Purchase new shirts",
    completed: false,
    id: 3892987591,
  },
];

export const todoReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === parseInt(action.payload.id)
          ? { ...todo, completed: action.payload.completed }
          : { ...todo }
      );
    case CLEAR_COMPLETED:
      return state.filter((todo) => todo.completed === false);
    case ADD_TODO:
      return [
        ...state,
        { item: action.payload, id: Date.now(), completed: false },
      ];
    default:
      return state;
  }
};
