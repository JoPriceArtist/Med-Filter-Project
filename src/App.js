import './App.css';
import Header from './components/header/header';
import Medicines from './components/medicines/medicines';
import originalMedicines from './medicines.json';
import Search from './components/search/search';
import { useState } from 'react';
function App() {
    //on page load, get our hardcoded medicines from a file
    const [medicines, setMedicines] = useState(originalMedicines)
    return (
        <>
            <Header>
                <Search/>
            </Header>
            <div className='mild-defaults'>
                <Medicines medicines={medicines} />
            </div>
        </>
    );
}

export default App;
