import data from '../../json/BannerData.json'
import styles from './Banner.module.css'

function Banner() {
    return (
        <div className={styles.bannerBlock}>{data.map(data => (<p key={data.id}>{data.Text}</p>))}</div>
    );

}
export default Banner;
