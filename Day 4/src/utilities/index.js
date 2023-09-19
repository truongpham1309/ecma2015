import Navigo from "navigo";

const router = new Navigo("/", {linksSelector: "a", hash: true});

const render = (component, element) => {
    element.innerHTML = component();
}

export { render, router };