import DashboardPageLayout from "@/components/containers/DashboardPageLayout/DashboardPageLayout";
// import SettingsPage from "./components/SettingsPage";
import ComingSoonPage from "@/components/commonUIComponents/ComingSoon";

const Patients = () => {
  return (
    <DashboardPageLayout>
      {/* <SettingsPage /> */}
      <ComingSoonPage pageName="Settings Page" />
    </DashboardPageLayout>
  );
}

export default Patients;