/* eslint-disable react/prop-types */
const Button = ({ text, className, ...props }) => {
  return (
    <button
      className={`text-blie-800 bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer ${className}`}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
