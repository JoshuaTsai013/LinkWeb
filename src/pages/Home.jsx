import datas from '../json/mainBlockData.json'
import Banner from '../components/Banner';
import LinkListExp from '../components/LinkListExp';
import LinkBtn from '../components/LinkBtn';

function Home() {

    return (
        <div className="containerCustom">

            <img src="react.svg" className="logo react" alt="React logo" />

            <Banner line1="HI! I'm Joshua." line2="Here is my links" />

            {datas.map(Data => (<LinkListExp key={Data.id} Data={Data} />))}

            <LinkBtn/>
        </div>
    );
}

export default Home