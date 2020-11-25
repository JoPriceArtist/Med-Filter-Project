import './App.css';
import Header from './components/header/header';
import Medicines from './components/medicines/medicines';
import originalMedicines from './medicines.json';
import Search from './components/search/search';
import { useState } from 'react';

function App() {
  //on page load, get our hardcoded medicines from a file
  const [medicines, setMedicines] = useState(originalMedicines);
  const [searchTerm, setSearchTerm] = useState('');
  //   const [searchResults, setSearchResults] = useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };
  return (
    <>
      <Header>
        <Search searchTerm={searchTerm} handleChange={handleChange} />
      </Header>
      <div className="mild-defaults">
        <Medicines medicines={medicines} searchTerm={searchTerm} />
      </div>
    </>
  );
}

export default App;
