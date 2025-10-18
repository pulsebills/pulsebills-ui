import DashboardPageLayout from "@/components/containers/DashboardPageLayout/DashboardPageLayout";
// import InvoicesPage from "./components/InvoicesPage";
import ComingSoonPage from "@/components/commonUIComponents/ComingSoon";

const Patients = () => {
  return (
    <DashboardPageLayout>
      {/* <InvoicesPage /> */}
      <ComingSoonPage pageName="Invoices Page" />
    </DashboardPageLayout>
  );
}

export default Patients;