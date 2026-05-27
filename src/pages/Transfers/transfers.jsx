import TransfersForm from "./transfersForm";
import TransfersCards from "./transfersCards";
import MenuBtn from "../../components/menuBtn";

const Transfers = () => {
  return (
    <section className="w-full h-full p-4 flex flex-col gap-5">
      {/* header */}
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-[#000000] text-[20px]">Transfer Funds</h2>

        <MenuBtn />
      </div>

      <div className="flex gap-6 w-full max-[1001px]:flex-wrap max-[1001px]:justify-center">
        <TransfersForm />

        <TransfersCards />
      </div>
    </section>
  );
};

export default Transfers;
