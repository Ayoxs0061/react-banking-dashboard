import SettingsForm from "./settingsForm";
import SettingsAuth from "./settingsAuth";
import MenuBtn from "../../components/menuBtn";
import SettingsCommunication from "./settingsCommunication";
import SettingsLoggedSessions from "./settingsLoggedSessions";
const Settings = () => {
  return (
    <section className="w-full h-full p-4 flex flex-col gap-5 overflow-scroll">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h2 className="font-bold text-[#000000] text-[20px] max-[768px]:text-lg">
            Account Settings
          </h2>

          <p className="text-[#44474D] text-sm max-[768px]:text-xs max-[320px]:text-[10px]">
            Manage your account and preferences
          </p>
        </div>

        <MenuBtn />
      </div>

      <SettingsForm />

      <div className="flex flex-wrap min-[1200px]:max-w-229.5 max-[1200px]:max-w-full max-[1001px]:justify-center min-[1200px]:justify-between gap-5 w-full h-fit">
        <SettingsAuth />

        <SettingsLoggedSessions />
      </div>

      <SettingsCommunication />
    </section>
  );
};

export default Settings;
