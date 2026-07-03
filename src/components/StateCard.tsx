import type { LucideIcon } from "lucide-react";

interface StateCardProps {
  title: string;
  value: string;
  percentage: string;
  icon: LucideIcon;
  iconBg: string;
}

export const StateCard = ({
  title,
  value,
  percentage,
  icon: Icon,
  iconBg,
}: StateCardProps) => {
  return (
    <>
      <div className="rounded-xl bg-white p-5 shadow-sm border border-slate-200">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">{title}</p>
            <h2 className="mt-2 text-3xl font-bold">{value}</h2>

            <p className="mt-3 text-sm text-green-500">↑ {percentage}</p>

            <p className="text-xs text-gray-400">vs last 7 days</p>
          </div>
          <div
            className={`h-12 w-12 rounded-xl ${iconBg} flex items-center justify-center`}
          >
            <Icon className="text-white" size={20} />
          </div>
        </div>
      </div>
    </>
  );
};
