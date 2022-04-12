const initialState = [
  { id: 0, text: "Learn React", completed: true },
  { id: 1, text: "Learn Redux", completed: false, color: "purple" },
  { id: 2, text: "Build something fun!", completed: false, color: "blue" }
];

function nextTodoId(todos) {
  // const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
  return todos.length;
}
export default function appReducer(state = initialState, action) {
  // if(!state.length){  state =Object.entries(myIterable)
  // }
  // else{ state  = [...state]}
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    case "todos/todoAdded": {
      // We need to return a new state object
      return (
        // that has all the existing state data
        [
          ...state,
          // but has a new array for the `todos` field

          // with all of the old todos

          // and the new todo object
          {
            // Use an auto-incrementing numeric ID for this example
            id: nextTodoId(state),
            text: action.payload,
            completed: false
          }
        ]
      );
    }

    case "todos/todoToggled": {
      let postState = [];
      postState = state.map((todo) => {
        // If this isn't the todo item we're looking for, leave it alone
        if (todo.id !== action.payload) {
          return todo;
        } else {
          return {
            ...todo,
            // Flip the completed flag
            completed: !todo.completed
          };
        }
        // We've found the todo that has to change. Return a copy:
      });

      return postState;
      // Again copy the entire state object

      // This time, we need to make a copy of the old todos array
    }

    case "todos/colorSelected": {
      const { color, todoId } = action.payload;
      return state.map((todo) => {
        if (todo.id !== todoId) {
          return todo;
        }

        return {
          ...todo,
          color
        };
      });
    }
    case "todos/todoDeleted": {
      return state.filter((todo) => todo.id !== action.payload);
    }
    case "todos/allCompleted": {
      return state.map((todo) => {
        return { ...todo, completed: true };
      });
    }
    case "todos/completedCleared": {
      return state.filter((todo) => !todo.completed);
    }

    // Do something here based on the different types of actions
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
}
