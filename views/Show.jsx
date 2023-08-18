import React from 'react'

function Show(props) {
    const pokemon=props.pokemon
    return (
        <div>
            <h1>Gotta Catch 'Em All</h1>
            <h2>{pokemon.name}</h2>
            <img src={`${pokemon.img}.jpg`} alt=""/>
            <a href={'/pokemon'}>Back</a>
            {/* <link rel="stylesheet" type="text/css" href="css/style.css"></link> */}
        </div>
    )
}

export default Show