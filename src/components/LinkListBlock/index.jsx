import styles from './LinkListBlock.module.css'

function LinkListBlock({ Data }) {
    return (
        <div className={styles.mainBlock}>

        <img src={Data.src} alt="linkpic" className={styles.photo}/>
            <a href={Data.url} target="_blank" style={{ textDecoration: "none"}}>
                {Data.Text}
            </a>
        </div>
    );
}
export default LinkListBlock;
