import { Flexbox } from "../components/Flexbox/Flexbox";
import { Contact } from "../components/Contact/Contact";
import { Products } from "../components/Products/Products";

const GeneralRoutes = [
    { path: "/flex", component: Flexbox},
    { path: "/contact", component: Contact},
    { path: "/products", component: Products}
]

const allRoutes = [...GeneralRoutes];
export default allRoutes;
