import { initNavigation } from './navigation.js';
import { initThreeJSApp } from './threejs-app.js';
import { initSettingsPanel } from './settings-panel.js';

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initThreeJSApp();
  initSettingsPanel();
});