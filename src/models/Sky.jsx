// React three drei imports
import { useGLTF } from "@react-three/drei";

// Sky scene import
import skyScene from "../assets/3d/sky.glb";

const Sky = () => {
	// Get sky scene
	const sky = useGLTF(skyScene);

	return (
		<mesh>
			<primitive object={sky.scene} />
		</mesh>
	);
};

export default Sky;
