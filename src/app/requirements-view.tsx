import React, { useMemo } from "react";
import { Day, GeneratedMenu, primaryGroups } from "@/utils";
import { getOrderFromType } from "./helpers";
import styles from "./page.module.css";

interface RequirementsViewProps {
  day: Day;
  dayMenu?: GeneratedMenu;
}

export const RequirementsView = ({
  // day,
  dayMenu,
}: RequirementsViewProps) => {
  const requirements = useMemo(
    () =>
      primaryGroups
        .map((group) => {
          const items = dayMenu?.[group] ?? [];
          return items.flatMap((item) => item.requirements ?? []);
        })
        .concat(
          dayMenu?.ensaladas?.flatMap(
            (ensalada) => ensalada.requirements ?? []
          ) ?? []
        )
        .concat(
          dayMenu?.frescos?.flatMap((fresco) => fresco.requirements ?? []) ?? []
        )
        .flat(),
    [dayMenu]
  );

  const uniqueRequirements = useMemo(
    () =>
      requirements
        .reduce((acc, req) => {
          const existing = acc.find((r) => r.name === req.name);
          if (existing) {
            existing.minQuantity =
              (existing.minQuantity ?? 0) + (req.minQuantity ?? 0);
            existing.maxQuantity =
              (existing.maxQuantity ?? 0) + (req.maxQuantity ?? 0);
            if (existing.comment && req.comment) {
              existing.comment = `${existing.comment}, ${req.comment}`;
            } else if (req.comment) {
              existing.comment = req.comment;
            }
          } else {
            acc.push(req);
          }
          return acc;
        }, [] as typeof requirements)
        .sort(
          (a, b) =>
            getOrderFromType(a.type) - getOrderFromType(b.type) ||
            // Sort by minQuantity
            (b.minQuantity ?? 0) - (a.minQuantity ?? 0) ||
            // Sort by name if minQuantity is equal
            a.name.localeCompare(b.name)
        ),
    [requirements]
  );

  return (
    <ul>
      {uniqueRequirements?.map((req) => (
        <li key={req.name}>
          <p>
            {req.name}
            {!!req.minQuantity && (
              <span className={styles.quantity}>
                {" "}
                ({req.minQuantity}
                {!!req.maxQuantity ? ` - ${req.maxQuantity}` : ""}
                {!!req.symbol ? ` ${req.symbol}` : ""})
              </span>
            )}
          </p>

          {!!req.comment && <p className={styles.comment}>{req.comment}</p>}
        </li>
      ))}
    </ul>
  );
};

export default RequirementsView;
