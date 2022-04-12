import React from "react";

import { ReactComponent as TimesSolid } from "./times-solid.svg";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { availableColors, capitalize } from "../filters/colors";

const TodoListItem = ({ todo, onColorChange }) => {
  var selectTodos = useSelector((state) => state);
  // console.log(selectTodos);
  const dispatch = useDispatch();

  const { text, completed, color } = todo;

  const handleCompletedChanged = (e) => {
    // onCompletedChange(e.target.checked)
    console.log(todo);

    dispatch({ type: "todos/todoToggled", payload: todo.id });
  };

  const handleColorChanged = (e) => {
    dispatch({
      type: "todos/colorSelected",
      payload: { todoId: todo.id, color: e.target.value }
    });
  };

  const onDelete = (e) => {
    dispatch({ type: "todos/todoDeleted", payload: todo.id });
  };

  const colorOptions = availableColors.map((c) => (
    <option key={c} value={c}>
      {capitalize(c)}
    </option>
  ));

  return (
    <li>
      <div className="view">
        <div className="segment label">
          <input
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={handleCompletedChanged}
          />
          <div className="todo-text">{text}</div>
        </div>
        <div className="segment buttons">
          <select
            className="colorPicker"
            value={color}
            style={{ color }}
            onChange={handleColorChanged}
          >
            <option value=""></option>
            {colorOptions}
          </select>
          <button className="destroy" onClick={onDelete}>
            <TimesSolid />
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoListItem;
