import Viewer from './search-viewer';
import ararat from '../../icons/ararat.jpg';

const Search = () => {
  return (
    <div>
      <div>
        <img src={ararat} alt="" style={{width: '-webkit-fill-available'}}/>
      </div>
       <Viewer />
    </div>
 
  )
}

export default Search;