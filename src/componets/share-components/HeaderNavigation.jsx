import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/HeaderStyle.css";
import {
  faSearch,
  faRetweet,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

const HeaderNavigation = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const handleSearch = () => {
    // Handle search functionality here
    console.log("Search clicked!");
  };
  return (
    <header className="header">
      <div className="logo-container">
        <div className="logo">
          <img src="/assets/images/company_logo.png" alt="Company Logo" />
        </div>
      </div>
      <div className="searchbar-container">
        <div className="searchbar">
          <div className="search-input">
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search For Products"
            />
          </div>
          <div className="category-dropdown">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option>All Categories</option>
            </select>
          </div>
          <div className="search-button">
            <button onClick={handleSearch}>
              <FontAwesomeIcon
                icon={faSearch}
                style={{ color: "white", fontSize: "20px" }}
              />
            </button>
          </div>
        </div>
      </div>
      <div className="header-right">
        <button className="icon-button">
          <FontAwesomeIcon
            icon={faRetweet}
            style={{ color: "black", fontSize: "20px" }}
          />
        </button>
        <button className="icon-button">
          <FontAwesomeIcon
            icon={faHeart}
            style={{ color: "black", fontSize: "20px" }}
          />
        </button>
        <div className="icon-button badge-button">
          <button className="badge-button2">
            <FontAwesomeIcon
              icon={faCartShopping}
              style={{ color: "black", fontSize: "20px" }}
            />
          </button>
          <span className="badge">5</span>
        </div>
        <div className="account">
          <span className="label">Account</span>
          <button className="profile-icon">
            <FontAwesomeIcon
              icon={faUser}
              style={{ color: "#007bff", fontSize: "20px" }}
            />
          </button>
          <span className="currency-total">$100.00</span>
        </div>
      </div>
    </header>
  );
};

export default HeaderNavigation;
