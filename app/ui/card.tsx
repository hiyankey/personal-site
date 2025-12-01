import { Cross2Icon } from "@radix-ui/react-icons";

type CardProps = {
  children?: React.ReactNode;
  height: number;
  width: number;
  className?: string;
  handleClick?: () => void;
};
export function Card({
  children,
  width,
  height,
  className,
  handleClick,
}: CardProps) {
  return (
    <div
      className={`${"relative rounded-6 bg-gray-3/90 p-1 pt-6 shadow-border backdrop-blur-[20px]"} ${className}`}
      style={{ height, width }}
    >
      <button
        className="absolute top-1 right-1"
        onClick={handleClick}
        type="button"
      >
        <Cross2Icon />
      </button>
      <div className="relative  flex h-full w-full flex-col overflow-clip rounded-4 bg-gray-2 p-1">
        {children}
      </div>
    </div>
  );
}
