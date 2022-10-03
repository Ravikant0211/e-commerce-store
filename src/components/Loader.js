import Loading_icon from '../assets/Loading_icon.gif';

import styles from './Loader.module.css';

const Loader = () => {
    return (
        <div className={styles.loader}>
            <img src={Loading_icon} alt="Loading icon" />
        </div>
    ) 
}

export default Loader;