import React from 'react'

const Catagories = ({Animes,filteranime}) => {
    let categories = Animes.map((Anime)=> Anime.catogari);
    
    categories = ['All',...new Set(categories)]
  return (
    <div className='category'>
        {categories.map((category,index)=>{
            return(
                <button className='btn' key={index} onClick={()=>filteranime(category)}>
                    {category}
                </button>
            )
        })}
    </div>
  )
}

export default Catagories