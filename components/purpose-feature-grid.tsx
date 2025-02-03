import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconChartAreaLineFilled,
  IconHeart,
  IconProgressDown,
  IconNews,
  IconInfinity,
} from "@tabler/icons-react";

export default function PurposeFeatureGrid() {
  const features = [
    {
      title: "Learn",
      description:
        "The primary objective is to provide a problem-domain for continuous, deep learning.",
      icon: <IconInfinity />,
    },
    {
      title: "Trade",
      description:
        "Langhavens is building a comprehensive system to build, manage, and run algorithmic trading strategies.",
      icon: <IconChartAreaLineFilled />,
    },
    {
      title: "Real Stakes",
      description:
        "While the emphasis of the project is placed on learning opportunities, the algorithmic trading system will be used to place real trades.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Cloud",
      description: "Anything affordable is being deployed to AWS. This deepens learning for cloud concepts.",
      icon: <IconCloud />,
    },
    {
      title: "Document & Retrospect",
      description: "Lessons learned and milestones achieved are published on the Langhavens blog.",
      icon: <IconNews />,
    },
    {
      title: "Get low-level",
      description:
        "Many of the tools in this project already exist, but we're re-inventing the wheel just for the educational benefit.",
      icon: <IconProgressDown />,
    },
    {
      title: "Enterprise-level SDLC",
      description:
        "The projects in Langhavens use professional-grade development lifecycle tools for CI/CD, project management, and programming.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Have fun",
      description: "We have a deep interest in this problem domain and are having a blast exploring solutions.",
      icon: <IconHeart />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-white-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
