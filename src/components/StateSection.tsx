import {
  Package,
  Grid2X2,
  Tags,
  ShoppingCart,
  DollarSign,
} from "lucide-react";
import { StateCard } from "./StateCard";


const stats = [
  {
    title: "Total Products",
    value: "1,248",
    percentage: "12.5%",
    icon: Package,
    iconBg: "bg-indigo-500",
  },
  {
    title: "Categories",
    value: "56",
    percentage: "8.3%",
    icon: Grid2X2,
    iconBg: "bg-green-500",
  },
  {
    title: "Attributes",
    value: "342",
    percentage: "15.7%",
    icon: Tags,
    iconBg: "bg-orange-500",
  },
  {
    title: "Total Orders",
    value: "2,584",
    percentage: "18.6%",
    icon: ShoppingCart,
    iconBg: "bg-blue-500",
  },
  {
    title: "Total Revenue",
    value: "$48,256",
    percentage: "21.4%",
    icon: DollarSign,
    iconBg: "bg-pink-500",
  },
];

const StatsSection = () => {
  return (
    <div className="grid grid-cols-5 gap-5">
      {stats.map((item) => (
        <StateCard
          key={item.title}
          {...item}
        />
      ))}
    </div>
  );
};

export default StatsSection;