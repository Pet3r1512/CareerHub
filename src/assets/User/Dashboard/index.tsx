import UserDashboardMenu from "../Menu";

export default function UserDashboard() {
  return (
    <div className="flex pt-8 h-full">
      <UserDashboardMenu />
      <div className="flex-1"></div>
    </div>
  );
}

// Overview, Applied jobs, favorite jobs, job alerts
// settings, logout
