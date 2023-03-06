import { getAllObjects } from "../hyrule-api";
import React, { useEffect, useState } from 'react'

function ObjectCard() {
    let [object, setObjects] = useState([])

    useEffect(() => { 
        async function objectData() {
           const data = await getAllObjects()
           setObjects(data.results)
           console.log(data.results)
        } objectData()
        
    }, []) 

   console.log(object)
  return (
    <div className="cardbox">
      {object.map((item, index) => <p className="card" key={index}>{item.name}</p>)}
    </div>
  )
}

export default ObjectCard;