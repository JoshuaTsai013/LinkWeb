import datas from '../json/mainBlockData.json'
import Banner from '../components/Banner';
import LinkListExp from '../components/LinkListExp';
import LinkBtn from '../components/LinkBtn';
import Footer from '../components/Footer';


function Home() {

    return (
        <div className="containerCustom">

            <img src="react.svg" className="logo react" alt="React logo" />
            <h1>Joshua</h1>
            <Banner/>

            {datas.map(Data => (<LinkListExp key={Data.id} Data={Data} />))}

            <LinkBtn />
            
            <Footer text="AAA"/>


        </div>
    );
}

export default Home