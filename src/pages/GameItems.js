import SearchBar from '../components/SearchBar';
import GameItemCard from '../components/GameItemCard';
import { getAllGameItems } from "../hyrule-api";
import React, { useEffect, useState } from 'react'

function GameItems() {
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


    return(
        <div className="items">
            <SearchBar /> 
            <GameItemCard /> 

            {/* <ul>
        {gameItem.map(item => {
          
            return(
              <li key={item.id}>
         <GameItemCard item = {item}/>
         </li>
            )
           
           
        }        
        )}
      </ul> */}
        </div>
    )

}

export default GameItems; 

// renders GameItemCardComponent and SearchBar component containing Form component