import React from 'react'

function NewPkm() {
  return (
    <div>
        <form action="/pokemon" method="POST">
            Name:<input type="text" name="name"/>
            <br/>
            Img:<input type="text" name="img"/>
            <br/>
            Example Img url: http://img.pokemondb.net/artwork/
            <br/>
            <input type="submit" name="" value="Create Entry"/>
        </form>
    </div>
  )
}

export default NewPkm