"use client";
import { CornerBottomRightIcon, Cross2Icon } from "@radix-ui/react-icons";
import { motion, useDragControls } from "motion/react";
import { useState } from "react";

type CardProps = {
  children?: React.ReactNode;
  height: number;
  width: number;
  className?: string;
  title: string;
};
export function Card({ children, width, height, className, title }: CardProps) {
  const [isDragging, setIsDragging] = useState(false);
  const dragControls = useDragControls();
  const startDrag = (event: React.PointerEvent) => {
    dragControls.start(event);
  };
  return (
    <motion.div
      className={`${"w-fit rounded-6 bg-gray-3/90 p-1 shadow-[var(--shadow-border),var(--shadow-large)] backdrop-blur-[20px]"} ${className}`}
      drag
      dragControls={dragControls}
      dragListener={false}
      dragMomentum={false}
      initial={"default"}
      onDragEnd={() => setIsDragging(false)}
      onDragStart={() => setIsDragging(true)}
      style={{ zIndex: isDragging ? 10 : 0 }}
      transition={{ ease: "easeOut" }}
      variants={{
        hovered: {},
        default: {},
      }}
      whileHover={"hovered"}
    >
      <div
        className="absolute top-0 right-0 left-0 z-10 inline-block cursor-grab p-6"
        onPointerDown={startDrag}
      />
      <div
        className="absolute right-0 bottom-0 left-0 z-10 inline-block cursor-grab p-6"
        onPointerDown={startDrag}
      />
      <div
        className="absolute top-0 right-0 bottom-0 z-10 inline-block cursor-grab p-6"
        onPointerDown={startDrag}
      />
      <div
        className="absolute top-0 bottom-0 left-0 z-10 inline-block cursor-grab p-6"
        onPointerDown={startDrag}
      />
      <motion.div
        className="flex items-center justify-between"
        variants={{
          hovered: { opacity: 1, height: 20 },
          default: { opacity: 0, height: 0 },
        }}
      >
        <motion.h3 className="text-12">{title}</motion.h3>
        <motion.button
          type="button"
          variants={{
            hovered: { scale: 1 },
            default: { scale: 0 },
          }}
        >
          <Cross2Icon />
        </motion.button>
      </motion.div>
      <div
        className="relative flex touch-none select-none flex-col overflow-clip rounded-4 bg-(--canvas) p-1 will-change-[width,height]"
        style={{ width, height }}
      >
        {children}
      </div>
      <motion.button
        className="absolute right-0 bottom-0"
        type="button"
        variants={{
          hovered: { opacity: 1, scale: 1 },
          default: { opacity: 0, scale: 0 },
        }}
      >
        <CornerBottomRightIcon />
      </motion.button>
    </motion.div>
  );
}
