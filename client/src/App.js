import React, { useState, useEffect } from "react";
import Products from "./components/Products";
import Topnavbar from "./components/Topnavbar";
import Checkout from "./components/Checkout";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import products from "./Dataset/products.json";
import categories from "./Dataset/categories.json";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);
  // const [products, setProducts] = useState([]);
  // const [categories, setCategories] = useState([]);

  // async function getProducts() {
  //   try {
  //     const res = await axios.get("");
  //     setProducts(res.body);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }

  // async function getCategories() {
  //   try {
  //     const res = await axios.get("");
  //     setCategories(res.body)
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }

  // useEffect(() => {
  //   getProducts()
  //   getCategories
  // }, [])

  const onAdd = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...exists, amount: exists.amount + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, amount: 1 }]);
    }
  };

  const onRemove = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const onChangeAmt = (id, direction) => {
    if (
      direction === "dec" &&
      cart.find((item) => item.id === id).amount === 1
    ) {
      return setCart(cart.filter((item) => item.id !== id));
    }
    setCart(
      cart.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            amount:
              direction === "inc" ? (item.amount += 1) : (item.amount -= 1),
          };
        }
        return item;
      })
    );
  };

  // getProducts, useEffect

  return (
    <Router>
      <Topnavbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products">
          <Products products={products} categories={categories} onAdd={onAdd} />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route exact path="/cart">
          <Cart cart={cart} onRemove={onRemove} onChangeAmt={onChangeAmt} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
