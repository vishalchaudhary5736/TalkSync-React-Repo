import { Package, Grid2X2, Tags, ShoppingCart } from "lucide-react";
import { CustomerCard } from "./CustomerCard";

const iconMap = {
  products: {
    icon: Package,
    iconBg: "bg-indigo-500",
  },
  categories: {
    icon: Grid2X2,
    iconBg: "bg-green-500",
  },
  attributes: {
    icon: Tags,
    iconBg: "bg-orange-500",
  },
  orders: {
    icon: ShoppingCart,
    iconBg: "bg-blue-500",
  },
};

interface CustomerStatsProps {
  title: string;
  value: string;
  type: "products" | "categories" | "attributes" | "orders";
}

interface Props {
  analytics: CustomerStatsProps[];
}
const CustomerStatsSection = ({ analytics }: Props) => {
  return (
    <div className="grid grid-cols-5 gap-5">
      {analytics.map((item) => {
        const config = iconMap[item.type];
        return (
          <CustomerCard
            key={item.type}
            title={item.title}
            value={item.value.toLocaleString()}
            icon={config.icon}
            iconBg={config.iconBg}
          />
        );
      })}
    </div>
  );
};

export default CustomerStatsSection;
