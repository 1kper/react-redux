import React, { useState } from "react";

import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleChange = (e) => setText(e.target.value);
  const handleKeyPress = (e) => {
    if (e.charCode === 13) {
      dispatch({ type: "todos/todoAdded", payload: text });
      dispatch({ type: 'todos/todoToggled', payload: 0})
      setText("");

      // selectTodos.dispatch({ type: 'todos/todoAdded', payload: text });
    }
  };
  return (
    <header className="header">
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={text}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
    </header>
  );
};

export default Header;
