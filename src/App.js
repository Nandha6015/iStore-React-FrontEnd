import "./App.css";
import Navbar from "./component/navbar/navbar";
import Login from "./component/signup/login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/home/home";
import Footer from "./component/footer/footer";
import Orders from "./component/order/orders";
import Register from "./component/signup/register";
import Products from "./component/product/products";
import Cart from "./component/cart/cart";
import Singleproduct from "./component/product/singleproduct";
import Payment from "./component/payment/payment";
import Profile from "./component/profile/profile";
import UserDetails from "./component/profile/userdetails";
import ProductAdd from "./component/product/productadd";
import ProductEdit from "./component/product/productedit";
import Tracker from "./component/tracker/tracker";
import OrderList from "./component/order/orderlist";
import ContactForm from "./component/contact/contactform";
import About from "./component/Aboutus/aboutus.js";
import ContactInbox from "./component/contact/contactinbox";
export const URL = "http://localhost:8080";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/login"} component={Login} />
          <Route exact path={"/signup"} component={Register} />
          <Route exact path={"/products"} component={Products} />
          <Route exact path={"/products/:pid"} component={Singleproduct} />
          <Route exact path={"/cart"} component={Cart} />
          <Route exact path={"/orders"} component={Orders} />
          <Route exact path={"/payment"} component={Payment} />
          <Route exact path={"/profile"} component={Profile} />
          <Route exact path={"/userdetails"} component={UserDetails} />
          <Route exact path={"/addproduct"} component={ProductAdd} />
          <Route exact path={"/updateproduct/:id"} component={ProductEdit} />
          <Route exact path={"/tracker"} component={Tracker} />
          <Route exact path={"/orderlist"} component={OrderList} />
          <Route exact path={"/contactform"} component={ContactForm} />
          <Route exact path={"/aboutus"} component={About} />
          <Route exact path={"/contactinbox"} component={ContactInbox} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
