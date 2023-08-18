import React from 'react'

function EditPkm(props) {
  const pokemon = props.pokemon
  return (
    <div>
      <form action={`/pokemon/${pokemon._id}?_method=PUT`} method="POST">
        Name:<input type="text" name="name" defaultValue={pokemon.name}/>
        <br />
        Img:<input type="text" name="img" defaultValue={pokemon.img}/>
        <br />
        Example Img url: http://img.pokemondb.net/artwork/
        <br />
        <input type="submit" name="" value="Save Changes" />
      </form>
    </div>
  )
}

export default EditPkm