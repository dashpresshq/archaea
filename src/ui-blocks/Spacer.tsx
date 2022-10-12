import React from "react";
import { DESIGN_SYSTEM_SIZES } from "./sizes";

type SpacerSize = "xxs" | "xs" | "sm" | "md" | "xl" | "xxl";

interface IProps {
  size?: SpacerSize;
}

const MARGIN_CONFIG: Record<SpacerSize, number> = {
  xxs: DESIGN_SYSTEM_SIZES.margin / 16,
  xs: DESIGN_SYSTEM_SIZES.margin / 8,
  sm: DESIGN_SYSTEM_SIZES.margin / 2,
  xl: DESIGN_SYSTEM_SIZES.margin * 1.5,
  xxl: DESIGN_SYSTEM_SIZES.margin * 2,
  md: DESIGN_SYSTEM_SIZES.margin,
};

export function Spacer({ size = "md" }: IProps) {
  return <div style={{ margin: MARGIN_CONFIG[size] }} />;
}

export function HSpacer({ size = "md" }: IProps) {
  return (
    <div
      style={{
        marginLeft: MARGIN_CONFIG[size],
        marginRight: MARGIN_CONFIG[size],
      }}
    />
  );
}
