import React from 'react'

const BiggestLoser = ({ biggestLoser }) => {
    return (
        <>
            <div className="biggest-loser grid-item second-row">
                <h3 className="headline">Biggest Loser (24h)</h3>
                {/* COIN INFO */}
                <div className="info-container">
                    <img src={biggestLoser ? biggestLoser.image : ""} alt="Crypto" className="coin-icon"></img>
                    <div className="gainer-info coin-info">
                        <p className="coin-name">{biggestLoser ? biggestLoser.name : "Coin"}</p>
                        <p className="percentage-change" style={{ color: "#F00606" }}>{biggestLoser ?
                            `${biggestLoser.price_change_percentage_24h.toFixed(2)}%` :
                            "0.00%"
                        }</p>
                    </div>
                    <h3 className="gainer-price">{biggestLoser ? `$${biggestLoser.current_price.toFixed(2)}` : "$0.00"}</h3>
                </div>
            </div>
        </>
    )
}

export default BiggestLoser
