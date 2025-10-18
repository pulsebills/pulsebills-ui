import DashboardPageLayout from "@/components/containers/DashboardPageLayout/DashboardPageLayout";
// import PaymentsPage from "./components/PaymentsPage";
import ComingSoonPage from "@/components/commonUIComponents/ComingSoon";

const Patients = () => {
  return (
    <DashboardPageLayout>
      {/* <PaymentsPage /> */}
      <ComingSoonPage pageName="Payments Page" />
    </DashboardPageLayout>
  );
}

export default Patients;