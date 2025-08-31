// Font Theme Selector for Reader/Philosopher/Engineer
document.addEventListener('DOMContentLoaded', function() {
  
  // Create font selector widget
  function createFontSelector() {
    const selector = document.createElement('div');
    selector.className = 'font-selector';
    selector.innerHTML = `
      <div class="font-selector-toggle">
        <span class="font-icon">Aa</span>
      </div>
      <div class="font-selector-menu">
        <h4>Reading Experience</h4>
        <button class="font-option" data-theme="default">
          <span class="font-name">Google Sans</span>
          <span class="font-desc">Clean & Modern</span>
        </button>
        <button class="font-option" data-theme="philosopher">
          <span class="font-name">Delius</span>
          <span class="font-desc">Handwritten Style</span>
        </button>
        <button class="font-option" data-theme="researcher">
          <span class="font-name">Zilla Slab</span>
          <span class="font-desc">Friendly Serif</span>
        </button>
        <button class="font-option" data-theme="engineer">
          <span class="font-name">Tangerine</span>
          <span class="font-desc">Elegant Script</span>
        </button>
      </div>
    `;
    
    document.body.appendChild(selector);
    
    // Toggle menu
    const toggle = selector.querySelector('.font-selector-toggle');
    const menu = selector.querySelector('.font-selector-menu');
    
    toggle.addEventListener('click', function() {
      menu.classList.toggle('visible');
    });
    
    // Font theme selection
    const options = selector.querySelectorAll('.font-option');
    options.forEach(option => {
      option.addEventListener('click', function() {
        const theme = this.dataset.theme;
        applyFontTheme(theme);
        menu.classList.remove('visible');
        
        // Save preference
        localStorage.setItem('fontTheme', theme);
        
        // Update active state
        options.forEach(opt => opt.classList.remove('active'));
        this.classList.add('active');
      });
    });
    
    // Load saved preference
    const savedTheme = localStorage.getItem('fontTheme') || 'default';
    applyFontTheme(savedTheme);
    
    // Set active option
    const activeOption = selector.querySelector(`[data-theme="${savedTheme}"]`);
    if (activeOption) activeOption.classList.add('active');
  }
  
  function applyFontTheme(theme) {
    // Remove existing theme classes
    document.body.classList.remove('font-theme-philosopher', 'font-theme-researcher', 'font-theme-engineer');
    
    // Apply new theme
    if (theme !== 'default') {
      document.body.classList.add(`font-theme-${theme}`);
    }
  }
  
  // Initialize on all pages
  createFontSelector();
});
