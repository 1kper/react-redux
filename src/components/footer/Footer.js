import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { availableColors, capitalize } from "../filters/colors";
import { StatusFilters } from "../filters/filtersSlice";

const RemainingTodos = ({ count }) => {
  const suffix = count === 1 ? "" : "s";

  return (
    <div className="todo-count">
      <h5>Remaining Todos</h5>
      <strong>{count}</strong> item{suffix} left
    </div>
  );
};

const StatusFilter = ({ value: status, onChange }) => {
  console.log();
  const renderedFilters = Object.keys(StatusFilters).map((key) => {
    const value = StatusFilters[key];
    const handleClick = () => onChange(value);
    const className = value === status ? "selected" : "";

    return (
      <li key={value}>
        <button className={className} onClick={handleClick}>
          {key}
        </button>
      </li>
    );
  });

  return (
    <div className="filters statusFilters">
      <h5>Filter by Status</h5>
      <ul>{renderedFilters}</ul>
    </div>
  );
};

const ColorFilters = ({ value: colors, onChange }) => {
  const renderedColors = availableColors.map((color) => {
    const checked = colors.includes(color);
    const handleChange = () => {
      const changeType = checked ? "removed" : "added";

      onChange(color, changeType);
    };

    return (
      <label key={color}>
        <input
          type="checkbox"
          name={color}
          checked={checked}
          onChange={handleChange}
        />
        <span
          className="color-block"
          style={{
            backgroundColor: color
          }}
        ></span>
        {capitalize(color)}
      </label>
    );
  });

  return (
    <div className="filters colorFilters">
      <h5>Filter by Color</h5>
      <form className="colorSelection">{renderedColors}</form>
    </div>
  );
};

const Footer = () => {
  const dispatch = useDispatch();
  const [colors, setColors] = useState([]);
  const [status, setStatus] = useState(StatusFilters.All);
  // const [,setTodosRemaining]=useState(0)
  // const status = StatusFilters.All
  var selectTodos = useSelector((state) => state.todos);
  var todosRemaining = 0;
  selectTodos.forEach((todo) => {
    if (!todo.completed) {
      todosRemaining++;
    }
  });

  const onColorChange = (color, changeType) => {
    if (colors.includes(color)) {
      var filtered = colors.filter(function (value, index, arr) {
        return value !== color;
      });
      setColors([...filtered]);
    } else {
      setColors([...colors, color]);
    }

    //   var newColor=colors.filter((colo)=>{return colo!==color })
    //   console.log(newColor)
    //   if(colors.indexOf(color)){setColors([ ...newColor])
    //    newColor=[]}
    //  else{ setColors([ ...colors,color])}

    console.log("Color change: ", { color, changeType });

    dispatch({
      type: "filters/colorFilterChanged",
      payload: { color: color, changeType: changeType }
    });
  };

  const onStatusChange = (status) => {
    setStatus(status);
    dispatch({ type: "filters/statusFilterChanged", payload: status });
  };
  return (
    <footer className="footer">
      <div className="actions">
        <h5>Actions</h5>
        <button className="button">Mark All Completed</button>
        <button className="button">Clear Completed</button>
      </div>

      <RemainingTodos count={todosRemaining} />
      <StatusFilter value={status} onChange={onStatusChange} />
      <ColorFilters value={colors} onChange={onColorChange} />
    </footer>
  );
};

export default Footer;
