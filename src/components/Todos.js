import React, { Component } from 'react'

class Todos extends Component {
   render() {
       const { className } = this.props
       return (
            <div className={`${className} todos`}>
               
            </div>
       )
   }
}

export default Todos;