"use client";
import { Half1Icon, Half2Icon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import useTheme from "./hooks/useTheme";
import { Card } from "./ui/card";
import { Container } from "./ui/container";
import { ElasticSlider } from "./ui/elastic-slider";
import { Grid } from "./ui/grid";
import { Tooltip } from "./ui/primitives/tooltip";

export default function Home() {
  const { dark, toggleDark } = useTheme();

  return (
    <div className="flex min-h-dvh flex-col">
      <Tooltip content="&#8997; + T">
        <button className="mx-auto mt-8" onClick={toggleDark} type="button">
          {dark ? <Half1Icon /> : <Half2Icon />}
        </button>
      </Tooltip>

      <Container className="mb-16 space-y-4 pt-24 leading-7">
        <p>
          My name is Emmanuel, I’m an Interactive designer for Web/Products,
          Crafting details, Things for screens
        </p>
        <p>Focused on honing my craft</p>

        <p>When not coding, I do endurance things</p>
      </Container>
      <Container className="mb-24 w-full leading-7">
        <h3 className="mb-4 font-mono text-14 text-gray-11">Timeline</h3>
        <ul className="group flex flex-col space-y-1">
          <li className="relative flex h-14 w-full items-center space-x-3 transition-[padding] duration-300 hover:pl-3">
            <span className="font-mono text-14 text-gray-11">2025</span>
            <div className="gridLine relative! inline-flex w-full" />
            <Link className="inline-flex text-nowrap" href={"#"}>
              Devouring Details
              <span className="absolute inset-0 isolate z-10" />
            </Link>
          </li>
          <li className="relative flex h-14 w-full items-center space-x-3 transition-[padding] duration-300 hover:pl-3">
            <span className="font-mono text-14 text-gray-11">2025</span>
            <div className="gridLine relative! inline-flex w-full" />
            <Link className="inline-flex text-nowrap" href={"#"}>
              Animations on the Web <span className="absolute inset-0" />
            </Link>
          </li>
        </ul>
      </Container>
      <div className="bleed">
        <div className="translate-center-x relative h-120 w-full max-w-240">
          <div className="absolute inset-0 overflow-clip">
            <Card
              className="absolute top-5 left-64"
              height={185.27}
              title="Test Image 1"
              width={322}
            >
              <Image
                alt="test image"
                className="h-full w-full object-cover"
                fill
                src={"/test-image-2.jpg"}
              />
            </Card>
            <Card
              className="absolute top-1/2 left-[60%]"
              height={188}
              title="Elastic Slider"
              width={260}
            >
              <ElasticSlider />
            </Card>
            <Card
              className="absolute top-55 left-[6%]"
              height={242}
              title="Test Image 2"
              width={422}
            >
              <Image
                alt="test image"
                className="h-full w-full object-cover"
                fill
                src={"/test-image-1.jpg"}
              />
            </Card>
          </div>
          <div className="-z-10 absolute inset-0 h-full w-full">
            <Grid columns={48} rows={24}>
              <Grid.Cross column={1} row={1} />
              <Grid.Cross column={-1} row={1} />
              <Grid.Cross column={1} row={-1} />
              <Grid.Cross column={-1} row={-1} />
            </Grid>
          </div>
        </div>
      </div>

      <div className="mx-auto my-8 font-mono text-14 text-gray-11">
        20251201_121913.976_UTC
      </div>
    </div>
  );
}
