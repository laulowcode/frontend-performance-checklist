// This module can have imports; modulepreload fetches the graph eagerly.
export function run() {
  console.log('[demo-module.js] Module executed. Module graph should have been preloaded.');
  const el = document.createElement('div');
  el.textContent = 'demo-module.js executed!';
  el.style.marginTop = '8px';
  document.querySelector('.container').appendChild(el);
}

// If executed as a top-level module script
if (typeof window !== 'undefined') {
  // No-op until user requests it in the demo page
}

