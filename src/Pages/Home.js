import { useState, useEffect } from "react";
import axios from 'axios';
import { BounceLoader } from "react-spinners";
import ModalComponent from '../Components/ModalComponent/ModalComponent';

// Components (SearchBar and Coin2);
import SearchBar from "../Components/SearchBar/SearchBar";
import AllCoins from "../Components/AllCoins/AllCoins";

const Home = () => {
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
        setLoading(true)
    }, []);

    // Log Selected Coin for Modal

    const getCoins = async () => {
        const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
        setCoins(res.data);
    }

    const handleChange = (e) => {
        setSearch(e.target.value);
        // console.log(e.target.value);
    }

    return (
        <>
            <SearchBar handleChange={handleChange} coins={coins} search={search} />
            {loading ? <AllCoins coins={coins} search={search} setSelectedCoin={setSelectedCoin} setModalIsOpen={setModalIsOpen} /> : <BounceLoader />}
            <ModalComponent selectedCoin={selectedCoin} modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} setSelectedCoin={setSelectedCoin} />

        </>
    )
}

export default Home
