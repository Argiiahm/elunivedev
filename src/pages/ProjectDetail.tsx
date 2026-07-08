import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft } from "@hugeicons/core-free-icons";
import { Link } from "react-router";

const ProjectDetail = () => {
  return (
    <div className="py-6 sm:py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-white my-8 flex items-center gap-2">
        <HugeiconsIcon icon={ArrowLeft} />
        <Link to="/">Back to home</Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-6 space-y-6">
          <img
            src="https://cdn.kadio.id/upload/products1677235654_Minimalis%20Purple%20Grape.png"
            className="w-full h-auto object-cover rounded-2xl shadow-sm"
            alt="WA Chatbot"
          />
        </div>
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold text-white">Absensi Karyawan</h1>
            <ul className="text-base list-disc space-y-2 text-gray-500 font-normal">
              <li>
                Developed an employee attendance system with face recognition
                and live liveness detection
              </li>
              <li>
                Implemented attendance, leave management, employee request, and
                reporting features
              </li>
              <li>
                Built responsive dashboards and user interfaces for
                administrators
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
