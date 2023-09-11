import { Flexbox } from "../pages/Flexbox/Flexbox";
import { Contact } from "../pages/Contact/Contact";
import { Products } from "../pages/Products/Products";

const GeneralRoutes = [
    { path: "/flex", component: Flexbox},
    { path: "/contact", component: Contact},
    { path: "/products", component: Products}
]

const allRoutes = [...GeneralRoutes];
export default allRoutes;
