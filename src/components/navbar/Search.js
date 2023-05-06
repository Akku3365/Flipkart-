import { InputBase, Box, styled, List, ListItem } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Search() {
  const [inputSearch, setInputSearch] = useState("");
  const products = useSelector((state) => state.product.products);

  function onChangeHandler(e) {
    setInputSearch(e.target.value.toLowerCase());
  }
  return (
    <SearchContainer style={{ width: "1200px"}}>
      <InputSearchBase
        placeholder="Search for products, brand and more"
        onChange={onChangeHandler}
        value={inputSearch}
        
      />
      <SearchIconWrapper style={{ padding: "7px 2px 2px 2px"}}>
        <SearchIcon />
      </SearchIconWrapper>
      {inputSearch !== "" && (
        <ListWrapper style={{ height: "60vh" }}>
          {products
            .filter((product) => {
              return (
                product.title.toLowerCase().includes(inputSearch) ||
                product.description.toLowerCase().includes(inputSearch)
              );
            })
            .map((product) => {
              return (
                <ListItem key={product.id} onClick={() => setInputSearch("")}>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                    }}
                    to={`product/${product.id - 1}`}
                  >
                    {product.title}
                  </Link>
                </ListItem>
              );
            })}
        </ListWrapper>
      )}
    </SearchContainer>
  );
}

export default Search;

const SearchContainer = styled(Box)`
  background: #fff;
  width: 35%;
  border-radius: 2px;
  margin-left: 20px;
  display: flex;
  gap: 1rem;
`;

const InputSearchBase = styled(InputBase)`
  padding-left: 10px;
  width: 100%;
  font-size: unset;
`;

const SearchIconWrapper = styled(Box)`
  color: blue;
  padding: 5px;
  display: flex;
`;

const ListWrapper = styled(List)`
  position: absolute;
  background-color: #fff;
  color: #000;
  margin-top: 36px;
  overflow: scroll;
`;
