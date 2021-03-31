import { useState, useEffect } from "react";
import axios from 'axios';
import ModalComponent from "../Components/ModalComponent/ModalComponent";


// Components (SearchBar and Coin2);
import SearchBar from "../Components/SearchBar/SearchBar";
import Losers from "../Components/Losers/Losers";


const LosersPage = () => {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);

    // Modal State
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedCoin, setSelectedCoin] = useState();



    useEffect(() => {
        getCoins().catch(error => {
            alert('There was an error fetching data');
        });
        setLoading(false)

    }, []);

    const getCoins = async () => {
        const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
        let descendingCoins = res.data.sort((a, b) => {
            return a.price_change_percentage_24h - b.price_change_percentage_24h
        })
        setCoins(descendingCoins);
    }

    const handleChange = (e) => {
        setSearch(e.target.value);
    }



    return (
        <>
            <SearchBar handleChange={handleChange} coins={coins} />
            {loading ?
                <h1>Loading Coins.....</h1> :
                <Losers coins={coins} search={search} setSelectedCoin={setSelectedCoin} setModalIsOpen={setModalIsOpen} />
            }
            <ModalComponent selectedCoin={selectedCoin} modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} setSelectedCoin={setSelectedCoin} />

        </>
    )
}

export default LosersPage