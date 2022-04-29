import { createRouter, createWebHistory } from "vue-router";
import Landing from './Landing.vue'
import Login from './Auth/Login.vue'
import Register from './Auth/Register.vue'
import Profile from './Client/Pages/Profile/Profile.vue'
import Orders from './Client/Pages/Orders/Orders.vue'
import Products from './Client/Pages/Products/Products.vue'
import ShowProduct from './Client/Pages/Products/ShowProduct.vue'
import Cart from './Client/Pages/Cart/Cart.vue'


const routes = [
  { name: 'landing', path: "/", component: Landing },

  { name: 'login', path: "/login", component: Login },
  { name: 'register', path: "/register", component: Register },

  { name: 'profile', path: "/profile", component: Profile },
  { name: 'orders', path: "/orders", component: Orders },
  { name: 'products', path: "/products", component: Products },
  { name: 'show-product', path: "/product/:id", component: ShowProduct },
  { name: 'cart', path: "/cart", component: Cart },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;