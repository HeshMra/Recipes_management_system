import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import CreateRecipe from './Pages/CreateRecipe';
import ShowRecipe from './Pages/ShowRecipe';
import UpdateRecipe from './Pages/UpdateRecipe';
import DeleteRecipe from './Pages/DeleteRecipe';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={ <Home/>} />
      <Route path='/recipes/create' element={ <CreateRecipe/>} />
      <Route path='/recipes/details' element={ <ShowRecipe/>} />
      <Route path='/recipes/edit/:id' element={ <UpdateRecipe/>} />
      <Route path='/recipes/delete/:id' element={ <DeleteRecipe/>} />
    </Routes>
  )
}

export default App