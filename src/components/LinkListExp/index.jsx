import { useState } from 'react'
import styles from './LinkListExp.module.css'

function LinkListExp({ Data }) {
    const [isOpen, setOpen] = useState(false)
    return (
        <button type="button" className={styles.button} onClick={() => setOpen((isOpen) => !isOpen)}>
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
