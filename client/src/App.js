import React, { useState, useEffect } from "react";
import Products from "./components/Products";
import Topnavbar from "./components/Topnavbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import productsRaw from "./Dataset/products.json";
import categoriesRaw from "./Dataset/categories.json";
import Cart from "./components/Cart";
import Login from "./components/Login";
import useToken from './components/useToken';

// function setToken(userToken) {
//     sessionStorage.setItem('token', JSON.stringify(userToken));
//   }
  
//   function getToken() {
//     const tokenString = sessionStorage.getItem('token');
//     const userToken = JSON.parse(tokenString);
//     return userToken?.token
//   }

function App() {
    const { token, setToken } = useToken();
    const [cart, setCart] = useState([]);

  if(!token) {
    return <Login setToken={setToken} />
  }
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState(productsRaw);
  const [categories, setCategories] = useState(categoriesRaw);

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

  const onCheckout = () => {
    // array of products in cart with updated quantities
    let newProducts = cart.map((item) => {
      let productToChange = products.find((product) => product.id === item.id);
      return {
        ...productToChange,
        qty: productToChange.qty - item.amount,
      };
    });

    // generate array of product ids for items in cart
    let newProductIds = newProducts.map((item) => item.id);

    // use array of product ids to remove from all products
    let unchangedProducts = products.filter(
      (item) => !newProductIds.includes(item.id)
    );

    // add back the changed products
    const newProductsArray = [...unchangedProducts, ...newProducts];
    setProducts(newProductsArray);
    setCart([]);
  };

  // getProducts, useEffect

  return (
    <Router>
      <Topnavbar />
      <Switch>
        <Route exact path="/products">
          <Products products={products} categories={categories} onAdd={onAdd} />
        </Route>
        <Route exact path="/cart">
          <Cart
            cart={cart}
            onRemove={onRemove}
            onChangeAmt={onChangeAmt}
            onCheckout={onCheckout}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
