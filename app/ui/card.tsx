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
      className={`${"relative rounded-6 bg-gray-3/90 p-1 shadow-[var(--shadow-border),var(--shadow-large)] backdrop-blur-[20px]"} ${className}`}
      drag
      dragControls={dragControls}
      dragListener={false}
      dragMomentum={false}
      initial={"default"}
      onDragEnd={() => setIsDragging(false)}
      onDragStart={() => setIsDragging(true)}
      style={{ height, width, zIndex: isDragging ? 10 : 0 }}
      transition={{ ease: "easeOut" }}
      variants={{
        hovered: { paddingTop: 24 },
        default: { paddingTop: 4 },
      }}
      whileHover={"hovered"}
    >
      <div
        className="absolute top-0 right-0 left-0 inline-block cursor-grab p-6"
        onPointerDown={startDrag}
      />
      <motion.h3
        className="absolute top-1 left-1 text-12"
        variants={{
          hovered: { opacity: 1, scale: 1 },
          default: { opacity: 0, scale: 0.9 },
        }}
      >
        {title}
      </motion.h3>
      <motion.button
        className="absolute top-1 right-1"
        type="button"
        variants={{
          hovered: { opacity: 1, scale: 1 },
          default: { opacity: 0, scale: 0 },
        }}
      >
        <Cross2Icon />
      </motion.button>
      <div className="relative flex h-full w-full touch-none select-none flex-col overflow-clip rounded-4 bg-(--canvas) p-1">
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
