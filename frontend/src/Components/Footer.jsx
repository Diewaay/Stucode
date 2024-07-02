const Footer = () => {
  return (
    <div className="bg-blue-900 text-white py-10 mt-10">
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <img
              src="/path-to-your-logo/logo.png"
              alt="Stucode Logo"
              className="h-10"
            />
          </div>
          <div className="text-center md:text-left">
            <p>&copy; 2024 Stucode</p>
          </div>
          <div className="text-center md:text-right space-y-2">
            <p>Hubungi Kami</p>
            <p>stucodeofficial@gmail.com</p>
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="#" aria-label="Instagram">
                <img
                  src="/path-to-your-icons/instagram-icon.png"
                  alt="Instagram"
                  className="h-6"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
