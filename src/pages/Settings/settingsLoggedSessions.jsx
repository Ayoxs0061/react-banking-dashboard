import { BiDevices } from "react-icons/bi";
import { FiSmartphone } from "react-icons/fi";
import { TiDeviceLaptop } from "react-icons/ti";

const SettingsLoggedSessions = () => {
  return (
    <div className="min-[1200px]:max-h-58 min-[1200px]:h-full max-[1200px]:h-fit max-w-111.75 w-full bg-[white] shadow-xs rounded-xl p-5 flex flex-col gap-5">
      <div className="w-full flex items-center gap-2">
        <BiDevices size={20} />
        <h3 className="font-semibold text-[#1B1B1D] text-[20px]">
          Logged Sessions
        </h3>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <TiDeviceLaptop size={24} />
          <div className="w-full">
            <h4 className="text-[#1B1B1D] text-sm font-semibold">
              Chrome on MacOS
            </h4>
            <p className="text-[11px] text-[#44474D]">
              New York, USA • Active now
            </p>
          </div>
        </div>
        <div className="h-2 w-2 bg-[#497CFF] rounded-full" />
      </div>

      <div className="flex items-center gap-2 opacity-40">
        <FiSmartphone size={24} />
        <div className="w-full">
          <h4 className="text-[#1B1B1D] text-sm font-semibold">
            Apex App on iPhone 15
          </h4>
          <p className="text-[11px] text-[#44474D]">
            New York, USA • 2 hours ago
          </p>
        </div>
      </div>
    </div>
  );
};

export default SettingsLoggedSessions;
