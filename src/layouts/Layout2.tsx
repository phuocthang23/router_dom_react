import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface PageLayoutsProps {
  children?: React.ReactNode;
}

const Layout2: React.FC<PageLayoutsProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout2;
