import type { Component } from 'solid-js';
import { Camera, Line, Scene } from './src/components';
import './global.css'
import { Grid } from './src/components/Grid';

const App: Component = () => {

    const gridSize = window.innerWidth
    const divisionSize = gridSize * 0.4;

    const line = [
        { x: 0, y: 0 },
        { x: 10, y: 10 },
        { x: 20, y: 10 },
    ]

    const linePoints = line.map(({ x, y }) => [x, y])

    return <Scene>
        <Camera />
        <Grid
            size={gridSize}
            divisions={divisionSize}
        />
        <Line
            color={0xfff000}
            points={linePoints}
        />
    </Scene>
};

export default App;
