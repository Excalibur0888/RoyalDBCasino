// Forum Page JavaScript

// Comparison Table Row Highlight
const comparisonRows = document.querySelectorAll('.comparison-table tr');
if (comparisonRows.length > 0) {
  comparisonRows.forEach(row => {
    row.addEventListener('mouseenter', () => {
      row.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
      row.style.transition = 'background-color 0.2s ease';
    });
    
    row.addEventListener('mouseleave', () => {
      row.style.backgroundColor = '';
    });
  });
}

// Advantage Card Hover Effects
const advantageCards = document.querySelectorAll('.advantage-card');
if (advantageCards.length > 0) {
  advantageCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      // Scale up the icon
      const icon = card.querySelector('.advantage-icon i');
      if (icon) {
        icon.style.transform = 'scale(1.2)';
        icon.style.transition = 'transform 0.3s ease';
      }
      
      // Add shadow
      card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
      card.style.transition = 'all 0.3s ease';
    });
    
    card.addEventListener('mouseleave', () => {
      // Reset icon
      const icon = card.querySelector('.advantage-icon i');
      if (icon) {
        icon.style.transform = 'scale(1)';
      }
      
      // Reset shadow
      card.style.boxShadow = 'none';
    });
  });
}

// Trust Section Animation
const trustItems = document.querySelectorAll('.trust-item');
if (trustItems.length > 0) {
  trustItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      // Highlight the icon
      const icon = item.querySelector('.trust-icon i');
      if (icon) {
        icon.style.transform = 'rotate(10deg)';
        icon.style.transition = 'transform 0.3s ease';
      }
      
      // Highlight the text
      const text = item.querySelector('.trust-text');
      if (text) {
        text.style.color = 'var(--color-text-primary)';
        text.style.transition = 'color 0.3s ease';
      }
    });
    
    item.addEventListener('mouseleave', () => {
      // Reset icon
      const icon = item.querySelector('.trust-icon i');
      if (icon) {
        icon.style.transform = 'rotate(0)';
      }
      
      // Reset text
      const text = item.querySelector('.trust-text');
      if (text) {
        text.style.color = '';
      }
    });
  });
}

// Comment Card Hover Effects
const commentCards = document.querySelectorAll('.comment-card');
if (commentCards.length > 0) {
  commentCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      // Add shadow and transform
      card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
      card.style.transition = 'all 0.3s ease';
      
      // Make stars twinkle
      const stars = card.querySelectorAll('.comment-rating i');
      if (stars.length > 0) {
        stars.forEach((star, index) => {
          setTimeout(() => {
            star.style.color = '#FFF';
            star.style.transition = 'color 0.3s ease';
            
            setTimeout(() => {
              star.style.color = 'var(--color-accent-gold)';
            }, 300);
          }, index * 100);
        });
      }
    });
    
    card.addEventListener('mouseleave', () => {
      // Reset shadow
      card.style.boxShadow = 'none';
      
      // Reset stars
      const stars = card.querySelectorAll('.comment-rating i');
      if (stars.length > 0) {
        stars.forEach(star => {
          star.style.color = 'var(--color-accent-gold)';
        });
      }
    });
  });
}

// Benefit Item Animation
const benefitItems = document.querySelectorAll('.benefit-item');
if (benefitItems.length > 0) {
  benefitItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      // Scale up the icon
      const icon = item.querySelector('.benefit-icon');
      if (icon) {
        icon.style.transform = 'scale(1.1)';
        icon.style.transition = 'transform 0.3s ease';
      }
      
      // Highlight the text
      const text = item.querySelector('.benefit-text');
      if (text) {
        text.style.color = 'var(--color-text-primary)';
        text.style.fontWeight = '600';
        text.style.transition = 'all 0.3s ease';
      }
    });
    
    item.addEventListener('mouseleave', () => {
      // Reset icon
      const icon = item.querySelector('.benefit-icon');
      if (icon) {
        icon.style.transform = 'scale(1)';
      }
      
      // Reset text
      const text = item.querySelector('.benefit-text');
      if (text) {
        text.style.color = '';
        text.style.fontWeight = '';
      }
    });
  });
}

// CTA Buttons Hover Effect
const ctaButtons = document.querySelectorAll('.forum-cta .btn-cta');
if (ctaButtons.length > 0) {
  ctaButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'translateY(-5px)';
      button.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.3)';
      button.style.transition = 'all 0.3s ease';
    });
    
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'translateY(-2px)';
      button.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
    });
  });
}

// Add fade-in animation for page sections on scroll
if ('IntersectionObserver' in window) {
  const sections = document.querySelectorAll('.comparison-section, .why-royalbd, .exclusive-benefits, .trust-section, .user-comments');
  
  const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    sectionObserver.observe(section);
  });
  
  // Add CSS for the fade-in effect
  const style = document.createElement('style');
  style.textContent = `
    .fade-in {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;
  document.head.appendChild(style);
}

// Enhance comment rating visibility with hover
const commentRatings = document.querySelectorAll('.comment-rating');
if (commentRatings.length > 0) {
  const ratingStyle = document.createElement('style');
  ratingStyle.textContent = `
    .comment-rating i {
      transition: transform 0.2s ease;
    }
    .comment-rating:hover i {
      transform: scale(1.2);
      color: #FFF !important;
    }
  `;
  document.head.appendChild(ratingStyle);
}

// Add interactivity to comparison table header
const comparisonTableHeader = document.querySelector('.comparison-table thead');
if (comparisonTableHeader) {
  const headerCells = comparisonTableHeader.querySelectorAll('th');
  
  headerCells.forEach(cell => {
    if (cell.classList.contains('highlight')) {
      // Add a pulsing animation to highlight the RoyalBD column
      const pulse = document.createElement('style');
      pulse.textContent = `
        @keyframes highlight-pulse {
          0% { background-color: rgba(255, 215, 0, 0.1); }
          50% { background-color: rgba(255, 215, 0, 0.2); }
          100% { background-color: rgba(255, 215, 0, 0.1); }
        }
        
        .comparison-table th.highlight {
          animation: highlight-pulse 2s infinite;
        }
      `;
      document.head.appendChild(pulse);
    }
  });
}