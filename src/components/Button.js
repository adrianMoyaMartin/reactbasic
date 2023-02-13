import { Button } from "antd";

const ButtonMain = ({ children, parentCallback, ...rest }) => {
  return (
    <Button
      className="custom-buttom-props"
      style={{ background: "rgb(180,230,300" }}
      type="default"
      onClick={parentCallback}
      //className={`bg-${color} my-4 inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-blue-600 hover:bg-opacity-1 hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out`}
    >
      {children}
    </Button>
  );
};

Button.defaultProps = {
  color: "primary",
};

export default ButtonMain;
