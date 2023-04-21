import { useState } from 'react'
import styles from './LinkListExp.module.css'

function LinkListExp({ Data }) {
    const [count, setCount] = useState(0)
    return (
        <button type="button" className={styles.button} onClick={() => setCount((count) => count - 1)}>
            <div className={styles.mainBlock}>
                <img src={Data.src} alt="linkpic" className={styles.photo} />
                <p className={styles.text}>
                    {Data.Text}
                </p>
            </div>
        </button>
    );
}
export default LinkListExp;
