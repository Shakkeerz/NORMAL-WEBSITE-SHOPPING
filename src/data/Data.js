import { AiFillMedicineBox, AiOutlineShoppingCart } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { GrServices} from "react-icons/gr";

const icon_style = "text-7xl md:text-9xl "
export const whyUs = [
    {id:1,title:"Best Shopping experiance",icon:<AiOutlineShoppingCart className={icon_style}/>},
    {id:2,title:"Best Services",icon:<GrServices  className={icon_style}/>},
    {id:3,title:"After Sales Services",icon:<AiFillMedicineBox className={icon_style}/>},
    {id:4,title:"Fast Home Delivery",icon:<TbTruckDelivery className={icon_style}/>}
    
]