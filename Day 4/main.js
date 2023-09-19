import { router, render } from "./src/utilities";
import HomePageComponent from './src/pages/HomePage';
import AboutPageComponent from './src/pages/AboutPage';


const app = document.querySelector("#app");

router.on('/', () => render(HomePageComponent, app));
router.on('/about', () => render(AboutPageComponent,app));

router.resolve();


