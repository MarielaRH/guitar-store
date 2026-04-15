import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";
import { CartContextProvider } from "./contexts/CartContext.tsx";
import { ToastContextProvider } from "./contexts/ToastContext.tsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<CartContextProvider>
				<PrimeReactProvider value={{ ripple: true }}>
					<ToastContextProvider>
						<App />
					</ToastContextProvider>
				</PrimeReactProvider>
			</CartContextProvider>
		</BrowserRouter>
	</StrictMode>,
);
