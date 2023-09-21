import './style.css';
import { router, render } from "./src/utilities";
import HomePageComponent from './src/pages/HomePage';
import AboutPageComponent from './src/pages/AboutPage';
import ProductsList from "./src/pages/Products";
import NotFoundPage from "./src/pages/NotFoundPage";
import AdminPage from "./src/pages/admin/AdminPage";



const app = document.querySelector("#app");

router.on('/', () => render(HomePageComponent, app));
router.on('/about', () => render(AboutPageComponent,app));
router.on('/products', () => render(ProductsList,app));
router.on('/admin', () => render(AdminPage,app));
router.notFound(() => render(NotFoundPage,app));

router.resolve();


