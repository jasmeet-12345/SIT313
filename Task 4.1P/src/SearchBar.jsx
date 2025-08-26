import "./SearchBar.css";
import React, { useState } from "react";
import { Menu, Button, Search } from "semantic-ui-react";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  // Handle input change
  const handleSearchChange = (e, { value }) => {
    setSearchQuery(value);
  };

  return (
    <Menu pointing secondary className="navbar">
      {/* Logo */}
      <Menu.Item header className="navbar-logo">DEV@Deakin</Menu.Item>

      {/* Search Bar using Semantic UI Search */}
      <Menu.Item className="navbar-search">
        <Search
          placeholder="Search..."
          onSearchChange={handleSearchChange}
          value={searchQuery}
          showNoResults={false}   // hides "No results found"
        />
      </Menu.Item>

      {/* Right Side */}
      <Menu.Menu position="right">
        <Menu.Item>
          <Button primary className="post-btn">Post</Button>
        </Menu.Item>
        <Menu.Item>
          <Button className="login-btn">Login</Button>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}

export default SearchBar;
