import { Component, createMemo } from "solid-js";
import { BufferGeometry, LineBasicMaterial, Line as TLine, Vector2, LineBasicMaterialParameters } from "three";

type LineType = {
    points: number[][];
} & LineBasicMaterialParameters;

export const Line: Component<LineType> = ({ points, ...rest }) => {
    const material = new LineBasicMaterial(rest);
    const mappedPoints = points.map(point => new Vector2(point[0], point[1]));
    const geometry = new BufferGeometry().setFromPoints(mappedPoints);
    return new TLine(geometry, material) as unknown as Element;
}
