import styles from './LinkBtn.module.css'

function LinkBtn() {

    return (
        <div className={styles.mainBlock}>
            <a href="#" target="" style={{ width: "40px", height: "40px" }}>
                <img src="react.svg" alt="React logo" style={{ width: "40px", height: "40px" }} />
            </a>
            <a href="#" target="" style={{ width: "40px", height: "40px" }}>
                <img src="react.svg" alt="React logo" style={{ width: "40px", height: "40px" }} />
            </a>
            <a href="#" target="" style={{ width: "40px", height: "40px" }}>
                <img src="react.svg" alt="React logo" style={{ width: "40px", height: "40px" }} />
            </a>
        </div>
    );
}
export default LinkBtn;
