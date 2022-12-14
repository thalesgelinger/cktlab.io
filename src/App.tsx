import type { Component } from 'solid-js';
import { Line, Scene } from './src/components';
import './global.css'

const App: Component = () => {
    return <Scene>
        <Line
            color={0xfff000}
            points={[
                [-10, 0],
                [0, 10],
                [10, 0],
                [10, 10],
                [50, 50],
            ]}
        />
    </Scene>
};

export default App;
