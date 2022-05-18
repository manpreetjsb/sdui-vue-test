import VueRouter from "vue-router";
import AboutUs from "./components/AboutUs";
import NewsList from "./components/NewsList";
import ContactUs from "./components/ContactUs";

const routes = [
  { path: "/", component: NewsList, name: "Home" },
  { path: "/about-us", component: AboutUs, name: "AboutUs" },
  { path: "/contact-us", component: ContactUs, name: "ContactUs" },
  { path: "*", component: NewsList },
];

const router = new VueRouter({
  routes,
});

export default router;
