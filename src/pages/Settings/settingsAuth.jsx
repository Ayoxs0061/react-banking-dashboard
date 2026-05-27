import { FiSmartphone } from "react-icons/fi";
import { RiShieldCheckLine } from "react-icons/ri";

const SettingsAuth = () => {
  return (
    <div className="min-[1200px]:max-h-58 min-[1200px]:h-full max-[1200px]:h-fit max-w-111.75 w-full bg-[white] shadow-xs rounded-xl p-5 flex flex-col gap-5">
      <div className="w-full flex items-center gap-2">
        <RiShieldCheckLine size={24} />
        <h3 className="font-semibold text-[#1B1B1D] text-[20px]">
          Two-Factor Auth
        </h3>
      </div>

      <p className="text-[#44474D] text-sm font-normal">
        Enhance your account security by requiring a code from your mobile
        device.
      </p>

      <div className="bg-[#EFEDEF] h-full flex items-center justify-between rounded-xl p-4">
        <div className="flex items-center gap-2">
          <FiSmartphone size={20} className="text-[#497CFF]" />
          <div>
            <h4 className="text-[#1B1B1D] text-xs font-semibold">
              SMS Authentication
            </h4>
            <p className="text-[#44474D] text-xs">Enabled • Ends in ...4567</p>
          </div>
        </div>

        <p className="text-[#BA1A1A] text-xs">Disable</p>
      </div>
    </div>
  );
};

export default SettingsAuth;
