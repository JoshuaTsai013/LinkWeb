import styles from './LinkBtn.module.css'

function LinkBtn() {

    return (
        <div className={styles.mainBlock}>
            <a href="#" target="" className={styles.Icon}>
                <img src="react.svg" alt="React logo" />
            </a>
            <a href="#" target="" className={styles.Icon}>
                <img src="react.svg" alt="React logo" />
            </a>
            <a href="#" target="" className={styles.Icon}>
                <img src="react.svg" alt="React logo" />
            </a>
        </div>
    );
}
export default LinkBtn;
