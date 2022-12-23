import React from 'react'
import './App.css';

const App = () => {
  return (
    <div className='App'>
        <form>
            <input type='text' placeholder='Full Name...'/>
            <input type='text' placeholder='Email...'/>
            <input type='text' placeholder='Address...'/>
            <input type='submit'/>
            <button>Edit</button>
            
        </form>
    </div>
  )
}

export default App