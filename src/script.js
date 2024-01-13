import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })

// const mesh = new THREE.Mesh(geometry, material)

// posicionamiento

// mesh.position.x = 1
// mesh.position.y = -1
// mesh.position.z = 1

// mesh.position.set(0.7, -0.5, 1)

// escala

// mesh.scale.x = 2
// mesh.scale.y = 2
// mesh.scale.z = 2

// mesh.scale.set(2, 0.5, 0.5)

// rotacion

// mesh.rotation.reorder('yxZ')
// mesh.rotation.y = Math.PI / 4
// mesh.rotation.x = Math.PI / 4
// mesh.rotation.z = 0

// quaternion

// mesh.quaternion.x = 1
// mesh.quaternion.y = 0.5

// scene.add(mesh)

// console.log(mesh.position.length())
// console.log(mesh.position.distanceTo(camera.position))

// mesh.position.normalize()

/* //////////////////777 */
// Crear un grupo de objetos

// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// const material2 = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
// const material3 = new THREE.MeshBasicMaterial({ color: 0x0000ff })

// const cubeA = new THREE.Mesh(geometry, material)
// const cubeB = new THREE.Mesh(geometry, material2)
// const cubeC = new THREE.Mesh(geometry, material3)

const cubeA = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
)

const cubeB = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
)

const cubeC = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x0000ff })
)

cubeA.position.x = 1.2
cubeC.position.x = -1.2

const group = new THREE.Group()
group.add(cubeA)
group.add(cubeB)
group.add(cubeC)

// group.position.y = -1
// group.position.y = -1
group.rotation.y = Math.PI * 0.1
// group.scale.y = 1.5

scene.add(group)

/* //////////////////777 */

// Axes helper, ejes de coordenadas de ayuda
const axesHelper = new THREE.AxesHelper(2)
scene.add(axesHelper)

/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600,
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)

camera.position.z = 3
// camera.position.x = 1
// camera.position.y = 1

// para que la camara mire al objeto (cubo en este caso)
// camera.lookAt(new THREE.Vector3(1, 1, 1))
// camera.lookAt(mesh.position)

scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
})

renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)
