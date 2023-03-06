export async function getAllGameItems() {
    let url = "https://botw-compendium.herokuapp.com/api/v2/all"
    let response = await fetch(url) 
    let data = await response.json()
    return data 
    
  
}

export async function getAllItemNames(name) {
    let url = `https://botw-compendium.herokuapp.com/api/v2/entry/${name}/image`
    let response = await fetch(url) 
    let data = await response.json()
    return data 

}



