import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import axios from "../axiosConfig.js"; // Pastikan import ini sesuai dengan file konfigurasi axios Anda

axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <div>
      <App />
    </div>
  </BrowserRouter>
);
