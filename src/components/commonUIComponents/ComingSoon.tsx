import { Construction, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

type PropsTypes = {
  pageName: string;
};

const ComingSoonPage = ({ pageName }: PropsTypes) => {
  return (
    <div className="flex items-center justify-center min-h-[70vh]">
      <div className="text-center max-w-md">
        <div className="mb-6 inline-block p-6 bg-blue-50 rounded-full">
          <Construction className="w-16 h-16 text-blue-500" strokeWidth={1.5} />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          {pageName} Coming Soon
        </h1>

        <p className="text-gray-600 mb-8">
          We're working hard to bring you this feature. Stay tuned for updates!
        </p>

        <Link
          to="/dashboard"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default ComingSoonPage;
