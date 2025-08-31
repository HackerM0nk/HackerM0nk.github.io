// Enhanced blog functionality
document.addEventListener('DOMContentLoaded', function() {
  
  // Reading Progress Bar
  function createProgressBar() {
    const progressContainer = document.createElement('div');
    progressContainer.className = 'reading-progress';
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    progressContainer.appendChild(progressBar);
    document.body.appendChild(progressContainer);
    
    window.addEventListener('scroll', function() {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      progressBar.style.width = scrolled + '%';
    });
  }
  
  // Copy to Clipboard for Code Blocks
  function addCopyButtons() {
    const codeBlocks = document.querySelectorAll('pre');
    
    codeBlocks.forEach(function(block) {
      const button = document.createElement('button');
      button.className = 'copy-button';
      button.textContent = 'Copy';
      
      button.addEventListener('click', function() {
        const code = block.querySelector('code');
        const text = code ? code.textContent : block.textContent;
        
        navigator.clipboard.writeText(text).then(function() {
          button.classList.add('copied');
          button.textContent = 'Copied';
          
          setTimeout(function() {
            button.classList.remove('copied');
            button.textContent = 'Copy';
          }, 2000);
        });
      });
      
      block.appendChild(button);
    });
  }
  
  // Back to Top Button
  function createBackToTop() {
    const button = document.createElement('button');
    button.className = 'back-to-top';
    button.innerHTML = '↑';
    button.title = 'Back to top';
    document.body.appendChild(button);
    
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        button.classList.add('visible');
      } else {
        button.classList.remove('visible');
      }
    });
    
    button.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // Active TOC highlighting
  function enhanceTOC() {
    const tocLinks = document.querySelectorAll('.toc a');
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    
    if (tocLinks.length === 0 || headings.length === 0) return;
    
    function updateActiveTOC() {
      let current = '';
      
      headings.forEach(function(heading) {
        const rect = heading.getBoundingClientRect();
        if (rect.top <= 100) {
          current = heading.id;
        }
      });
      
      tocLinks.forEach(function(link) {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
          link.classList.add('active');
        }
      });
    }
    
    window.addEventListener('scroll', updateActiveTOC);
    updateActiveTOC(); // Initial call
  }
  
  // Initialize all enhancements only on blog posts
  if (document.body.classList.contains('layout--single') && 
      !document.querySelector('.author__avatar')) {
    createProgressBar();
    addCopyButtons();
    createBackToTop();
    enhanceTOC();
  }
});
