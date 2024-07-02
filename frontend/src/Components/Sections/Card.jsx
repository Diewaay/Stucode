import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Card = ({ image, title, deskripsi, hideDescription }) => {
  return (
    <>
      <Link to={`/Course/${title}/${deskripsi}`}>
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 cursor-pointer">
          <img className="w-full" src={image} alt={title} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            {!hideDescription && <p>{deskripsi}</p>}
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
