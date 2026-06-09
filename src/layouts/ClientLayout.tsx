import Footer from "@/components/client/Footer";
import NavBar from "@/components/client/NavBar";
import { Outlet } from "react-router";
import LayoutWrapper from "@/layouts/LayoutWrapper.tsx";

function ClientLayout() {
  return (
  <LayoutWrapper>
    <div className="min-h-screen flex flex-col">
      <header className="h-16 w-full flex items-center px-6 sticky top-0 bg-background z-50">
        <NavBar />
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  </LayoutWrapper>
  );
}

export default ClientLayout;
