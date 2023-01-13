import React from 'react'

const Series = ({Animes}) => {
  return (
        <div className='New_main'>
            {Animes.map((Anime,index)=>{
            const {Name,rating,info,image} = Anime
            return(
                <div className='container' key={index}>
                    <div className='img_container'>
                    <img src={image} alt={Name} />
                    </div>
                    <div className='title'><p className='Name'>{Name}</p><p>{rating}</p></div>
                    <p className='info'>{info}</p>
                </div>
            )
        })}
        </div>
  )
}


export default Series