import { useState } from 'react';
import './App.css';

import data from './data';
import Catagories from './comonents/Catagories';
import Series from './comonents/Series';

function App() {
  const [Animes , setanimes] = useState(data)


  const filteranime = (category)=>{
    if(category === 'All'){
      return setanimes(data)
    }else{
      let allAnime = data.filter((Anime)=> Anime.catogari === category)
      setanimes(allAnime)
    }
  }

  return (
    <main className='main_container'>
    <header className='heading'><h1 className='first'>Anime</h1><h1>Best</h1></header>
      <Catagories Animes={Animes} filteranime={filteranime}/>
      <Series Animes={Animes}/>
    </main>
  );
}

export default App;
