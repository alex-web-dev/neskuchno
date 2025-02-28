export type TBadgeColor = "top";

export interface IBadgeProps {
  color?: TBadgeColor;
}

export const defaultProps = {
  color: "green" as TBadgeColor,
};
