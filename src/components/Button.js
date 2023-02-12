const Button = ({ children, color, parentCallback, ...rest }) => {
  return (
    <button
      onClick={parentCallback}
      className={`bg-${color} my-4 inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-blue-600 hover:bg-opacity-1 hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out`}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: "primary",
};

export default Button;
