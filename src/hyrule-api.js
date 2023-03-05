export async function getAllObjects() {
    let url = "https://botw-compendium.herokuapp.com/api/v2/all"
    let response = await fetch(url) 
    let data = await response.json()
    return data 
}


// `https://botw-compendium.herokuapp.com/api/v2/entry/${input}`