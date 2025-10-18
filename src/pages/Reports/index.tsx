import DashboardPageLayout from "@/components/containers/DashboardPageLayout/DashboardPageLayout";
// import ReportsPage from "./components/ReportsPage";
import ComingSoonPage from "@/components/commonUIComponents/ComingSoon";

const Patients = () => {
  return (
    <DashboardPageLayout>
      {/* <ReportsPage /> */}
      <ComingSoonPage pageName="Reports Page" />
    </DashboardPageLayout>
  );
}

export default Patients;