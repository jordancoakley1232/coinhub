import { useState } from "react";
import ReactPaginate from "react-paginate";
// import "./Losers.scss";
import "../AllCoins/AllCoins.scss"
const Losers = ({ coins, search, setSelectedCoin, setModalIsOpen }) => {
    const [pageNumber, setPageNumber] = useState(0)

    const filteredCoins = coins.filter((coin) => {
        return coin.name.toLowerCase().includes(search.toLowerCase());
    })

    // Paginate Code
    const usersPerPage = 30;
    const pagesVisited = pageNumber * usersPerPage;
    let pageCount = Math.ceil(filteredCoins.length / usersPerPage);
    const displayCoins = filteredCoins.slice(pagesVisited, pagesVisited + usersPerPage)
    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }

    const setModalCoin = (currency) => {
        setSelectedCoin(currency);
        setModalIsOpen(true);
    }


    return (
        <>
            {displayCoins ?
                displayCoins.map((coin) => {
                    return (
                        <div className="coin-container" key={coin.id}>

                            <div className="coin-row" onClick={() => setModalCoin(coin)}>
                                <div className="coin">
                                    <img src={coin.image} alt="Crypto"></img>
                                    <h1 >{coin.name}</h1>
                                    <p className="coin-symbol">{coin.symbol}</p>
                                </div>
                                <div className="coin-data">
                                    <p className="coin-price">${coin.current_price}</p>
                                    <p className="coin-volume">${coin.total_volume.toLocaleString()}</p>
                                    {coin.price_change_percentage_24h < 0 ? (
                                        <p className="coin-percent red">{coin.price_change_percentage_24h.toFixed(2)}%</p>
                                    ) : (<p className="coin-percent green">{coin.price_change_percentage_24h.toFixed(2)}%</p>)
                                    }
                                    <p className="coin-marketcap">Mkt Cap: ${coin.market_cap.toLocaleString()}</p>
                                </div>
                            </div>

                        </div>
                    )
                }) :
                "Getting Coin Data"
            }
            <div style={{ display: "flex", justifyContent: "center", marginTop: "10px", marginBottom: "10px" }}>
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousClassName={"previousBttn"}
                    nextClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                />
            </div>
        </>
    )
}

export default Losers
