import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState} from "react";

function Buscador({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    console.log("Input value:", e.target.value)
  };

  const handleSearch = () => {
    console.log("Search term:", searchTerm);
    onSearch(searchTerm);
  };

  return (
    <div className='cont-buscador'>
        <h1>Marketplace</h1>
        <Form.Control value={searchTerm} onChange={handleInputChange} size="lg" type="text" placeholder="Look for your product here by title, category or description" />
        <Button onClick={handleSearch} variant="secondary" size="lg">Search</Button>
    </div>
  );
}

export default Buscador;
