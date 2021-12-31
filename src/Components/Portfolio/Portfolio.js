import {useEffect, useState} from 'react';
import './portfolio.scss';
import PortfolioList from '../PortfolioList/PortfolioList';
import { loadingPortfolio,
cadPortfolio,
twitterPortfolio,
hLPortfolio,
fallBallPortfolio,
slideshowPortfolio,
nRPPortfolio } from '../../data';

export default function Portfolio() {

    const [data, setData] = useState([]);

    const [selected, setSelected] = useState("Loading...");

    const list = [
        {
            id: "loading",
            title: 'Loading...'
        },
        {
            id: "twitter",
            title: 'Mock Twitter'
        },
        {
            id: "hlGame",
            title: 'Higher Lower Game'
        },
        {
            id: "fallball",
            title: 'Fall Ball'
        },
        {
            id: "slideshow",
            title: 'Slideshow'
        },
        {
            id: "nrp",
            title: 'NAO Research Project'
        }
    ]

    useEffect(() => {
        switch (selected) {
          case "loading":
            setData(loadingPortfolio);
            break;
          case "twitter":
            setData(twitterPortfolio);
            break;
          case "hlGame":
            setData(hLPortfolio);
            break;
          case "fallball":
            setData(fallBallPortfolio);
            break;
          case "slideshow":
            setData(slideshowPortfolio);
            break;
        case "nrp":
            setData(nRPPortfolio);
            break;
          default:
            setData(loadingPortfolio);
        }
      }, [selected]);

    return (
        <div className = 'portfolio' id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item)=> (
                    <PortfolioList title={item.title}
                    active = {selected === item.id}
                    setSelected={setSelected}
                    id={item.id}/>
                ))}
            </ul>
            <div className = 'container'>
                {data.map((d) => (
                    <div className="item">
                        <img
                            src={d.img}
                            alt=""
                        />
                        <h3>{d.title}</h3>
                    </div>
                ))}
            </div>
            <div className="descriptions">{data.map((d)=>(
                <p>{d.desc}</p>
            ))}</div>
                        <div className="links">{data.map((d)=>(
                <a href={d.lnk}>Link: {d.lnk}</a>
            ))}</div>
                        <div className="source">{data.map((d)=>(
                <a href={d.source}>Source: {d.source}</a>
            ))}</div>
            </div>
    );
}