import type { CSSProperties, ReactElement, ReactNode } from "react";
import styles from "./grid.module.css";

type GridProps = {
  rows: number;
  columns: number;
  children: ReactElement<CrossProps>[];
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

type CrossProps = {
  row: number;
  column: number;
  children: ReactNode;
};

function Cross({ row, column, children }: CrossProps) {
  return (
    <div
      className={`${styles.gridCross}`}
      style={{ gridRow: row, gridColumn: column }}
    >
      {children}
    </div>
  );
}

Grid.Cross = Cross;
