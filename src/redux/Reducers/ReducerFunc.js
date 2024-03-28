const initState = {
  todos: [],
  flowers: JSON.parse(localStorage.getItem("flower")) || [],
};

export const ReducerFunc = (state = initState, action) => {
  //   const navigate = useNavigate()
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "ADD_LIST":
      return {
        ...state,
        flowers: action.payload,
      };
    default:
      break;
  }
};
