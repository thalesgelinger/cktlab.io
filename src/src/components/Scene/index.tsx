import { Component, createEffect } from 'solid-js';
import { PerspectiveCamera, Scene as TScene, WebGLRenderer } from 'three';

type SceneType = {
    children: any;
}

export const Scene: Component<SceneType> = ({ children }) => {
    const renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    const camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
    camera.position.set(0, 0, 100);
    camera.lookAt(0, 0, 0);

    const scene = new TScene();

    createEffect(() => {
        Array.isArray(children) ?
            children.forEach(child => {
                scene.add(child())
            }) : scene.add(children())
        renderer.render(scene, camera);
    })
    return <div>{renderer.domElement}</div>
}
