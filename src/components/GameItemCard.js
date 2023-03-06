import { getAllGameItems } from "../hyrule-api";
import React, { useEffect, useState } from 'react'

function GameItemCard() {
    let [gameItem, setGameItem] = useState([])
    // let [image, setImage] = useState('')

    useEffect(() => {
        async function gameItemData() {
            const data = await getAllGameItems()
            console.log(data)
            
            setGameItem(data)
            

        } 
        gameItemData()
        
    }, [])

    console.log(gameItem)

    return (
        <div className="item-container">
            <p> data is fetched </p>
            {/* {gameItem.map((item, id) => (
              <div key={id}>
                 <h1>name: {item.id.name}</h1> 
                 <h1>image: {item.id.image} </h1>
                 <h1>category: {item.category} </h1> 
                 <h1>description: {item.id.description} </h1> 
                 <h1>common locations: {item.id.common_locations} </h1> 
                 <h1>drops: {item.id.drops} </h1>

              </div> 
              ) 
              )
            } */}
    
        </div>
            
    )

}

export default GameItemCard;

//map through each game item, displayed in GameItems component
//return <div> 
// <h1>name</h1> 
// <h1>image</h1>
// <h1>category</h1> 
// <h1>description</h1> 
// <h1>common locations</h1> 
// <h1>drops</h1>
// </div> 