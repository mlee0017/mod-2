function GameItemCard() {

    return (
        <div className="item-container">
            <p> data is fetched </p>
              {/* <div className="item">
                 <h1>name: {item.name}</h1> 
                 <h1>image: {item.image} </h1>
                 <h1>category: {item.category} </h1> 
                 <h1>description: {item.description} </h1> 
                 <h1>common locations: {item.common_locations} </h1> 
                 <h1>drops: {item.drops} </h1>
              </div>  */}
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