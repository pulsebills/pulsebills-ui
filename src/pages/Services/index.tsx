import DashboardPageLayout from "@/components/containers/DashboardPageLayout/DashboardPageLayout";
// import ServicesPage from "./components/ServicesPage";
import ComingSoonPage from "@/components/commonUIComponents/ComingSoon";

const Services = () => {
  return (
    <DashboardPageLayout>
      {/* <ServicesPage /> */}
      <ComingSoonPage pageName="Services Page" />
    </DashboardPageLayout>
  );
}

export default Services;