import React, { useState, useEffect} from 'react';
import './App.css';
import Recipe from './Recipe';

function App(){

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')

  

  useEffect(() =>{
    const APP_ID = process.env.REACT_APP_APP_ID;
    const APP_KEY= process.env.REACT_APP_APP_KEY;
    async function getRecipes(){
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }
    getRecipes();
  }, [query]);// this [] contains the value that will update useeffect. useEffect will run every time this value is changed



  function updateSearch(e){
    setSearch(e.target.value);// ---this is require to cmake changes ot input state
  }

  function getSearch(e){
    e.preventDefault(); // This stops page refresh
    setQuery(search)
    setSearch('')
  }

  return(
    <div className="App">
      <h1 className="header">Recipe Finder</h1>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes-cards">
        {recipes.map( recipe =>(
          <Recipe 
            key={recipe.recipe.url}
            name={recipe.recipe.label} 
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients ={recipe.recipe.ingredients}/>
        ))}
      </div>
      
    </div>
  )
}


export default App;
