import React from 'react'

const HighestVolume = ({ highestVolume }) => {
    return (
        <>
            <div className="highest-volume grid-item second-row">
                <h3 className="headline">Highest volume (24h)</h3>
                <div className="info-container">
                    <img src={highestVolume ? highestVolume.image : ""} alt="Crypto" className="coin-icon"></img>
                    <div className="gainer-info coin-info">
                        <p className="coin-name">{highestVolume ? highestVolume.name : "Coin"}</p>
                        <p className="percentage-change">{highestVolume ?
                            `${highestVolume.price_change_percentage_24h.toFixed(2)}%` :
                            "0.00%"
                        }</p>
                    </div>
                    <h3 className="gainer-price">{highestVolume ? `$${highestVolume.current_price.toFixed(2)}` : "$0.00"}</h3>
                </div>
            </div>
        </>
    )
}

export default HighestVolume
