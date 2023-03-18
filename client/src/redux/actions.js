export function getAllCharacters() {
    return dispatch=> fetch('https://rickandmortyapi.com/api/character')
        .then(res=> res.json())
        .then((payload=>{
            dispatch({type:'GET ALL CHARACTERS', payload })
        }))
        .catch((err)=>{console.warn(err)})
}
