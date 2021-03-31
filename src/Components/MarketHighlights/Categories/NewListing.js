import React from 'react'

const NewListing = ({ newListing, getAddedDate }) => {
    return (
        <>
            <div className="new-listing grid-item">
                <h3 className="headline">New Listing</h3>
                {/* COIN INFO */}
                <div className="info-container">
                    <img src={newListing ? newListing.image : ""} alt="Crypto" className="coin-icon"></img>
                    <div className="gainer-info coin-info">
                        <p className="coin-name">{newListing ? newListing.name : "Coin"}</p>
                        <p className="date-added">
                            {newListing ? getAddedDate() : "DATE"}
                        </p>
                    </div>
                    <h3 className="gainer-price">{newListing ? `$${newListing.current_price.toFixed(2)}` : "$0.00"}</h3>
                </div>
            </div>
        </>
    )
}

export default NewListing
