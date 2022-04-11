import React from 'react'
import { useSelector } from 'react-redux'
import TodoListItem from './TodoListItem'




const TodoList = () => {
  var selectTodos = useSelector((state) => state)
// console.log(selectTodos);
// useSelector(selectTodos)
    // console.log(this.state);
  
// console.log(selectTodos.todos);
selectTodos.todos.forEach((todo)=>console.log(todo[1])); 
// const todos =[];
  const renderedListItems = selectTodos.todos.map((todo) => { if((todo[0])==="filters"){return null}
  else{
    return <TodoListItem key={   todo.id} todo={todo} />
   } })

  return <ul className="todo-list">{renderedListItems}</ul>
}

export default TodoList
