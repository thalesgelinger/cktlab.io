import { PerspectiveCamera } from "three";

export const Camera = () => {
    const camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
    camera.position.set(0, 100, 0);
    camera.lookAt(0, 0, 0);
    return camera 
} 
