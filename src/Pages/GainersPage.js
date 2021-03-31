import { useState, useEffect } from "react";
import axios from 'axios';
import { BounceLoader } from "react-spinners";
import ModalComponent from "../Components/ModalComponent/ModalComponent";


// Components (SearchBar and Coin2);
import SearchBar from "../Components/SearchBar/SearchBar";
import Gainers from "../Components/Gainers/Gainers"


const GainersPage = () => {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);

    // Modal State
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedCoin, setSelectedCoin] = useState();





    useEffect(() => {
        getCoins().catch(error => {
            alert('There was an error fetching data');
        });
        setLoading(true);

    }, []);

    const getCoins = async () => {
        const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
        let descendingCoins = res.data.sort((a, b) => {
            return b.price_change_percentage_24h - a.price_change_percentage_24h
        })
        setCoins(descendingCoins);
    }

    const handleChange = (e) => {
        setSearch(e.target.value);
    }



    return (
        <>
            <SearchBar handleChange={handleChange} coins={coins} search={search} />
            {loading ? <Gainers coins={coins} search={search} setSelectedCoin={setSelectedCoin} setModalIsOpen={setModalIsOpen} handleChange={{ handleChange }} /> : <BounceLoader />}
            <ModalComponent selectedCoin={selectedCoin} modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} setSelectedCoin={setSelectedCoin} />
        </>
    )
}

export default GainersPage
