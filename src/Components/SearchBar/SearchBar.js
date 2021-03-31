import { Link } from "react-router-dom";
import "./SearchBar.scss"


const SearchBar = ({ handleChange, coins, search }) => {



    return (

        <div className="coin-filter-container">
            <div className="coin-filter-items">
                <ul className="filter-items">
                    <li className="item" value="all"><Link to="./coinhub">All Assets</Link> </li>
                    <li className="item" value="gainers"><Link to="./gainers">Gainers</Link></li>
                    <li className="item" value="losers"><Link to="./Losers">Losers</Link></li>
                </ul>
                <form>
                    <input onChange={handleChange} type="text" className="coin-input" placeholder="Search a coin..."></input>
                </form>
            </div>
        </div>

    )
}

export default SearchBar
