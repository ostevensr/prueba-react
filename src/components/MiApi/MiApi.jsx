import Table from 'react-bootstrap/Table';
import { useState, useEffect } from "react";
import Buscador from '../Buscador/Buscador';

function MiApi() {
    
    const [info, setInfo] = useState([]);
    const [searchResults, setSearchResults] = useState([
      {
        "id": 2,
        "title": "Mens Casual Premium Slim Fit T-Shirts ",
        "price": 22.3,
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "rating": {
        "rate": 4.1,
        "count": 259
        }
        },
        {
          "id": 7,
          "title": "White Gold Plated Princess",
          "price": 9.99,
          "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
          "category": "jewelery",
          "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
          "rating": {
          "rate": 3,
          "count": 400
          }
          },
          {
            "id": 14,
            "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
            "price": 999.99,
            "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
            "category": "electronics",
            "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
            "rating": {
            "rate": 2.2,
            "count": 140
            }
            },
            {
              "id": 20,
              "title": "DANVOUY Womens T Shirt Casual Cotton Short",
              "price": 12.99,
              "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
              "category": "women's clothing",
              "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
              "rating": {
              "rate": 3.6,
              "count": 145
              }
              }
    ]);
    
    useEffect(() => {
        consultaApi();
    }, []);
    
    const consultaApi = async () => {
        const url = "https://fakestoreapi.com/products/";
        const response = await fetch(url);
        const data = await response.json();
        setInfo(data);
    };

    const handleSearch = (searchTerm) => {
      const filteredProducts = info.filter((producto) =>
        producto.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        producto.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        producto.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
      setSearchResults(filteredProducts);
      
      //console.log(searchResults);

    };

    //Ordenando resultados alfbéticamente según la categoría del Producto
    
    searchResults.sort((a, b) => {
      const categoryA = a.category.toUpperCase();
      const categoryB = b.category.toUpperCase();
      if (categoryA < categoryB) {
        return -1;
      }
      if (categoryA > categoryB) {
        return 1;
      }
      return 0;
    });

    const productos = searchResults.map((producto) => (
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
    <div className='cont-elementos'>
      <Buscador onSearch={handleSearch}/>
    <div className='cont-tabla'>
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
    </div>
    </div>
    </>
    
  );
}

export default MiApi;