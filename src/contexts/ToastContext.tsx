import { createContext, useContext, useRef } from "react";
import { Toast } from "primereact/toast";

type ToastProps = {
	showMessage: (severity: "success" | "error" | "warn" | "info", summary: string, detail: string, life?: number) => void;
};

export const ToastContext = createContext<ToastProps>({
	showMessage: () => {},
});

export const ToastContextProvider = ({ children }: { children: React.ReactNode }) => {
	const toastRef = useRef<Toast>(null);

	const showMessage = (
		severity: "success" | "error" | "warn" | "info",
		summary: string,
		detail: string,
		life: number = 1000,
	) => {
		toastRef.current?.show({
			severity,
			summary,
			detail,
			life,
		});
	};
	return (
		<ToastContext.Provider value={{ showMessage }}>
			<Toast ref={toastRef} position="top-center" />
			{children}
		</ToastContext.Provider>
	);
};

export const useToast = () => {
	const context = useContext(ToastContext);

	if (!context) throw new Error("useToast must be used within a ToastContextProvider");

	return context;
};
