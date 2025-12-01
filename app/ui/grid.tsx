import { CSSProperties, ReactElement, ReactNode } from "react";
import styles from "./grid.module.css"
interface GridProps {
  rows: number;
  columns: number;
  children: ReactElement<CellProps>[];
}

export function Grid({ rows, columns, children }: GridProps) {
  return (
    <div className={`${styles.grid}`} style={{ '--rows': rows, '--columns': columns } as CSSProperties}>
      <div className={`${styles.gridGuides}`}>
        {Array.from({ length: rows * columns }, (_, index) => {
          // Calculate the x and y position of the cell
          const x = (index % columns) + 1;
          const y = Math.floor(index / columns) + 1;
          return (
            <div
            key={index}
              className={`${styles.gridGuide}`}
              style={{ '--x': x, '--y': y }as CSSProperties}
            />
          );
        })}
      </div>
      {/* Cells will render here */}
      {children}
    </div>
  );
};




 interface CellProps {
   row: number;
   column: number;
   children: ReactNode;
 }

 function Cell({ row, column, children }: CellProps) {
   return (
     <div
       className={`${styles.gridCell}`}
       style={{ gridRow: row, gridColumn: column }}
     >
       {children}
     </div>
   );
 };

 Grid.Cell = Cell
