import type { CSSProperties, ReactElement, ReactNode } from "react";
import styles from "./grid.module.css";

type GridProps = {
  rows: number;
  columns: number;
  children: ReactElement<CrossProps | CellProps>[];
};

export function Grid({ rows, columns, children }: GridProps) {
  return (
    <div
      className={`${styles.grid}`}
      style={{ "--rows": rows, "--columns": columns } as CSSProperties}
    >
      <div className={`${styles.gridGuides}`}>
        {Array.from({ length: rows * columns }, (_, index) => {
          // Calculate the x and y position of the cell
          const x = (index % columns) + 1;
          const y = Math.floor(index / columns) + 1;
          return (
            <div
              className={`${styles.gridGuide}`}
              key={index}
              style={{ "--x": x, "--y": y } as CSSProperties}
            />
          );
        })}
      </div>
      {/* Cells will render here */}
      {children}
    </div>
  );
}
type CellProps = {
  row: number;
  column: number;
  children: ReactNode;
};

function Cell({ row, column, children }: CellProps) {
  return (
    <div
      className={`${styles.gridCell}`}
      style={{ gridRow: row, gridColumn: column }}
    >
      {children}
    </div>
  );
}
Grid.Cell = Cell;

type CrossProps = {
  row: number;
  column: number;
};

function Cross({ row, column }: CrossProps) {
  return (
    <div
      className={styles.cross}
      style={
        {
          "--cross-row": row,
          "--cross-column": column,
        } as CSSProperties
      }
    >
      <div
        className={styles.crossLine}
        style={{
          width: "var(--cross-half-size)",
          height: "var(--cross-size)",
          borderRightWidth: "var(--guide-width)",
        }}
      />
      <div
        className={styles.crossLine}
        style={{
          width: "var(--cross-size)",
          height: "var(--cross-half-size)",
          borderBottomWidth: "var(--guide-width)",
        }}
      />
    </div>
  );
}

Grid.Cross = Cross;
