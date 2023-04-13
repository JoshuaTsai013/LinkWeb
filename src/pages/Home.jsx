import { useState } from 'react'
import LinkBlock from '../components/LinkBlock';
function Home() {
    const [count, setCount] = useState(0)
    return (
        <div className="containerCustom">
            <a href="#" target="">
                <img src="react.svg" className="logo react" alt="React logo" />
            </a>

            <div style={{width:"100%",height:"100px",backgroundColor:"#fff"}}></div>

            <h3>{count}</h3>

            <div>
                <button onClick={() => setCount((count) => count - 1)}>
                    PREV
                </button>
            </div>

            <LinkBlock id={count} />

            <div>
                <button onClick={() => setCount((count) => count + 1)}>
                    NEXT
                </button>
            </div>
        </div>
    );
}

export default Home