import { AiOutlineStock } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessage2Line } from "react-icons/ri";

const SettingsCommunication = () => {
  const checkBox = [
    {
      header: "Email Alerts",
      icon: <MdOutlineEmail size={20} />,
      desc: "Receive transaction summaries and monthly reports.",
      checked: true,
    },
    {
      header: "SMS Alerts",
      icon: <RiMessage2Line size={20} />,
      desc: "Get instant updates for all outgoing transfers.",
      checked: true,
    },
    {
      header: "Marketing",
      icon: <AiOutlineStock size={20} />,
      desc: "Personalized investment offers and partner rewards.",
      checked: false,
    },
  ];

  return (
    <div className="min-[1200px]:max-h-54.75 min-[1200px]:h-full h-fit max-w-229.5 w-full bg-[white] rounded-xl shadow-xs p-5 flex flex-col gap-5">
      <h3 className="font-semibold text-[#1B1B1D] text-[20px]">
        Communication Preferences
      </h3>

      <div className="flex flex-wrap max-[1200px]:justify-center min-[1200px]:justify-between items-center gap-5 w-full h-fit">
        {checkBox.map((data, index) => (
          <div
            key={index}
            className="border-[#C5C6CD] border rounded-xl max-w-68.5 w-full min-[1200px]:max-h-29.75 min-[1200px]:h-full h-fit p-3 flex flex-col gap-2"
          >
            <div className="flex justify-between w-full">
              {data.icon}
              <input
                type="checkbox"
                className="size-4 checked:accent-[black] rounded-xl"
                defaultChecked={data.checked}
              />
            </div>

            <h4 className="text-[#1B1B1D] text-xs font-semibold">
              {data.header}
            </h4>

            <p className="text-[11px] text-[#44474D]">{data.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SettingsCommunication;
