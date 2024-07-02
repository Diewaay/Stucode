import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Stucode from "../../../public/Stucode.png";
import { Link } from "react-router-dom";

const Subscription = () => {
  const location = useLocation();
  const [selectedPackage, setSelectedPackage] = useState({
    name: "Paket 1 Bulan",
    price: 10000,
  });

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const name = queryParams.get("name");
    const price = queryParams.get("price");

    if (name && price) {
      setSelectedPackage({
        name,
        price: parseInt(price.replace(/[^0-9]/g, ""), 10),
      });
    }
  }, [location]);

  return (
    <>
      <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
        <div className="bg-blue-700 text-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl mx-auto">
          <div className="md:flex">
            {/* Left section */}
            <div className="md:w-1/2 p-6 bg-blue-600">
              <div className="bg-blue-500 rounded-lg p-4 mb-4">
                <img
                  src={Stucode}
                  alt="Paket 1 Bulan"
                  className="w-full mb-4"
                />
                <h2 className="text-xl font-bold">{selectedPackage.name}</h2>
                <p className="text-2xl font-bold">
                  Rp. {selectedPackage.price.toLocaleString()}
                </p>
                <button className="bg-yellow-500 text-blue-900 font-semibold py-2 px-4 rounded-lg mt-4">
                  Paket Berlangganan
                </button>
              </div>
              <div className="text-sm">
                <p className="mb-2">
                  Paket Berlangganan STUCODE {selectedPackage.name}
                </p>
                <p className="font-bold mb-2">Keterangan Pembelian</p>
                <ul className="list-disc list-inside mb-4">
                  <li>Paket Langganan {selectedPackage.name}</li>
                  <li>Akses Semua Kursus di STUCODE</li>
                  <li>
                    Bayar 1x (kali) untuk akses semua kursus yang tersedia
                  </li>
                </ul>
                <p className="font-bold mb-2">Apa Saja Yang Kamu Dapatkan?</p>
                <ul className="list-disc list-inside mb-4">
                  <li>Akses video dimana saja dan kapan saja</li>
                  <li>
                    E-library dalam bentuk PDF (sesuai dengan kursus yang
                    dipilih)
                  </li>
                  <li>Diskusi dengan pengajar</li>
                  <li>Dapat sertifikat</li>
                </ul>
                <p className="font-bold mb-2">Informasi Tambahan</p>
                <ul className="list-disc list-inside">
                  <li>
                    Video dapat dinikmati hingga jangka waktu{" "}
                    {selectedPackage.name} setelah kamu melakukan pembayaran
                  </li>
                  <li>Pembelian video hanya untuk perorangan</li>
                  <li>
                    Sertifikat yang diberikan disesuaikan dengan nama dan email
                    di akun STUCODE
                  </li>
                </ul>
              </div>
            </div>
            {/* Right section */}
            <div className="md:w-1/2 p-6 bg-blue-50 text-blue-900">
              <Link to="/" className="text-blue-500 text-1xl mb-4 underline">
                Kembali
              </Link>
              <h2 className="text-2xl font-bold mb-6">Detail Pembayaran</h2>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">
                  Metode Pembayaran
                </label>
                <select className="w-full p-2 border rounded-lg">
                  <option>Pilih Metode Pembayaran</option>
                  <option>Paypal</option>
                  <option>Dana</option>
                  <option>Gopay</option>
                  <option>Mandiri</option>
                </select>
              </div>
              <div className="mb-4">
                <p className="text-sm">Rincian Pembayaran</p>
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>Rp {selectedPackage.price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-bold mt-2">
                  <span>Total Pembayaran</span>
                  <span>Rp {selectedPackage.price.toLocaleString()}</span>
                </div>
              </div>
              <p className="text-xs text-gray-600 mb-4">
                Dengan melanjutkan, kamu telah menyetujui{" "}
                <a href="#" className="text-blue-700">
                  Syarat dan Ketentuan
                </a>
                .
              </p>
              <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg w-full">
                Lanjutkan Pembayaran
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscription;
