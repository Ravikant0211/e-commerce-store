import React, { useState, useEffect } from 'react'

import Options from '../components/UI/Options';
import ProductItem from '../components/ProductItem';
import Loader from '../components/Loader';

import styles from './Product.module.css';
import SingleProduct from './SingleProduct';

const Products = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setData(json);
        setFilteredData(json);
        setLoading(loading => !loading);
      })
  }, []);

  const filterDataHandler = (id) => {
    setLoading(loading => !loading);
    let newFilteredData;
    if(id === 'all') {
      newFilteredData = data;
    } else {
      newFilteredData = data.filter(item => item.category === id);
    }
    setFilteredData(newFilteredData);
    setLoading(loading => !loading);
  };

  // const onBuyNowHandler = (id) => {
  //   const singleProductDetails = filteredData.filter(item => item.id === +id);
  //   <SingleProduct item={singleProductDetails} />
  //   console.log(singleProductDetails);
  // };

  return (
    <div className={styles.productPage}>
      <h1 className={styles.heading}>LATEST PRODUCTS</h1>
      <Options filterData={filterDataHandler} />
      {loading ? <Loader /> : 
      <div className={styles.products}>
        {filteredData.map(item => (
          <ProductItem item={item} />
        ))}
      </div>}
    </div>
  )
}

export default Products