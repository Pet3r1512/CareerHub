import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "@/assets/admin/header";
import Page from "@/assets/_UI/Page";
import Table from "@/assets/admin/table";

const Dashboard = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const userRole = localStorage.getItem("admin");
    if (!userRole || userRole === undefined) {
      // Redirect to admin signin page if not authenticated or not admin
      router.replace("/admin");
    }
    setIsAdmin(true);
  }, []);

  if (!isAdmin) {
    // Return null or loading indicator while checking user role
    return null;
  }

  return (
    <Page
      pageName="Admin Dashboard"
      noMenu
      noFooter
      noHeader
      className="h-screen relative"
    >
      <Table />
    </Page>
  );
};

export default Dashboard;
