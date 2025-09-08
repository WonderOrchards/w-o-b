import { settings } from './settings-panel.js';

// Three.js code
let scene, camera, renderer;
let particleCount = 1200;
let orbitRadius = 60;
let geo = null, mat = null, points = null;

// Camera pan offset (we'll adjust the camera position for panning)
const cameraPan = {x:0, y:0};

let lastScrollY = window.scrollY; 
let targetAngle = 0; 
let currentAngle = 0;
const autoRotSpeed = 0.0006;

export function createPoints(count){
  if(points){
    scene.remove(points);
    geo.dispose && geo.dispose();
    mat.dispose && mat.dispose();
  }

  particleCount = Math.max(10, Math.floor(count));
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  for(let i=0;i<particleCount;i++){
    const i3 = i*3;
    const r = 10 + Math.random()*200;
    const theta = Math.random()*Math.PI*2;
    const phi = Math.acos(2*Math.random()-1);
    positions[i3+0] = r*Math.sin(phi)*Math.cos(theta);
    positions[i3+1] = r*Math.sin(phi)*Math.sin(theta);
    positions[i3+2] = r*Math.cos(phi);

    colors[i3+0] = 0.5 + Math.random()*0.5;
    colors[i3+1] = 0.5 + Math.random()*0.5;
    colors[i3+2] = 0.6 + Math.random()*0.4;
  }

  geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions,3));
  geo.setAttribute('color', new THREE.BufferAttribute(colors,3));

  mat = new THREE.PointsMaterial({size:parseFloat(document.getElementById('particleSize').value)||1.8,vertexColors:true,transparent:true,opacity:0.95,depthWrite:false});

  points = new THREE.Points(geo, mat);
  // Keep the particle cloud at the origin
  points.position.set(0, 0, 0);

  scene.add(points);
}

export function applyColorPreset(preset){ 
  if(!geo) return; 
  const arr = geo.attributes.color.array; 
  for(let i=0;i<particleCount;i++){ 
    const i3 = i*3; 
    if(preset === 'warm'){ 
      arr[i3+0] = 0.7 + Math.random()*0.3; 
      arr[i3+1] = 0.35 + Math.random()*0.4; 
      arr[i3+2] = 0.1 + Math.random()*0.25; 
    } else if(preset === 'cool'){ 
      arr[i3+0] = 0.2 + Math.random()*0.35; 
      arr[i3+1] = 0.5 + Math.random()*0.45; 
      arr[i3+2] = 0.7 + Math.random()*0.3; 
    } else if(preset === 'mono'){ 
      const v = 0.55 + Math.random()*0.45; 
      arr[i3+0] = v; 
      arr[i3+1] = v; 
      arr[i3+2] = v; 
    } else { 
      arr[i3+0] = 0.5 + Math.random()*0.5; 
      arr[i3+1] = 0.5 + Math.random()*0.5; 
      arr[i3+2] = 0.6 + Math.random()*0.4; 
    } 
  } 
  geo.attributes.color.needsUpdate = true; 
}

function hexToRgbNorm(hex){ 
  const parsed = hex.replace('#',''); 
  const bigint = parseInt(parsed,16); 
  const r = ((bigint >> 16) & 255)/255; 
  const g = ((bigint >> 8) & 255)/255; 
  const b = (bigint & 255)/255; 
  return [r,g,b]; 
}

export function applyCustomColor(hex){ 
  if(!geo) return; 
  const [r,g,b] = hexToRgbNorm(hex); 
  const arr = geo.attributes.color.array; 
  for(let i=0;i<particleCount;i++){ 
    const i3 = i*3; 
    arr[i3+0] = Math.min(1, r * (0.9 + Math.random()*0.2)); 
    arr[i3+1] = Math.min(1, g * (0.9 + Math.random()*0.2)); 
    arr[i3+2] = Math.min(1, b * (0.9 + Math.random()*0.2)); 
  } 
  geo.attributes.color.needsUpdate = true; 
}

export function getCameraPan(){ 
  return {x:cameraPan.x, y:cameraPan.y}; 
}

export function setCameraPan(x, y){ 
  cameraPan.x = x||0; 
  cameraPan.y = y||0; 
}

function onScroll(){ 
  const y = window.scrollY; 
  const dy = y - lastScrollY; 
  lastScrollY = y; 
  targetAngle += dy * settings.speed * 0.0025; 
}

function animate(){ 
  requestAnimationFrame(animate); 
  if(points) points.rotation.y += autoRotSpeed; 
  currentAngle += (targetAngle - currentAngle) * 0.08;

  // Calculate the orbit position
  const orbitX = orbitRadius * Math.sin(currentAngle);
  const orbitZ = orbitRadius * Math.cos(currentAngle);
  
  // Position camera with pan offset
  if (settings.orientation === 'horizontal') {
    // Horizontal orbit (around Y axis)
    camera.position.x = orbitX + cameraPan.x;
    camera.position.y = (Math.sin(currentAngle*0.3) * 8) + cameraPan.y;
    camera.position.z = orbitZ;
  } else {
    // Vertical orbit (around X axis)
    camera.position.x = (Math.sin(currentAngle*0.3) * 8) + cameraPan.x;
    camera.position.y = orbitX + cameraPan.y;
    camera.position.z = orbitZ;
  }

  // Always look at the center of the particle cloud (with pan offset)
  camera.lookAt(cameraPan.x, cameraPan.y, 0);

  renderer.render(scene, camera);
}

export function initThreeJSApp() {
  const canvas = document.getElementById('bg');
  renderer = new THREE.WebGLRenderer({canvas, antialias:true, alpha:true});
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight, false);

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(50, window.innerWidth/window.innerHeight, 0.1, 2000);

  createPoints(particleCount);

  const light = new THREE.DirectionalLight(0xffffff,0.4);
  light.position.set(1,1,1);
  scene.add(light);

  window.addEventListener('resize', ()=>{ 
    renderer.setSize(window.innerWidth, window.innerHeight, false); 
    camera.aspect = window.innerWidth / window.innerHeight; 
    camera.updateProjectionMatrix(); 
  });

  window.addEventListener('scroll', onScroll, {passive:true});

  animate();

  // Expose functions to global scope for settings panel
  window.__three_demo = {createPoints, applyColorPreset, applyCustomColor, getCameraPan, setCameraPan};
}