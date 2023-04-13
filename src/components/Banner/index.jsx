import styles from './Banner.module.css'

function Banner({line1,line2}) {
    return (
        <div className={styles.bannerBlock}><p>{line1}<br />{line2}</p></div>
    );

}
export default Banner;
