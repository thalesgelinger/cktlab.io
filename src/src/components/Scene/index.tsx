import { Component, createEffect } from 'solid-js';
import { PerspectiveCamera, Scene as TScene, WebGLRenderer, Object3D } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

type CameraType = () => PerspectiveCamera;
type ElementTypes = (() => Object3D)[]

type SceneType = {
    children:  [CameraType, ElementTypes[ElementTypes["length"]]] 
}

export const Scene: Component<SceneType> = ({ children }) => {
    const [camera, ...elements] = children.map(child => child());
    const scene = new TScene();
    const renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.update();

    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    }

    createEffect(() => {
        elements.forEach(appendChildren);
        animate()
    })

    const appendChildren = (child: Object3D) => {
        console.log({ child })
        scene.add(child)
    }

    return renderer.domElement
}
