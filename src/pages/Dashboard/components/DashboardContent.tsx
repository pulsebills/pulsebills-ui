import {
  DollarSign,
  Users,
  FileText,
  TrendingUp,
  Plus,
  UserPlus,
  BarChart3,
} from "lucide-react";

const DashboardContent = () => {
  const stats = [
    {
      title: "Total Revenue",
      value: "₹45,231.89",
      change: "+20.1% from last month",
      icon: DollarSign,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-500",
    },
    {
      title: "Active Patients",
      value: "2,350",
      change: "+180 from last month",
      icon: Users,
      iconBg: "bg-cyan-50",
      iconColor: "text-cyan-500",
    },
    {
      title: "Pending Invoices",
      value: "12",
      change: "+2 from yesterday",
      icon: FileText,
      iconBg: "bg-purple-50",
      iconColor: "text-purple-500",
    },
    {
      title: "Collection Rate",
      value: "94.2%",
      change: "+2.5% from last month",
      icon: TrendingUp,
      iconBg: "bg-green-50",
      iconColor: "text-green-500",
    },
  ];

  const recentInvoices = [
    {
      id: "INV-001",
      patient: "Sarah Johnson",
      status: "paid",
      amount: "₹450.00",
      date: "2024-01-15",
    },
    {
      id: "INV-002",
      patient: "Michael Chen",
      status: "pending",
      amount: "₹320.00",
      date: "2024-01-14",
    },
    {
      id: "INV-003",
      patient: "Emma Wilson",
      status: "overdue",
      amount: "₹180.00",
      date: "2024-01-10",
    },
    {
      id: "INV-004",
      patient: "David Brown",
      status: "paid",
      amount: "₹520.00",
      date: "2024-01-12",
    },
    {
      id: "INV-005",
      patient: "Lisa Garcia",
      status: "pending",
      amount: "₹290.00",
      date: "2024-01-13",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "paid":
        return "bg-green-100 text-green-700";
      case "pending":
        return "bg-yellow-100 text-yellow-700";
      case "overdue":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">
          Overview of your medical practice billing
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-lg border border-gray-200 p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-600">
                {stat.title}
              </span>
              <div className={`p-2 rounded-lg ${stat.iconBg}`}>
                <stat.icon className={`w-5 h-5 ${stat.iconColor}`} />
              </div>
            </div>
            <div className="mb-2">
              <span className="text-2xl font-bold text-gray-900">
                {stat.value}
              </span>
            </div>
            <div className="text-xs text-green-600">{stat.change}</div>
          </div>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Invoices */}
        <div className="lg:col-span-2 bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Recent Invoices
          </h2>
          <div className="space-y-4">
            {recentInvoices.map((invoice) => (
              <div
                key={invoice.id}
                className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1">
                  <div className="font-medium text-gray-900">{invoice.id}</div>
                  <div className="text-sm text-gray-600">{invoice.patient}</div>
                </div>
                <div className="flex items-center gap-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      invoice.status
                    )}`}
                  >
                    {invoice.status}
                  </span>
                  <div className="text-right">
                    <div className="font-semibold text-gray-900">
                      {invoice.amount}
                    </div>
                    <div className="text-xs text-gray-500">{invoice.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Quick Actions
          </h2>
          <div className="space-y-3">
            <button className="w-full flex items-start gap-3 p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              <Plus className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <div className="text-left">
                <div className="font-medium">Create New Invoice</div>
                <div className="text-sm text-blue-100">
                  Generate invoice for patient visit
                </div>
              </div>
            </button>

            <button className="w-full flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <UserPlus className="w-5 h-5 mt-0.5 text-gray-600 flex-shrink-0" />
              <div className="text-left">
                <div className="font-medium text-gray-900">Add New Patient</div>
                <div className="text-sm text-gray-600">
                  Register new patient information
                </div>
              </div>
            </button>

            <button className="w-full flex items-start gap-3 p-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
              <BarChart3 className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <div className="text-left">
                <div className="font-medium">View Reports</div>
                <div className="text-sm text-green-100">
                  Access financial analytics
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
