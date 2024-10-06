import Navbar from "./_components/Navbar";
import OrgSidebar from "./_components/OrgSidebar";
import SideBar from "./_components/sidebar";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <main className="h-full">
      <SideBar />
      <div className="pl-[60px] h-full">
        <div className="flex gap-x-3 h-full">
          <OrgSidebar />
          <div className="h-full flex-1">
            {/* Add Navbar */}
            <Navbar />
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default layout;
