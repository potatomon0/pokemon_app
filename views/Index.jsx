import React from 'react'

function Index(props) {
    const myStyle={
        color:'#ffffff',
        backgroundColor:'#000000'
    }
  return (
    <div style={myStyle}>
        <h1>See All The Pokemon</h1>
        <ul>
        {props.pokemon.map((index,i)=>{
          let caps = index.name.slice(0,1)
          let nameBody = index.name.slice(1,index.name.length)
          let pkmName=caps.toUpperCase()+nameBody
          console.log(pkmName)
          return(
            <li key={i}>{pkmName}</li>
          )
        })}
        </ul>
    </div>
  )
}

export default Index