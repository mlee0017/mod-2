import SearchBar from '../components/SearchBar';
import GameItemCard from '../components/GameItemCard';

function GameItems() {

    return(
        <div className="objects">
            <SearchBar /> 

            <GameItemCard /> 
           
        </div>
    )

}

export default GameItems; 

// renders GameItemCardComponent and SearchBar component containing Form component