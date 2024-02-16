import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/HeaderStyle.css";
import {
  faSearch,
  faRetweet,
  faCartShopping,
  faBars,
  faX,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { useSelector } from "react-redux";

const HeaderNavigation = () => {
  const shoppingCart = useSelector((state) => state.cart.items);
  const [showMenu, setShowMenu] = useState(false);
  let amount = 0;
  shoppingCart.forEach((product) => {
    amount =
      amount +
      parseFloat(
        product?.price - (product?.price * product?.discountPercentage) / 100
      );
  });
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const handleSearch = () => {
    console.log("Search clicked!");
  };

  return (
    <div className="container-for-responsive">
      <header className="header">
        <div className="logo-container">
          <div className="logo">
            <img src="/assets/images/company_logo.png" alt="Company Logo" />
          </div>
        </div>
        <div className="searchbar-header-right">
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
            <div className="icons-container">
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
                <span className="badge">{shoppingCart?.length ?? 0}</span>
              </div>
            </div>
            <div className="account">
              <button className="profile-icon">
                <span className="label">Account</span>
                <FontAwesomeIcon
                  icon={faUser}
                  style={{ color: "#007bff", fontSize: "20px" }}
                />
              </button>
              <span className="currency-total">${amount.toFixed(2) ?? 0}</span>
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            setShowMenu(!showMenu);
          }}
          className="menu-icon-mobile"
        >
          {showMenu ? (
            <FontAwesomeIcon
              icon={faX}
              style={{ color: "black", fontSize: "20px" }}
            />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              style={{ color: "black", fontSize: "20px" }}
            />
          )}
        </div>
      </header>
      {showMenu && (
        <div className="mobile-menu-contents">
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
                  style={{ color: "white", fontSize: "14px" }}
                />
              </button>
            </div>
          </div>
          <div className="other-menu-container">
            <p className="list-item">Home</p>
            <p className="list-item">
              Products
              <span className="angle-design">
                <FontAwesomeIcon
                  icon={faAngleDown}
                  style={{ color: "white", fontSize: "12px" }}
                />
              </span>
            </p>
            <p className="list-item">
              Categories
              <span className="angle-design">
                <FontAwesomeIcon
                  icon={faAngleDown}
                  style={{ color: "white", fontSize: "12px" }}
                />
              </span>
            </p>
            <p className="list-item">
              Pages
              <span className="angle-design">
                <FontAwesomeIcon
                  icon={faAngleDown}
                  style={{ color: "white", fontSize: "12px" }}
                />
              </span>
            </p>
            <p className="list-item">Campaign</p>
            <p className="list-item">Offer</p>
            <p className="list-item">Blog</p>
            <p className="list-item">Review</p>
            <p className="list-item">Flash Sale</p>
            <p className="list-item">Contact Us</p>
          </div>
          <div className="mobile-icon-button-container">
            <button className="mobile-icon-button">
              <FontAwesomeIcon
                icon={faRetweet}
                style={{ color: "white", fontSize: "25px" }}
              />
            </button>
            <button className="mobile-icon-button">
              <FontAwesomeIcon
                icon={faHeart}
                style={{ color: "white", fontSize: "25px" }}
              />
            </button>
            <div className="mobile-icon-button mobile-badge-button">
              <button className="mobile-badge-button2">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  style={{ color: "white", fontSize: "25px" }}
                />
              </button>
              <span className="mobile-badge">{shoppingCart?.length ?? 0}</span>
            </div>

            <button className="mobile-icon-button">
              <FontAwesomeIcon
                icon={faUser}
                style={{ color: "white", fontSize: "25px" }}
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderNavigation;
