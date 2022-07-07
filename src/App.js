import {useState} from "react";
import BreadsView from "./components/BreadsView";

const axios = require('axios').default;

const App = () => {
    const [breads, setBreads] = useState([]);
    const getBreads = async () => {
        await axios.get('https://api.thecatapi.com/v1/breeds').then(res => console.log(res.data));
    }

    return (
        <div>
            <button onClick={getBreads}>Get Breads</button>
            {/*{breads.length > 0 ? <BreadsView data={breads[0].name}/> : <div>3</div>}*/}
        </div>
    );
}

export default App;
