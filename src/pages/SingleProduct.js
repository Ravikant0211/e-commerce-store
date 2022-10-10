import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";

import Loader from "../components/Loader";

import CartContext from "../store/cart-context";

import styles from "./SingleProduct.module.css";

const SingleProduct = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const cartCtx = useContext(CartContext);

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading((loading) => !loading);
      });
  }, [id]);

  const addToCartItemHandler = () => {
    const item = {
      image: data.image,
      title: data.title,
      price: data.price,
      id: data.id,
      amount: 1,
    };
    cartCtx.addItem(item);
  };

  const { category, description, image, price, title, rating } = data;

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className={styles["singlepage_container"]}>
          <div className={styles["product_image_container"]}>
            <img src={image} alt="" />
          </div>
          <div className={styles.details}>
            <h3 className={styles.category}>{category}</h3>
            <h1 className={styles.title}>{title}</h1>
            <strong className={styles.rating}>
              Rating {rating.rate}
              <i className="fas fa-star"></i>
            </strong>
            <h3 className={styles.price}>$ {price}</h3>
            <p className={styles.description}>{description}</p>
            <button
              className={styles.SinglepageBtn}
              onClick={addToCartItemHandler}
            >
              Add to Cart
            </button>
            <Link to="/cart">
              <button className={styles.SinglepageBtn}>Go to Cart</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleProduct;
