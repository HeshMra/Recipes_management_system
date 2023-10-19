import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import CreateRecipe from './Pages/CreateRecipe';
import ShowRecipe from './Pages/ShowRecipe';
import UpdateRecipe from './Pages/UpdateRecipe';
import DeleteRecipe from './Pages/DeleteRecipe';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import ShowAllRecipes from './Pages/ShowAllRecipes';




const App = () => {
  return (
    <Routes>
      <Route path='/' element={ <Home/>} />
      <Route path='/auth/signup' element={ <Signup/>} />
      <Route path='/auth/login' element={ <Login/>} />
      <Route path='/recipes/create' element={ <CreateRecipe/>} />
      <Route path='/recipes/details' element={ <ShowAllRecipes/>} />
      <Route path='/recipes/details/:id' element={ <ShowRecipe/>} />
      <Route path='/recipes/edit/:id' element={ <UpdateRecipe/>} />
      <Route path='/recipes/delete/:id' element={ <DeleteRecipe/>} />
    </Routes>
  )
}

export default App