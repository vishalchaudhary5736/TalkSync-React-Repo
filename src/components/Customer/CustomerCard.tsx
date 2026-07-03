import type { LucideIcon } from "lucide-react";

interface StateCardProps {
  key:string;
  title: string;
  value: string;
  icon: LucideIcon;
  iconBg: string;
}

export const CustomerCard = ({
  key,
  title,
  value,
  icon: Icon,
  iconBg,
}: StateCardProps) => {
  return (
    <>
      <div className="rounded-xl bg-white p-5 shadow-sm border border-slate-200">
        <div className="flex justify-between items-center">
           <div
            className={`h-12 w-12 rounded-xl ${iconBg} flex items-center justify-center`}
          >
            <Icon className="text-white" size={20} />
          </div>
          <div>
            <p className="text-sm text-gray-500">{title}</p>
            <h2 className="mt-2 text-3xl font-bold">{value}</h2>
            <p className="mt-2 text-xs text-gray-400">vs last 7 days</p>
          </div>
         
        </div>
      </div>
    </>
  );
};
