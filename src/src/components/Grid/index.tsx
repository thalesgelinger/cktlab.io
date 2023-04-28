import { Component } from "solid-js";
import { GridHelper } from "three";

type GridProps = {
    size?: number;
    divisions?: number;
    colorCenterLine?: number;
    colorGridLine?: number;
}

export const Grid: Component<GridProps> = ({ size, divisions, colorGridLine, colorCenterLine }) => {
    return new GridHelper(size, divisions, colorCenterLine, colorGridLine) as unknown as Element
}
