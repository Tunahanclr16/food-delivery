import Image from "next/image";
import { MdShoppingCart } from "react-icons/md";
import Burger from "../../assets/o1.jpg"
import Title from "../ui/Title";

const CampaignItem = () => {
  return (
    <div className="bg-secondary flex-1 rounded-md py-5 px-[15px] flex items-center gap-x-4">
      <div className="relative md:w-44 md:h-44 w-36 h-36 after:content-['']   border-[5px] border-primary rounded-full overflow-hidden">
        <Image
          src={Burger}
          alt=""
          layout="fill"
          className="hover:scale-105 transition-all"
          objectFit="cover"
        />
      </div>
      <div className="text-white">
        <Title addClass="text-2xl" title={"Tasty Thursday"}/>
        <div className="font-dancing my-1">
          <span className="text-[40px]">20%</span>
          <span className="text-sm inline-block ml-1">Off</span>
        </div>
        <button className="btn-primary flex items-center gap-x-2">
          Order Now <MdShoppingCart size={20} />
        </button>
      </div>
    </div>
  );
};

const Campaigns = () => {
  return (
    <div className="flex justify-between container mx-auto py-20 gap-6 flex-wrap">
      <CampaignItem />
      <CampaignItem />
    </div>
  );
};

export default Campaigns;