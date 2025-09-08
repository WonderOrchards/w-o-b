import { createPoints, applyColorPreset, applyCustomColor, getCameraPan, setCameraPan } from './threejs-app.js';

// Settings object
export const settings = {speed:1.0, orientation:'horizontal', lightMode:false};

// UI elements
let speedInput, speedVal, orientationInput, lightModeCheckbox;
let particleSizeInput, sizeVal, colorPreset, colorPicker, customColorRow;
let particleCountInput, countVal, cameraZoomInput, zoomVal;
let cameraPanXInput, panXVal, cameraPanYInput, panYVal;
let contentBgColorInput, textColorInput, linkColorInput, linkHoverColorInput;
let h1ColorInput, h2ColorInput, h3ColorInput, resetContentStylesBtn;

// Initialize settings panel
export function initSettingsPanel() {
  // Load panel content
  loadPanelContent();
  
  // Get UI elements
  getUIElements();
  
  // Set up event listeners
  setupEventListeners();
  
  // Set initial UI values
  setInitialValues();
}

// Load panel content from external file or create it
function loadPanelContent() {
  const panel = document.getElementById('panel');
  
  // For simplicity, we'll create the panel content here
  // In a more advanced implementation, you might load this from an HTML file
  panel.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
      <strong>Dev Settings</strong>
      <button id="closePanel" style="border:none;background:transparent;cursor:pointer;font-size:16px;color:var(--text-color)">✕</button>
    </div>

    <div class="row">
      <label for="speed">Orbit rotation speed (per scroll)</label>
      <div class="small" id="speedVal">1.0</div>
    </div>
    <input id="speed" type="range" min="0" max="5" step="0.05" value="1">

    <div class="row" style="margin-top:8px">
      <label for="orientation">Orbit orientation</label>
      <select id="orientation">
        <option value="horizontal">Horizontal (Y axis)</option>
        <option value="vertical">Vertical (X axis)</option>
      </select>
    </div>

    <hr>

    <div class="row">
      <label for="lightMode">Light mode</label>
      <div class="control-inline"><input id="lightMode" type="checkbox"><span class="small">Toggle</span></div>
    </div>

    <div class="row">
      <label for="particleSize">Particle size</label>
      <div class="small" id="sizeVal">1.8</div>
    </div>
    <input id="particleSize" type="range" min="0.2" max="6" step="0.1" value="1.8">

    <div class="row" style="margin-top:8px">
      <label for="colorPreset">Particle colors</label>
      <select id="colorPreset">
        <option value="soft">Soft (default)</option>
        <option value="warm">Warm</option>
        <option value="cool">Cool</option>
        <option value="mono">Monochrome</option>
        <option value="custom">Custom</option>
      </select>
    </div>

    <div class="row" id="customColorRow" style="margin-top:6px">
      <label for="colorPicker">Custom color</label>
      <input id="colorPicker" type="color" value="#93d6ff">
    </div>

    <hr>

    <div class="row">
      <label for="particleCount">Particle count</label>
      <div class="small" id="countVal">1200</div>
    </div>
    <input id="particleCount" type="range" min="200" max="6000" step="50" value="1200">

    <div class="row" style="margin-top:8px">
      <label for="cameraZoom">Camera zoom (distance)</label>
      <div class="small" id="zoomVal">60</div>
    </div>
    <input id="cameraZoom" type="range" min="20" max="220" step="1" value="60">

    <div class="row" style="margin-top:8px">
      <label for="cameraPanX">Camera pan X (left / right)</label>
      <div class="small" id="panXVal">0</div>
    </div>
    <input id="cameraPanX" type="range" min="-200" max="200" step="1" value="0">

    <div class="row" style="margin-top:8px">
      <label for="cameraPanY">Camera pan Y (up / down)</label>
      <div class="small" id="panYVal">0</div>
    </div>
    <input id="cameraPanY" type="range" min="-200" max="200" step="1" value="0">

    <div class="row small" style="margin-top:10px">
      <div>Tip:</div>
      <div>Pan the camera to view the particle field from different angles.</div>
    </div>
    
    <hr>
    
    <div class="panel-section-title">Content Styles</div>
    
    <div class="row">
      <label for="contentBgColor">Content background</label>
      <div class="color-input"><input id="contentBgColor" type="color" value="#0f1218"></div>
    </div>
    
    <div class="row">
      <label for="textColor">Text color</label>
      <div class="color-input"><input id="textColor" type="color" value="#e6eef8"></div>
    </div>
    
    <div class="row">
      <label for="linkColor">Link color</label>
      <div class="color-input"><input id="linkColor" type="color" value="#93d6ff"></div>
    </div>
    
    <div class="row">
      <label for="linkHoverColor">Link hover color</label>
      <div class="color-input"><input id="linkHoverColor" type="color" value="#c2e4ff"></div>
    </div>
    
    <div class="row">
      <label for="h1Color">H1 heading color</label>
      <div class="color-input"><input id="h1Color" type="color" value="#ffffff"></div>
    </div>
    
    <div class="row">
      <label for="h2Color">H2 heading color</label>
      <div class="color-input"><input id="h2Color" type="color" value="#e6eef8"></div>
    </div>
    
    <div class="row">
      <label for="h3Color">H3 heading color</label>
      <div class="color-input"><input id="h3Color" type="color" value="#d0d8e2"></div>
    </div>
    
    <div class="row" style="margin-top:10px">
      <button id="resetContentStyles" style="padding:6px 12px;border-radius:4px;border:1px solid rgba(255,255,255,0.1);background:rgba(255,255,255,0.05);color:var(--text-color);cursor:pointer">Reset Content Styles</button>
    </div>
  `;
}

// Get references to UI elements
function getUIElements() {
  speedInput = document.getElementById('speed'); 
  speedVal = document.getElementById('speedVal'); 
  orientationInput = document.getElementById('orientation');
  lightModeCheckbox = document.getElementById('lightMode');
  particleSizeInput = document.getElementById('particleSize'); 
  sizeVal = document.getElementById('sizeVal');
  colorPreset = document.getElementById('colorPreset'); 
  colorPicker = document.getElementById('colorPicker'); 
  customColorRow = document.getElementById('customColorRow');
  particleCountInput = document.getElementById('particleCount'); 
  countVal = document.getElementById('countVal');
  cameraZoomInput = document.getElementById('cameraZoom'); 
  zoomVal = document.getElementById('zoomVal');
  cameraPanXInput = document.getElementById('cameraPanX'); 
  panXVal = document.getElementById('panXVal');
  cameraPanYInput = document.getElementById('cameraPanY'); 
  panYVal = document.getElementById('panYVal');
  
  // New content style controls
  contentBgColorInput = document.getElementById('contentBgColor');
  textColorInput = document.getElementById('textColor');
  linkColorInput = document.getElementById('linkColor');
  linkHoverColorInput = document.getElementById('linkHoverColor');
  h1ColorInput = document.getElementById('h1Color');
  h2ColorInput = document.getElementById('h2Color');
  h3ColorInput = document.getElementById('h3Color');
  resetContentStylesBtn = document.getElementById('resetContentStyles');
}

// Set up event listeners
function setupEventListeners() {
  const cogBtn = document.getElementById('cogBtn'); 
  const panel = document.getElementById('panel'); 
  const closePanel = document.getElementById('closePanel');

  // Update labels to reflect pan functionality
  document.querySelector('label[for="cameraPanX"]').textContent = "Camera pan X (left / right)";
  document.querySelector('label[for="cameraPanY"]').textContent = "Camera pan Y (up / down)";
  document.querySelector('.row.small div:last-child').textContent = "Pan the camera to view the particle field from different angles.";

  // handlers
  speedInput.addEventListener('input', (e)=>{ settings.speed = parseFloat(e.target.value); speedVal.textContent = settings.speed.toFixed(2); });
  orientationInput.addEventListener('change', (e)=>{ settings.orientation = e.target.value; });

  particleSizeInput.addEventListener('input', (e)=>{ const v = parseFloat(e.target.value); if(window.__three_demo && window.__three_demo.mat) window.__three_demo.mat.size = v; sizeVal.textContent = v.toFixed(1); });
  lightModeCheckbox.addEventListener('change', (e)=>{ 
    settings.lightMode = e.target.checked; 
    document.documentElement.classList.toggle('light', settings.lightMode); 
    updateColorInputsForTheme();
  });

  colorPreset.addEventListener('change', (e)=>{ 
    const val = e.target.value; 
    if(val === 'custom'){ 
      customColorRow.classList.remove('hidden'); 
      applyCustomColor(colorPicker.value); 
    } else { 
      customColorRow.classList.add('hidden'); 
      applyColorPreset(val); 
    } 
  });
  colorPicker.addEventListener('input', (e)=>{ if(colorPreset.value === 'custom') applyCustomColor(e.target.value); });

  particleCountInput.addEventListener('input', (e)=>{ 
    const val = parseInt(e.target.value); 
    countVal.textContent = val; 
    createPoints(val); 
    if(window.__three_demo && window.__three_demo.mat) {
      window.__three_demo.mat.size = parseFloat(particleSizeInput.value) || window.__three_demo.mat.size;
    }
  });

  cameraZoomInput.addEventListener('input', (e)=>{ 
    orbitRadius = parseFloat(e.target.value); 
    zoomVal.textContent = orbitRadius; 
  });

  // Update camera pan handlers
  cameraPanXInput.addEventListener('input', (e)=>{ 
    cameraPan.x = parseFloat(e.target.value); 
    panXVal.textContent = cameraPan.x; 
    setCameraPan(cameraPan.x, cameraPan.y);
  });
  
  cameraPanYInput.addEventListener('input', (e)=>{ 
    cameraPan.y = parseFloat(e.target.value); 
    panYVal.textContent = cameraPan.y; 
    setCameraPan(cameraPan.x, cameraPan.y);
  });
  
  // New content style handlers
  contentBgColorInput.addEventListener('input', (e) => {
    document.documentElement.style.setProperty('--content-bg', e.target.value);
  });
  
  textColorInput.addEventListener('input', (e) => {
    document.documentElement.style.setProperty('--text-color', e.target.value);
  });
  
  linkColorInput.addEventListener('input', (e) => {
    document.documentElement.style.setProperty('--link-color', e.target.value);
  });
  
  linkHoverColorInput.addEventListener('input', (e) => {
    document.documentElement.style.setProperty('--link-hover-color', e.target.value);
  });
  
  h1ColorInput.addEventListener('input', (e) => {
    document.documentElement.style.setProperty('--h1-color', e.target.value);
  });
  
  h2ColorInput.addEventListener('input', (e) => {
    document.documentElement.style.setProperty('--h2-color', e.target.value);
  });
  
  h3ColorInput.addEventListener('input', (e) => {
    document.documentElement.style.setProperty('--h3-color', e.target.value);
  });
  
  resetContentStylesBtn.addEventListener('click', () => {
    // Reset to default values based on current theme
    if (document.documentElement.classList.contains('light')) {
      document.documentElement.style.setProperty('--content-bg', 'linear-gradient(180deg, rgba(255,255,255,0.6), rgba(255,255,255,0.4))');
      document.documentElement.style.setProperty('--text-color', '#111');
      document.documentElement.style.setProperty('--link-color', '#0066cc');
      document.documentElement.style.setProperty('--link-hover-color', '#004499');
      document.documentElement.style.setProperty('--h1-color', '#000000');
      document.documentElement.style.setProperty('--h2-color', '#111111');
      document.documentElement.style.setProperty('--h3-color', '#222222');
      
      // Update input values
      contentBgColorInput.value = '#ffffff';
      textColorInput.value = '#111111';
      linkColorInput.value = '#0066cc';
      linkHoverColorInput.value = '#004499';
      h1ColorInput.value = '#000000';
      h2ColorInput.value = '#111111';
      h3ColorInput.value = '#222222';
    } else {
      document.documentElement.style.setProperty('--content-bg', 'linear-gradient(180deg, rgba(15,18,24,0.6), rgba(10,12,16,0.4))');
      document.documentElement.style.setProperty('--text-color', '#e6eef8');
      document.documentElement.style.setProperty('--link-color', '#93d6ff');
      document.documentElement.style.setProperty('--link-hover-color', '#c2e4ff');
      document.documentElement.style.setProperty('--h1-color', '#ffffff');
      document.documentElement.style.setProperty('--h2-color', '#e6eef8');
      document.documentElement.style.setProperty('--h3-color', '#d0d8e2');
      
      // Update input values
      contentBgColorInput.value = '#0f1218';
      textColorInput.value = '#e6eef8';
      linkColorInput.value = '#93d6ff';
      linkHoverColorInput.value = '#c2e4ff';
      h1ColorInput.value = '#ffffff';
      h2ColorInput.value = '#e6eef8';
      h3ColorInput.value = '#d0d8e2';
    }
  });

  cogBtn.addEventListener('click', ()=>{ panel.classList.toggle('open'); });
  closePanel.addEventListener('click', ()=>{ panel.classList.remove('open'); });
}

// Set initial UI values
function setInitialValues() {
  speedVal.textContent = settings.speed.toFixed(2); 
  countVal.textContent = particleCount; 
  zoomVal.textContent = orbitRadius; 
  sizeVal.textContent = (1.8).toFixed(1); 
  
  const cameraPan = getCameraPan();
  panXVal.textContent = cameraPan.x; 
  panYVal.textContent = cameraPan.y; 
  
  customColorRow.classList.add('hidden');
  updateColorInputsForTheme();
}

// Update color inputs based on theme
function updateColorInputsForTheme() {
  if (document.documentElement.classList.contains('light')) {
    contentBgColorInput.value = '#ffffff';
    textColorInput.value = '#111111';
    linkColorInput.value = '#0066cc';
    linkHoverColorInput.value = '#004499';
    h1ColorInput.value = '#000000';
    h2ColorInput.value = '#111111';
    h3ColorInput.value = '#222222';
  } else {
    contentBgColorInput.value = '#0f1218';
    textColorInput.value = '#e6eef8';
    linkColorInput.value = '#93d6ff';
    linkHoverColorInput.value = '#c2e4ff';
    h1ColorInput.value = '#ffffff';
    h2ColorInput.value = '#e6eef8';
    h3ColorInput.value = '#d0d8e2';
  }
}