import { useEffect, useState } from "react";
import { useRouter } from "next/router";

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
    <div>
      <h1>Admin Dashboard</h1>
      <p>Admin logged in</p>
    </div>
  );
};

export default Dashboard;
