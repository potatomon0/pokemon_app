import React from 'react'

function Index(props) {
  const pokemon = props.pokemon
  return (
    <div className='indexMain'>
        <h1>See All The Pokemon</h1>
        <a href="/pokemon/newpkm">Create New Entry</a>
        <ul>
        {pokemon.map((index,i)=>{
          // let caps = index.name.slice(0,1)
          // let nameBody = index.name.slice(1,index.name.length)
          // let pkmName=caps.toUpperCase()+nameBody
          return(
            <li key={i}>
              <a href={`/pokemon/${index._id}`}>
                <h2>{`${index.name.slice(0,1).toUpperCase()}${index.name.slice(1,index.length)}`}</h2>
                {/* <h2>{index.name}</h2> */}
              </a>
              <form action={`/pokemon/${index._id}?_method=DELETE`} method='POST'><input type='submit' value='DELETE'/></form>
              <a href={`/pokemon/${index._id}/edit`}>Edit</a>
            </li>
          )
        })}
        </ul>
        
        <link rel="stylesheet" type="text/css"   href="css/style.css"></link>
    </div>
  )
}

export default Index