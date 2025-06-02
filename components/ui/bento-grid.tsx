import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  learnMoreHref,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  learnMoreHref?: string;
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white px-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className,
      )}
    >
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon}
<div
  className="mt-2 text-neutral-600 dark:text-neutral-200 text-xl font-semibold mb-2 line-clamp-2"
  style={{ height: '56px' }} // This ensures all titles are the same height
>
  {title}
</div>        <div className="text-xs font-normal text-neutral-600 dark:text-neutral-300 text-muted-foreground mb-4 h-12">
          {description}
        </div>
        {learnMoreHref && (
          <a
            href={learnMoreHref}
            className="mt-auto text-sm font-medium text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More &rarr;
          </a>
        )}
      </div>
    </div>
  );
};
