// React three drei imports
import { useGLTF } from "@react-three/drei";

// Bird scene import
import planeScene from "../assets/3d/plane.glb";

const Plane = () => {
	const { scene, animations } = useGLTF(planeScene);
	return (
		<mesh>
			<primitive object={scene} />
		</mesh>
	);
};

export default Plane;
