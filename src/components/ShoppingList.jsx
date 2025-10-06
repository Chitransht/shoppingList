import Cards from "./Cards";
import useFetchList from "./useFetchList";
import "./shoppingList.css";
import { useState } from "react";

const ShoppingList = () => {
  const { products } = useFetchList("https://dummyjson.com/products?limit=500");
  const [currentPage, setCurrentpage] = useState(0);
  const [productsPerPage, setProductsPerPage] = useState(10);

  const totalProducts = products ? products.length : 0;
  // const productsPerPage = 10;
  const noOfproductToshow = Math.ceil(totalProducts / productsPerPage);
  const start = currentPage * productsPerPage;
  const end = start + productsPerPage;

  return (
    <>
      <div>
        <h1>ShoppingList:-</h1>
        <h4>Pagination</h4>
        <div style={{ display: "flex", alignItems: "center", gap: "20px", marginLeft:"20rem" }}>
          {[...Array(noOfproductToshow)].map((item, index) => {
            return (
              <button
                key={index}
                style={{ margin: "5px" }}
                onClick={() => setCurrentpage(index)}
              >
                {index + 1}
              </button>
            );
          })}
          <div>
            <select onChange={(e) => setProductsPerPage(e.target.value)} style={{padding:"5px", borderRadius:"5px"}}>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>
        </div>

        <div className="shopping-list">
          {products &&
            products.slice(start, end).map((item, index) => {
              return <Cards key={index} item={item} />;
            })}
        </div>
      </div>
    </>
  );
};

export default ShoppingList;
