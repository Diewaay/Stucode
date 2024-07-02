/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Footer";
import Course_Desain from "../../../public/Course_Desain.png";

const Content = () => {
  const { title } = useParams();
  const [selectedChapter, setSelectedChapter] = useState(null);

  // URL video untuk setiap chapter
  const videos = {
    1: "/html.mp4", // Path untuk video lokal
    2: "/css.mp4",
    3: "/js.mp4",
    4: "/posisi.mp4",
    5: "/flexbox.mp4",
    6: "/responsive.mp4",
    7: "https://example.com/video-chapter-7.mp4",
  };

  return (
    <div>
      <div className="min-h-screen top-0 left-0 mt-10 container mx-auto p-4 flex flex-col md:flex-row">
        {/* Left section */}
        <div className="md:w-2/3 p-4">
          <h1 className="text-3xl font-bold mb-4">Kursus {title}</h1>
          <h2 className="text-xl mb-2">Kurikulum</h2>
          <div className="space-y-2">
            {Array.from({ length: 7 }, (_, i) => (
              <div
                key={i}
                onClick={() => setSelectedChapter(i + 1)}
                className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md cursor-pointer"
              >
                <span>Chapter {i + 1} :</span>
                <span>&#9662;</span>
              </div>
            ))}
          </div>
          {/* Tampilkan video berdasarkan chapter yang dipilih */}
          {selectedChapter && (
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">
                Video Chapter {selectedChapter}
              </h3>
              <video
                src={videos[selectedChapter]}
                controls
                className="w-full rounded-lg shadow-md"
              />
            </div>
          )}
        </div>

        {/* Right section */}
        <div className="md:w-1/3 p-4 flex justify-center items-center">
          <img
            src={Course_Desain}
            alt={title}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
