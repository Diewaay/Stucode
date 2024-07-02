/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Footer from "../Footer";
import Course_Desain from "../../../public/Course_Desain.png";
import Karakter from "../../../public/Karakter.png";
import { Link, useParams } from "react-router-dom";

const Course = () => {
  const { title, deskripsi, image } = useParams();
  console.log(title);
  console.log(deskripsi);
  return (
    <div className="bg-blue-200 container top-0 left-0 mt-10 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">{title}</h1>
        <div className="flex flex-col md:flex-row justify-between items-start mb-6">
          <div className="md:w-2/3">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              Deskripsi
            </h2>
            <p className="text-gray-700 mb-4">{deskripsi}</p>
          </div>
          <div className="md:w-1/3 flex flex-col items-center rounded-lg shadow-lg mb-4 w-full">
            <img src={Course_Desain} alt="Kursus Design Grafis" className="" />
            <Link to={`/content/${title}/${encodeURIComponent(image)}`}>
              {" "}
              <button className="bg-blue-600 text-white py-2 px-4 mb-4 rounded-lg hover:bg-blue-700">
                Mulai Kursus Sekarang
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-between items-start mt-6">
          <div className="md:w-2/3">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              Apa yang Kamu Dapatkan Setelah Belajar {title}
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Memahami dasar-dasar {title}</li>
              <li>
                Memiliki kreativitas dan ilmu-ilmu dasar untuk menggunakan ilmu{" "}
                {title}
              </li>
              <li>
                Memiliki skill untuk masa yang akan datang dengan ilmu {title}
              </li>
            </ul>
          </div>
          <div className="md:w-1/3 flex justify-end">
            <img
              src={Karakter}
              alt="Character"
              className="w-32 h-32 md:w-48 md:h-48 sm:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
