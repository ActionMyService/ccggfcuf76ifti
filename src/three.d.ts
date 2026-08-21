import '@react-three/fiber';
import * as THREE from 'three';

declare module '@react-three/fiber' {
  interface ThreeElements {
    ambientLight: THREE.AmbientLight;
    directionalLight: THREE.DirectionalLight;
    pointLight: THREE.PointLight;
    spotLight: THREE.SpotLight;
    hemisphereLight: THREE.HemisphereLight;
    rectAreaLight: THREE.RectAreaLight;
    mesh: THREE.Mesh;
    group: THREE.Group;
    torusGeometry: THREE.TorusGeometry;
    sphereGeometry: THREE.SphereGeometry;
    boxGeometry: THREE.BoxGeometry;
    planeGeometry: THREE.PlaneGeometry;
    circleGeometry: THREE.CircleGeometry;
    cylinderGeometry: THREE.CylinderGeometry;
    coneGeometry: THREE.ConeGeometry;
    torusKnotGeometry: THREE.TorusKnotGeometry;
    ringGeometry: THREE.RingGeometry;
    shapeGeometry: THREE.ShapeGeometry;
    extrudeGeometry: THREE.ExtrudeGeometry;
    bufferGeometry: THREE.BufferGeometry;
    meshBasicMaterial: THREE.MeshBasicMaterial;
    meshStandardMaterial: THREE.MeshStandardMaterial;
    meshPhysicalMaterial: THREE.MeshPhysicalMaterial;
    meshPhongMaterial: THREE.MeshPhongMaterial;
    meshLambertMaterial: THREE.MeshLambertMaterial;
    meshToonMaterial: THREE.MeshToonMaterial;
    meshNormalMaterial: THREE.MeshNormalMaterial;
    meshDepthMaterial: THREE.MeshDepthMaterial;
    pointsMaterial: THREE.PointsMaterial;
    spriteMaterial: THREE.SpriteMaterial;
    shaderMaterial: THREE.ShaderMaterial;
    rawShaderMaterial: THREE.RawShaderMaterial;
    points: THREE.Points;
    line: THREE.Line;
    lineSegments: THREE.LineSegments;
    lineLoop: THREE.LineLoop;
    sprite: THREE.Sprite;
    fog: THREE.Fog;
    fogExp2: THREE.FogExp2;
    color: THREE.Color;
    bufferAttribute: THREE.BufferAttribute;
    instancedBufferAttribute: THREE.InstancedBufferAttribute;
  }
}
