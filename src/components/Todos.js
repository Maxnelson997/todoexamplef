import React, { Component } from 'react'

const Todo = () => {
    return (
        <div className='todos__todo'>
            <h5>title</h5>
            <button>complete</button>
        </div>
    )
}

class Todos extends Component {
   render() {
       const { className } = this.props
       return (
            <div className={`${className} todos`}>
               <Todo/>
               <Todo/>
               <Todo/>
               <Todo/>
               <Todo/>
               <Todo/>
            </div>
       )
   }
}

export default Todos;