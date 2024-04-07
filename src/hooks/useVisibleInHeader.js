import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const useVisibleInHeader = () => {
  const location = useLocation();

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setVisible(false);
        break;
      case "/signin":
        setVisible(false);
        break;
      case "/adminlogin":
        setVisible(false);
        break;
      default:
        setVisible(true);
    }
  }, [location.pathname]);

  return [visible];
};

export default useVisibleInHeader;
