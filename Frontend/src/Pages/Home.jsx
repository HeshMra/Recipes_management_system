import React from 'react'
const Home = () => {
  return (

    <div class="min-h-screen bg-[url('images/image.png')] bg-center bg-cover px-28 py-5 relative">
      <nav class="flex items-center">
        <img src="images/logo.png" class="w-32 cursor-pointer " />
        <ul class="flex-1 text-center">
          <li class="list-none inline-block px-5"><a href="#" class="no-underline text-white px-2">Home</a></li>
          <li class="list-none inline-block px-5"><a href="#" class="no-underline text-white px-2">About</a></li>
          <li class="list-none inline-block px-5"><a href="#" class="no-underline text-white px-2">Features</a></li>
          <li class="list-none inline-block px-5"><a href="#" class="no-underline text-white px-2">Contact</a></li>
        </ul>
        <a href="##" class="bg-yellow-500 rounded-3xl py-2 px-6 font-medium inline-block mr-4 hover:bg-transparent
           hover:border-yellow-500 hover:text-white hover:border 
           border border-transparent duration-300">Login</a>
        <a href="##" class="bg-yellow-500 rounded-3xl py-2 px-6 font-medium inline-block mr-4 hover:bg-transparent
           hover:border-yellow-500 hover:text-white hover:border 
           border border-transparent duration-300">Signup</a>   

        
      </nav>
      <div class="text-white mt-28 max-w-3xl">
        <h1 class="text-6xl font-semibold leading-normal">Your Ultimate<br /> Recipes Management <br /> Partner</h1>
        <p>"Effective recipes management is essential for a well-organized kitchen, helping you keep track of ingredients, preparation steps, and cooking times to ensure delicious and consistent dishes every time."</p>

        <div class="mt-10">
          <a href="##" class="bg-yellow-500 rounded-3xl py-3 px-8 font-medium inline-block mr-4 hover:bg-transparent
           hover:border-yellow-500 hover:text-white hover:border border border-transparent duration-300">Show Recipes</a>
        </div>
        <img src="images/chef.png" class="w-full xl:w-1/3 xl:absolute bottom-0 right-20"></img>
      </div>

    </div>
  )
}

export default Home