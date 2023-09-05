import Table from 'react-bootstrap/Table';
import { useState, useEffect } from "react";
import Buscador from '../Buscador/Buscador';

function MiApi() {
    
    const [info, setInfo] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    
    useEffect(() => {
        consultaApi();
    }, []);
    
    const consultaApi = async () => {
        const url = "https://fakestoreapi.com/products/";
        const response = await fetch(url);
        const data = await response.json();
        setInfo(data);
        console.log(data);
    };

    const handleSearch = (searchTerm) => {
      const filteredProducts = info.filter((producto) =>
        producto.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        producto.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        producto.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
      setSearchResults(filteredProducts);
    };

    const productos = info.map((producto) => (
        <tr key={producto.id}>
          <td>{producto.id}</td>
          <td>{producto.title}</td>
          <td>{producto.category}</td>
          <td>{producto.description}</td>
          <td>{producto.price}</td>
          <td><img className='imagen-producto' src={producto.image} alt="MDN" /></td>
        </tr>
      ));

  return (
    <>
    <Buscador onSearch={handleSearch}/>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Category</th>
          <th>Description</th>
          <th>Price</th>
          <th>Photo</th>
        </tr>
      </thead>
      <tbody>
        {productos}
      </tbody>
    </Table>
    </>
    
  );
}

export default MiApi;