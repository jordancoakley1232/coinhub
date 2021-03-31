import { useState, useEffect } from 'react';
import axios from 'axios';
import "./MarketHighlights.scss";

import TopGainer from "./Categories/TopGainer";
import NewListing from "./Categories/NewListing";
import GetHelp from './Categories/GetHelp';
import HighestVolume from './Categories/HighestVolume';
import BiggestLoser from './Categories/BiggestLoser';
import Random from './Categories/Random';

const MarketHighlights = () => {
    const [coins, setCoins] = useState([]);
    const [topGainer, setTopGainer] = useState();
    const [newListing, setNewListing] = useState();
    const [highestVolume, setHighestVolume] = useState();
    const [biggestLoser, setBiggestLoser] = useState();


    const marketAverage = () => {
        let average = coins.reduce((acc, curr) => {
            return acc + curr.price_change_percentage_24h
        }, 0) / (coins.length - 1);
        return average.toFixed(2);
    }

    useEffect(() => {
        getCoins().catch(error => {
            alert('There was an error fetching data');
        });;
    }, [])

    useEffect(() => {
        getTopGainer();
        getNewListing();
        getHighestVolume();
        getBiggestLoser();

    }, [coins]);

    // useEffect to set date
    // useEffect(() => {
    //     date = new Date(newListing.atl_date);
    //     console.log(date);
    // }, [newListing])

    // Fetch Coins from API
    const getCoins = async () => {
        const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
        setCoins(res.data);
    }



    const getTopGainer = () => {
        let sortedCoins = coins.sort((a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h);
        setTopGainer(sortedCoins[sortedCoins.length - 1])
    }

    const getNewListing = () => {
        let sortedCoins = coins.sort((a, b) => new Date(a.atl_date) - new Date(b.atl_date));
        setNewListing(sortedCoins[sortedCoins.length - 1]);
    }

    const getAddedDate = () => {
        let date = new Date(newListing.atl_date);
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        return `Added ${months[date.getMonth()]} ${date.getDate()}`;
    };

    const getHighestVolume = () => {
        let sortedCoins = coins.sort((a, b) => a.total_volume - b.total_volume);
        setHighestVolume(sortedCoins[sortedCoins.length - 1])
    };

    const getBiggestLoser = () => {
        let sortedCoins = coins.sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h);
        setBiggestLoser(sortedCoins[sortedCoins.length - 1])
    }



    return (
        <div className="market-news-container">
            {marketAverage() > 0 ?
                <h1 className="market-text">The Market is up <span style={{ color: "#11d811" }}>{marketAverage()}%</span></h1> :
                <h1 className="market-text">The Market is down <span style={{ color: "#f00606" }}>{marketAverage()}%</span></h1>
            }
            {/* <div className="market-highlights-container"> */}
            <div onClick={marketAverage} className="headline-grid">
                <TopGainer topGainer={topGainer} />
                <NewListing newListing={newListing} getAddedDate={getAddedDate} />
                <GetHelp />
                <HighestVolume highestVolume={highestVolume} />
                <BiggestLoser biggestLoser={biggestLoser} />
                <Random coins={coins} />
                {/*                 
                    <div className="earn-crypto grid-item second-row">Earn free crypto</div> */}
            </div>
            {/* </div> */}

        </div>
    )
}

export default MarketHighlights
