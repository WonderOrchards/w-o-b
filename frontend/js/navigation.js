import { markdownToHtml, renderFile } from './markdown-renderer.js';

// This will be populated dynamically from README links
let fileStructure = [];

// DOM elements
const navList = document.getElementById('navList');
const fileContent = document.getElementById('file-content');

// Extract links from README content
function extractLinksFromReadme(content) {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const links = [];
  let match;
  
  while ((match = linkRegex.exec(content)) !== null) {
    const name = match[1];
    const path = match[2];
    
    // Only include .md files and exclude external URLs
    if (path.endsWith('.md') && !path.startsWith('http')) {
      // Check if this is a relative path to a directory with a README
      let finalPath = path;
      if (!path.endsWith('.md') && path.endsWith('/')) {
        finalPath = path + 'README.md';
      }
      
      links.push({ name, path: finalPath });
    }
  }
  
  return links;
}

// Render navigation
function renderNavigation() {
  navList.innerHTML = '';
  fileStructure.forEach(file => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#';
    a.textContent = file.name;
    a.dataset.path = file.path;
    a.addEventListener('click', (e) => {
      e.preventDefault();
      // Remove active class from all links
      document.querySelectorAll('#navList a').forEach(link => {
        link.classList.remove('active');
      });
      // Add active class to clicked link
      a.classList.add('active');
      loadFile(file.path);
    });
    li.appendChild(a);
    navList.appendChild(li);
  });
}

// Load file function
export async function loadFile(filePath) {
  fileContent.innerHTML = '<div id="loading">Loading file...</div>';
  try {
    const response = await fetch(filePath);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    
    let content = await response.text();
    
    // Remove YAML frontmatter if present
    if (content.startsWith('---')) {
      const frontmatterEnd = content.indexOf('---', 3);
      if (frontmatterEnd !== -1) {
        content = content.substring(frontmatterEnd + 3).trim();
      }
    }
    
    renderFile(content, filePath, fileContent);
    
    // If this is the README, extract links and update navigation
    if (filePath === 'README.md') {
      const links = extractLinksFromReadme(content);
      fileStructure = [
        { name: "README", path: "README.md" },
        ...links
      ];
      renderNavigation();
      
      // Set active class to README link
      document.querySelectorAll('#navList a').forEach(link => {
        if (link.dataset.path === 'README.md') {
          link.classList.add('active');
        }
      });
    }
  } catch (error) {
    fileContent.innerHTML = `<div class="error">Error loading file: ${error.message}</div>`;
    console.error('Error loading file:', error);
  }
}

// Initialize navigation and load README
export function initNavigation() {
  // Start by loading the README
  loadFile('README.md');
}