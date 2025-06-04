export const HamburgerIcon = ({ isOpen, onClick }) => {
    return (
      <button
        onClick={onClick}
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none z-50 relative"
        aria-label="Toggle Menu"
      >
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 transform ${
            isOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 transform ${
            isOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        ></span>
      </button>
    );
  };