
const fetch = () => {
    import('node-fetch').then(({ default: fetch }) => fetch())
}
const options = {
    method: 'GET'
}
fetch('https://pokeapi.co/api/v2/pokemon/ditto', options).then(res => res.json()).then(console.log(res))
return (
    <div>here</div>
)

module.exports = 