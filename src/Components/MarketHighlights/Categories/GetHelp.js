import React from 'react';

const GetHelp = () => {
    return (
        <>
            <div className="get-help grid-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h3>Crypto questions, answered</h3>
                <a target='_blank' rel="noreferrer" href="https://www.coinbase.com/learn" style={{ cursor: 'pointer', width: '100px', height: '50px', background: '#1652f0', border: '1px solid #1652f0', borderRadius: '4px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Get Info</a>
                <p>Learn with Coinbase</p>
            </div>
        </>
    )
}

export default GetHelp
