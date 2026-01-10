import "./App.css";
import Layout from "./shared/layouts/Layout";
import { PrimeReactProvider } from "primereact/api";

function App() {
	return (
		<PrimeReactProvider value={{ ripple: true }}>
			<Layout>
				<div>Guitar Store</div>
			</Layout>
		</PrimeReactProvider>
	);
}

export default App;
