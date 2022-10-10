import { Link } from "react-router-dom";

import styles from "./ProductItem.module.css";

const ProductItem = (props) => {
  const { id, image, price, title } = props.item;

  return (
    <div key={id} className={styles.product}>
      <div className={styles.image}>
        <img src={image} alt="" />
      </div>
      <p className={styles.title}>{`${title.substring(0, 16)}...`}</p>
      <p className={styles.price}>{`$${price}`}</p>
      <Link to={`/singleproduct/${id}`}>
        <button id={id} className={styles.productItemBtn}>
          Buy Now
        </button>
      </Link>
    </div>
  );
};

export default ProductItem;
