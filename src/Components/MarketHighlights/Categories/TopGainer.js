import React from 'react'

const TopGainer = ({ topGainer }) => {
    return (
        <>
            <div className="top-gainer grid-item">
                <h3 className="headline" >Top gainer (24h)</h3>
                <div className="info-container">
                    <img src={topGainer ? topGainer.image : ""} alt="Crypto" className="coin-icon"></img>
                    <div className="gainer-info coin-info">
                        <p className="coin-name">{topGainer ? topGainer.name : "Coin"}</p>
                        <p className="percentage-change" style={{ color: "#11D811" }}>{topGainer ?
                            `+${topGainer.price_change_percentage_24h.toFixed(2)}%` :
                            "0.00%"
                        }</p>
                    </div>
                    <h3 className="gainer-price">{topGainer ? `$${topGainer.current_price.toFixed(2)}` : "$0.00"}</h3>
                </div>
            </div>
        </>
    )
}

export default TopGainer
