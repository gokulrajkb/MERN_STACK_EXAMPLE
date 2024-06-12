import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { ToastContainer } from 'react-toastify';
import HomeIcon from '@mui/icons-material/Home';
import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';
import { Route, Routes, Link } from 'react-router-dom'
import { TodoList } from './components/TodoList'
import { EditTodo } from './components/EditTodo'
import { CreateTodo } from './components/CreateTodo'

function App() {


  const [count, setCount] = useState(0)
  var numTimesClicked = useRef(0);

  const minusHandler = () => {
    setCount(count => count - 1)
  }

  const plusHandler = () => {
    setCount(count => count + 1)
  }

  useEffect(()=>{
    numTimesClicked.current = numTimesClicked.current + 1
  })


  return (
    <div>
      <ToastContainer />
      <nav className='navbar bg-light navbar-expand-lg navbar-light'>
        <ul className='navbar-nav mr-auto'>
          <li className='navbar-item'>
            <Link to='/' className='nav-link'><HomeIcon fontSize="large" /></Link>
          </li>
          <li className='navbar-item'>
            <Link to='/create' className='nav-link'><AddIcon fontSize="large" /></Link>
          </li>
        </ul>
      </nav>
      <Routes> 
        <Route exact path='/' element={<TodoList />}/>
        <Route exact path='/edit/:id' element={<EditTodo />}/>
        <Route exact path='/create' element={<CreateTodo />}/>
      </Routes>


      <div class="wrapper footer">
        <div class="container">
          <div>
            <Grid container spacing={2} justify="center">
              <Grid item xs={1}>
                <button onClick={minusHandler}>-</button>
              </Grid>
              <Grid item xs={1}>
                <h2>{count}</h2>
              </Grid>
              <Grid item xs={1}>
                <button onClick={plusHandler}>+</button>
              </Grid>
              <Grid item xs={8}>
                <h2>No of times clicked : {numTimesClicked.current}</h2>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
  

    </div>
  );
}

export default App;
