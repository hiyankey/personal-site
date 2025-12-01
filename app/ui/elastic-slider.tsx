"use client";
import { SpeakerLoudIcon, SpeakerQuietIcon } from "@radix-ui/react-icons";
import { Range, Root, Track } from "@radix-ui/react-slider";
import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "motion/react";
import { type ElementRef, useRef, useState } from "react";

function decay(value: number, max: number) {
  const entry = value / max;
  const sigmoid = 2 / (1 + Math.exp(-entry)) - 1;
  return sigmoid * max;
}
export function ElasticSlider() {
  const overflow = useMotionValue(0);
  const clientX = useMotionValue(0);
  const [origin, setOrigin] = useState<"left" | "middle" | "right">("middle");
  const ref = useRef<ElementRef<typeof Root>>(null);
  const scale = useMotionValue(1);
  useMotionValueEvent(clientX, "change", (latest) => {
    if (ref.current) {
      const bounds = ref.current.getBoundingClientRect();
      let newOverflow: number;
      if (latest < bounds.left) {
        setOrigin("left");
        newOverflow = bounds.left - latest;
      } else if (latest > bounds.right) {
        setOrigin("right");
        newOverflow = latest - bounds.right;
      } else {
        setOrigin("middle");
        newOverflow = 0;
      }
      overflow.jump(decay(newOverflow, 75));
    }
  });
  return (
    <div className="flex w-full h-full flex-col items-center justify-center">
      <motion.div
        className="flex items-center"
        onHoverEnd={() => animate(scale, 1)}
        onHoverStart={() => animate(scale, 1.2)}
        style={{ scale }}
      >
        <motion.div
          animate={{ scale: origin === "left" ? [1, 1.2, 1] : 1 }}
          style={{
            x: useTransform(() =>
              origin === "left" ? -overflow.get() / scale.get() : 0
            ),
          }}
          transition={{ duration: 0.3 }}
        >
          <SpeakerQuietIcon />
        </motion.div>
        <Root
          className="relative flex h-5 w-35 cursor-grab touch-none select-none items-center"
          defaultValue={[50]}
          max={100}
          onLostPointerCapture={() => {
            animate(overflow, 0, {
              type: "spring",
              stiffness: 200,
              damping: 12,
            });
          }}
          onPointerMove={(e) => {
            if (e.buttons > 0) {
              clientX.set(e.clientX);
            }
          }}
          ref={ref}
          step={1}
        >
          <motion.div
            className="mx-2 flex grow"
            style={{
              scaleX: useTransform(() => {
                if (ref.current) {
                  const bounds = ref.current.getBoundingClientRect();
                  return (bounds.width + overflow.get()) / bounds.width;
                }
              }),
              transformOrigin: origin === "left" ? "right" : "left",
              height: useTransform(scale, [1, 1.2], [4, 6]),
              marginTop: useTransform(scale, [1, 1.2], [0, -1]),
              marginBottom: useTransform(scale, [1, 1.2], [0, -1]),
              scaleY: useTransform(overflow, [0, 75], [1, 0.9]),
            }}
          >
            <Track className="relative h-full grow rounded-full bg-gray-3">
              <Range className="absolute h-full rounded-full bg-orange" />
            </Track>
          </motion.div>
          {/*<Thumb
            aria-label="Volume"
            className="block size-5 rounded-[10px] bg-white shadow-[0_2px_10px] shadow-blackA4 hover:bg-violet3 focus:shadow-[0_0_0_5px] focus:shadow-blackA5 focus:outline-none"
          />*/}
        </Root>
        <motion.div
          animate={{ scale: origin === "right" ? [1, 1.2, 1] : 1 }}
          style={{
            x: useTransform(() =>
              origin === "right" ? overflow.get() / scale.get() : 0
            ),
          }}
          transition={{ duration: 0.3 }}
        >
          <SpeakerLoudIcon />
        </motion.div>
      </motion.div>
    </div>
  );
}
