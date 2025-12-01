"use client";
import { Cross2Icon, Half1Icon, Half2Icon } from "@radix-ui/react-icons";
import useTheme from "./hooks/useTheme";
import { Grid } from "./ui/grid";
import { Tooltip } from "./ui/primitives/tooltip";

export default function Home() {
  const { dark, toggleDark } = useTheme();
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center">
      <Tooltip content="&#8997; + T">
        <button className="mt-8" onClick={toggleDark} type="button">
          {dark ? <Half1Icon /> : <Half2Icon />}
        </button>
      </Tooltip>

      <div className="max-w-150 py-24 leading-7">
        <p>
          My name is Emmanuel, Interactive designer for Web/Products, Crafting
          details, Things for screens
        </p>
        <p>When not coding, I do endurance things</p>
      </div>
      <div className="mx-auto mt-auto h-120 max-w-240">
        <Grid columns={48} rows={24}>
          <Grid.Cross column={1} row={1}>
            <Cross2Icon className="-translate-y-1/2 -translate-x-1/2 size-5 rotate-45" />
          </Grid.Cross>
          <Grid.Cross column={-2} row={1}>
            <Cross2Icon className="-translate-y-1/2 size-5 translate-x-1/2 rotate-45" />
          </Grid.Cross>
          <Grid.Cross column={1} row={-2}>
            <Cross2Icon className="-translate-x-1/2 size-5 translate-y-1/2 rotate-45" />
          </Grid.Cross>
          <Grid.Cross column={-2} row={-2}>
            <Cross2Icon className="size-5 translate-x-1/2 translate-y-1/2 rotate-45" />
          </Grid.Cross>
        </Grid>
      </div>
      <div className="my-8 font-mono text-14 text-gray-11">
        20251201_121913.976_UTC
      </div>
    </div>
  );
}
