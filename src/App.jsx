import "./App.css";
import ProductsPage from "./containers/Products/products-page";
import AboutUsPage from "./containers/AboutUs/about-us-page";
import ContactPage from "./containers/Contact/contact-page";
import { Routes, Route } from "react-router-dom";
import Layout from "./shared/layouts/Layout";

function App() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route
					path="/"
					element={<ProductsPage />}
				/>
				<Route
					path="/about-us"
					element={<AboutUsPage />}
				/>
				<Route
					path="/contact"
					element={<ContactPage />}
				/>
				<Route
					path="*"
					element={<ProductsPage />}
				/>
			</Route>
		</Routes>
	);
}

export default App;
