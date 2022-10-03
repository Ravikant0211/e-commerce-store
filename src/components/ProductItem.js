import { Link } from 'react-router-dom';
import Button from '../components/UI/Button';

import styles from './ProductItem.module.css';


const ProductItem = props => {
    const { id, image, price, title } = props.item;

    // const buyItemHandler = (id) => {
    //     props.onBuyNow(id);
    // };
    
    return (
        <div key={id} className={styles.product}>
            <div className={styles.image}>
                <img src={image} alt="" />
            </div>
            <p className={styles.title}>{`${title.substring(0, 16)}...`}</p>
            <p className={styles.price}>{`$${price}`}</p>
            <Link to={`/singleproduct/${id}`}>
                <Button id={id} className={styles.productItemBtn} >{'Buy Now'}</Button>
            </Link>
        </div>
    )
}

export default ProductItem;