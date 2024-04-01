import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Carshow from "./components/Carshow";

function App() {
  return (
    <Suspense fallback={null}>
      <Canvas shadows>
        <Carshow />
      </Canvas>
    </Suspense>
  );
}

export default App;
