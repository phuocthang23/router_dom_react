import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface PageLayoutsProps {
  children?: React.ReactNode;
}

const PageLayouts: React.FC<PageLayoutsProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default PageLayouts;
