import { useState} from 'react';
import ListOfNames from './ListOfNames';

export default function ExampleOne(){
    const [userName, setuserName] = useState([])
    const [listOfNames, setlistOfNames] = useState([])
    
    return(
        <div>
            <ListOfNames list = {listOfNames} />
            <label>Enter your name:</label>
            <input onChange={(e) =>
                setuserName(e.target.value)
                }
                type="text"
                placeholder="Name"
            />
            <button onClick={()=> setlistOfNames(...listOfNames, userName)}>
                Submit
            </button>
            
            
        </div>
    )
}