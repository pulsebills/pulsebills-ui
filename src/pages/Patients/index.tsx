import DashboardPageLayout from "@/components/containers/DashboardPageLayout/DashboardPageLayout";
// import PatientsPage from "./components/PatientsPage";
import ComingSoonPage from "@/components/commonUIComponents/ComingSoon";

const Patients = () => {
  return (
    <DashboardPageLayout>
      {/* <PatientsPage /> */}
      <ComingSoonPage pageName="Patients Page" />
    </DashboardPageLayout>
  );
}

export default Patients;