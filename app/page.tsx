import { Grid  } from "./ui/grid";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="">
        <Grid rows={4} columns={4}>
          {/*<Grid.Cell row="auto" column={1}>
            What
          </Grid.Cell>
          <Grid.Cell row="auto" column={4}>
            will
          </Grid.Cell>*/}
          <Grid.Cell row={2} column={3}>
            you
          </Grid.Cell>
          <Grid.Cell row={3} column={4}>
            ship
          </Grid.Cell>
          {/*<Grid.Cell row={4} column="auto">
            ?
          </Grid.Cell>*/}
        </Grid>
      </main>
    </div>
  );
}
