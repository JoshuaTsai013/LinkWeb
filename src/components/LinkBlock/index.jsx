import styles from './LinkBlock.module.css'

function LinkBlock({ id }) {
    switch (id) {
        case 1:
            return (
                <div className={styles.mainBlock}>
                    <a href="https://www.youtube.com/watch?v=s0gWVK22Tv4" target="_blank" style={{ textDecoration: "none" }}>
                        Link 1
                    </a>
                </div>
            );
        case 2:
            return (
                <div className={styles.mainBlock}>
                    <a href="https://www.youtube.com/watch?v=s0gWVK22Tv4" target="_blank" style={{ textDecoration: "none" }}>
                        Link 2
                    </a>
                </div>
            );

        case 3:
            return (

                <div className={styles.mainBlock}>
                    <a href="https://www.youtube.com/watch?v=s0gWVK22Tv4" target="_blank" style={{ textDecoration: "none" }}>
                        Link 3
                    </a>
                </div>
            );

        case 4:
            return (
                <div className={styles.mainBlock}>
                    <a href="https://www.youtube.com/watch?v=s0gWVK22Tv4" target="_blank" style={{ textDecoration: "none" }}>
                        Link 4
                    </a>
                </div>
            );

        default:
            return (
                <div className={styles.mainBlock}></div>
            );
    }
}
export default LinkBlock;
