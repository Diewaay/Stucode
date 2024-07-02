/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      console.log(response.data);
      setMsg(response.data.msg);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      setIsLoggedIn(true);
      navigate("/"); // Navigasi ke halaman utama setelah login berhasil
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      } else {
        setMsg("Login failed");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <Link to="/" className="text-blue-500 text-2xl mb-4">
          &lt;
        </Link>
        <h2 className="text-2xl font-bold mb-6 text-center">Masuk</h2>
        <button className="w-full flex items-center justify-center bg-red-500 text-white py-2 px-4 rounded mb-4">
          <img
            src="https://img.icons8.com/color/16/000000/google-logo.png"
            alt="Google"
            className="mr-2"
          />
          Lanjutkan dengan Google
        </button>
        <button className="w-full flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded mb-4">
          <img
            src="https://img.icons8.com/ios-filled/16/ffffff/facebook-new.png"
            alt="Facebook"
            className="mr-2"
          />
          Lanjutkan dengan Facebook
        </button>
        <div className="flex items-center justify-center my-4">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-4 text-gray-500">ATAU</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Kata Sandi
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded"
          >
            Masuk
          </button>
        </form>
        {msg && <p className="text-red-500 mt-4">{msg}</p>}
        <div className="mt-4 text-center">
          Belum punya akun?
          <Link to="/Register" className="text-blue-500">
            Mendaftar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
