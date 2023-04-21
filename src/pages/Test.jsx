import { useState } from 'react'
import LinkBlock from '../components/LinkBlock';
import LinkListBlock from '../components/LinkListBlock';
import Banner from '../components/Banner';
import datas from '../json/mainBlockData.json'
import LinkListExp from '../components/LinkListExp';
function Test() {
    const [count, setCount] = useState(0)
    return (
        <div className="containerCustom">
            <a href="#" target="">
                <img src="react.svg" className="logo react" alt="React logo" />
            </a>

            <Banner line1="HI! I'm Joshua." line2="Here is my links" />

            <img src="react.svg" className="logo react" alt="React logo" style={{width:"40px"}}/>

            {datas.map(Data => (<LinkListExp key={Data.id} Data={Data} />))}


            {datas.map(Data => (<LinkListBlock key={Data.id} Data={Data} />))}


            <h3>{count}</h3>
            <button type="button" onClick={() => setCount((count) => count - 1)}>
                PREV
            </button>

            <LinkBlock id={count} />

            <button type="button" onClick={() => setCount((count) => count + 1)}>
                NEXT
            </button>

        </div>
    );
}

export default Test