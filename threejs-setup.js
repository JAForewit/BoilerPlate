//**********************************
// init THREE.js functions
//**********************************

//renderer
let renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
});
renderer.setSize(window.innerWidth, window.innerHeight);

//scenes
let canvas = renderer.domElement,
    scene = new THREE.Scene();

//camera
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 5);
camera.lookAt(0,0,0);

//raycaster
let raycaster = new THREE.Raycaster(),
    clipMouse = new THREE.Vector2(1, -1),
    mouse = { x: 1, y: -1 };
function checkIntersection(object) { 
    // object is optional
    //tranlate to clipspace
    clipMouse.x = (mouse.x / window.innerWidth) * 2 - 1;
    clipMouse.y = -(mouse.y / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(clipMouse, camera);

    var intersects = (object != undefined)
        ? [raycaster.intersectObject(object, false)]
        : raycaster.intersectObjects([scene], true);

    // returns 1 intersection or FALSE
    return (intersects.length > 0) ? intersects[0] : false;
}

//window resize
window.addEventListener('resize', onWindowResize, false);
function onWindowResize() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
}

//render loop
function animate() {
    requestAnimationFrame(animate);

    /////////////////
    // Custom
    /////////////////

    //orbital controls
    controls.update();
    renderer.render(scene, camera);
}
animate();