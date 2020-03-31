import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTask } from '../../reducers/TasksSlice' 

const mapDispatch = { addTask }

const AddTask = ({ addTask }) => {

  const [text, setText] = useState('')

  const handleChange = (e) => setText(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    addTask( text )
    setText('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Add input</label>
        <input type="text" value={text} onChange={handleChange} required />
      </div>
      <button type="submit">Add</button>
    </form>
  )
}

export default connect(
  null,
  mapDispatch
)(AddTask)