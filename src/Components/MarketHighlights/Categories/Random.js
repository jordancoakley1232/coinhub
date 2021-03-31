
const Random = ({ coins }) => {

    let randomCoin = coins[Math.floor(Math.random() * coins.length - 1)];

    return (
        <>
            {randomCoin ?
                <div className="top-gainer grid-item second-row">
                    <h3 className="headline" >Coin of the Day</h3>
                    <div className="info-container">
                        <img src={randomCoin ? randomCoin.image : ""} alt="Crypto" className="coin-icon"></img>
                        <div className="gainer-info coin-info">
                            <p className="coin-name">{randomCoin ? randomCoin.name : "Coin"}</p>
                            {randomCoin.price_change_percentage_24h < 0 ? (
                                <p className="coin-percent red">{randomCoin.price_change_percentage_24h.toFixed(2)}%</p>
                            ) : (<p className="coin-percent green">{randomCoin.price_change_percentage_24h.toFixed(2)}%</p>)
                            }
                        </div>
                        <h3 className="gainer-price">{randomCoin ? `$${randomCoin.current_price.toFixed(2)}` : "$0.00"}</h3>
                    </div>
                </div> :
                <p>Getting Coin</p>
            }

        </>
    )
}
// {
//     coin.price_change_percentage_24h < 0 ? (
//         <p className="coin-percent red">{coin.price_change_percentage_24h.toFixed(2)}%</p>
//     ) : (<p className="coin-percent green">{coin.price_change_percentage_24h.toFixed(2)}%</p>)
// }

export default Random