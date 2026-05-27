import { ImProfile } from "react-icons/im";

const SettingsForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="min-[1001px]:max-h-75 min-[1001px]:h-full h-fit max-w-229.5 w-full bg-[white] rounded-xl shadow-xs p-5 flex flex-col gap-5"
    >
      <div className="w-full max-[380px]:flex-col max-[380px]:gap-2 flex justify-between min-[380px]:items-center">
        <div className="flex items-center gap-2">
          <ImProfile size={20} />
          <h3 className="font-semibold text-[#1B1B1D] text-[20px]">
            Profile information
          </h3>
        </div>

        <div className="bg-[#D5E0F8] py-1 px-2 text-[#586377] rounded-4xl w-fit">
          <p className="max-[400px]:text-[8px] font-bold text-[10px] uppercase">
            public identity
          </p>
        </div>
      </div>

      <div className="max-[481px]:flex-wrap w-full flex items-center gap-5">
        <label className="input-labels">
          Full Name
          <input
            type="text"
            name="user-name"
            required
            placeholder="Julian Vance"
            className="input-styling"
          />
        </label>

        <label className="input-labels">
          Email Address
          <input
            type="email"
            name="user-email"
            required
            placeholder="julian.vance@apex-corp.com"
            className="input-styling"
          />
        </label>
      </div>

      <div className="max-[481px]:flex-wrap w-full flex items-center gap-5">
        <label className="input-labels">
          Phone Number
          <input
            type="number"
            name="user-phone-number"
            required
            placeholder="+1 (555) 0123-4567"
            className="input-styling"
          />
        </label>

        <label className="input-labels">
          Residential Address
          <input
            type="text"
            name="user-address"
            required
            placeholder="722 Banking Way, New York, NY"
            className="input-styling"
          />
        </label>
      </div>

      <button
        type="submit"
        className="bg-[#000000] rounded-xl p-2 text-white w-[30%] self-start"
      >
        Submit
      </button>
    </form>
  );
};

export default SettingsForm;
