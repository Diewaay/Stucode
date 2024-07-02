/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
const Section = ({
  title,
  content,
  children,
  orderClass = "order-1",
  containerClass = "w-full md:w-1/2 mt-12 md:mt-32",
}) => {
  return (
    <div className={`${orderClass} ${containerClass} flex justify-center`}>
      <div className="space-y-6 text-center">
        <p className="bg-blue-600 p-5 rounded-md text-white">{title}</p>
        {content && <h2 className="text-xl mt-10">{content}</h2>}
        {children}
      </div>
    </div>
  );
};

export default Section;
