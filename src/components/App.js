import React from 'react'

import Header from './header/Header'
import TodoList from './todos/TodoList'
import Footer from './footer/Footer'

function App() {
  return (
    <div className="App">
      <nav>
        <section>
          <h1>React-Redux Fundamentals Example</h1>
        </section>
      </nav>
      <main>
        <section className="medium-container">
          <h2>Todos</h2>
          <div className="todoapp">
            <Header />
            <TodoList />
            <Footer />
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
