import { useState, useEffect } from 'react';
import Modal from "react-modal";
import "./ModalComponent.scss";
import axios from "axios";
import { BounceLoader } from "react-spinners";


// IN MODAL, display 
// Current Price, 
// 24h change, 
// Market Cap
// Volume (24 Hours)
// About Coin Text
// Resources (Official Webiste)

Modal.setAppElement('#root')
// receive selected coin as props;
const ModalComponent = ({ selectedCoin, modalIsOpen, setModalIsOpen, setSelectedCoin }) => {
    const [fullCoinInfo, setFullCoinInfo] = useState();

    useEffect(() => {
        if (selectedCoin) {
            getFullCoinInfo(selectedCoin)
        }
    }, [selectedCoin]);


    const getFullCoinInfo = async (coin) => {
        const req = await axios.get(`https://api.coingecko.com/api/v3/coins/${coin.id}?tickers=false&market_data=false&developer_data=false&sparkline=false`);
        setFullCoinInfo(req.data);
    }

    const truncateString = (str, n) => {
        console.log(fullCoinInfo);
        return (str.length > n) ? str.substr(0, n - 1) + "...(click Buy Now to know more)" : str;
    }

    let url = selectedCoin ? `https://www.coinbase.com/price/${selectedCoin.name}` : "#";
    let coinURL = fullCoinInfo ? fullCoinInfo.links.homepage[0] : "#";
    return (
        <>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                {selectedCoin && fullCoinInfo ?
                    <div className="modal-container">
                        <div className="coin-info-container">
                            <h1 className="coin-name" ><img src={selectedCoin.image} alt={selectedCoin.name}></img> {selectedCoin.name}</h1>
                            <p className="coin-description">{fullCoinInfo ? truncateString(fullCoinInfo.description.en, 300) : "No Coin Info"}</p>
                            <ul className="coin-details-list">
                                <li>Name: {fullCoinInfo.name}</li>
                                <li>Price: ${selectedCoin.current_price}</li>
                                <li>24h Change: <span style={{ color: selectedCoin.price_change_percentage_24h > 0 ? "green" : "red" }}>{selectedCoin.price_change_percentage_24h.toFixed(2)}%</span></li>
                                <li>Total Supply: <span>{selectedCoin.total_supply}</span></li>
                                <li>Date Created: {fullCoinInfo.genesis_date}</li>
                            </ul>
                            <h3>Learn More about {fullCoinInfo.name}</h3>
                            <p><a target="_blank" rel="noreferrer" href={coinURL}>{coinURL}</a></p>
                        </div>

                        <div className="buy-coin-container">
                            <h1>Ready to buy {selectedCoin.name}?<img alt={selectedCoin.name} src={selectedCoin.image}></img></h1>
                            <p>Learn more about the largest coin market</p>
                            <a target="_blank" rel="noreferrer" href={url}>Buy Now</a>
                        </div>
                    </div>
                    : <BounceLoader />
                }



                {/* <h1>BitCoin</h1>
                <button onClick={() => setModalIsOpen(false)}>Close Modal</button> */}
            </Modal>
        </>
    )
}

export default ModalComponent
