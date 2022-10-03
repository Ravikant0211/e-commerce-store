import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Loader from '../components/Loader';
import Button from '../components/UI/Button';

import styles from './SingleProduct.module.css';

const SingleProduct = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});

    const { id } = useParams();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(json => {
                setData(json);
                setLoading(loading => !loading);
            })
    }, [id]);


    const {category, description, image, price, title, rating} = data;

    return (
        <>
            {loading ? <Loader /> :
                <div className={styles['singlepage_container']}>
                    <div className={styles['product_image_container']}>
                         <img src={image} alt="" />
                    </div>
                    <div className={styles.details}>
                        <h3 className={styles.category}>{category}</h3>
                        <h1 className={styles.title}>{title}</h1>
                        <strong className={styles.rating}>Rating {rating.rate}<i className='fas fa-star'></i></strong>
                        <h3 className={styles.price}>$ {price}</h3>
                        <p className={styles.description}>{description}</p>
                        <Button id={id} className={styles.SinglepageBtn}>{'Add to Cart'}</Button>
                        <Button id={id} className={styles.SinglepageBtn}>{'Go to Cart'}</Button>
                    </div>
                </div>
            }
        </>
    )
}

export default SingleProduct