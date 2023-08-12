import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import DepartmentPage from "../Pages/DepartmentPage/DepartmentPage";
import ProductsPage from "../Pages/ProductsPage/ProductsPage";
import SingleProductPage from "../Pages/SingleProductPage/SingleProductPage";
import NewProductPage from "../Pages/NewProductPage/NewProductPage";

const AllRoutes = () => {
    return <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/department" element={<DepartmentPage />} />
        <Route path="/product" element={<ProductsPage />} />
        <Route path="/product/new" element={<NewProductPage />} />
        <Route path="/product/:productID" element={<SingleProductPage />} />
        <Route path="*" element={<HomePage />} />
    </Routes>
}

export default AllRoutes;