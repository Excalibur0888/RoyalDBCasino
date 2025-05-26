// Promotions Page JavaScript

// Offer Card Animation
const offerCard = document.querySelector('.offer-card');
if (offerCard) {
  offerCard.addEventListener('mouseenter', () => {
    // Add subtle glow
    offerCard.style.boxShadow = '0 0 30px rgba(255, 215, 0, 0.1)';
    offerCard.style.transition = 'all 0.3s ease';
    
    // Scale badge
    const badge = offerCard.querySelector('.offer-badge');
    if (badge) {
      badge.style.transform = 'scale(1.05)';
      badge.style.transition = 'transform 0.3s ease';
    }
  });
  
  offerCard.addEventListener('mouseleave', () => {
    // Reset glow
    offerCard.style.boxShadow = 'none';
    
    // Reset badge
    const badge = offerCard.querySelector('.offer-badge');
    if (badge) {
      badge.style.transform = 'scale(1)';
    }
  });
}

// Deal Card Hover Effects
const dealCards = document.querySelectorAll('.deal-card');
if (dealCards.length > 0) {
  dealCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      // Add shadow
      card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
      card.style.transition = 'all 0.3s ease';
      
      // Highlight title
      const title = card.querySelector('.deal-title');
      if (title) {
        title.style.color = 'var(--color-text-primary)';
        title.style.transition = 'color 0.3s ease';
      }
      
      // Change button style
      const button = card.querySelector('.btn-deal');
      if (button) {
        button.style.backgroundColor = 'var(--color-accent-gold)';
        button.style.color = 'var(--color-bg-primary)';
        button.style.transition = 'all 0.3s ease';
      }
    });
    
    card.addEventListener('mouseleave', () => {
      // Reset shadow
      card.style.boxShadow = 'none';
      
      // Reset title
      const title = card.querySelector('.deal-title');
      if (title) {
        title.style.color = 'var(--color-accent-gold)';
      }
      
      // Reset button
      const button = card.querySelector('.btn-deal');
      if (button) {
        button.style.backgroundColor = 'transparent';
        button.style.color = 'var(--color-accent-gold)';
      }
    });
  });
}

// VIP Level Hover Effects
const vipLevels = document.querySelectorAll('.vip-level');
if (vipLevels.length > 0) {
  vipLevels.forEach(level => {
    level.addEventListener('mouseenter', () => {
      // Add shadow
      level.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
      level.style.transition = 'all 0.3s ease';
      
      // Scale up icon
      const icon = level.querySelector('.level-icon i');
      if (icon) {
        icon.style.transform = 'scale(1.2)';
        icon.style.transition = 'transform 0.3s ease';
      }
      
      // Add subtle background
      level.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
    });
    
    level.addEventListener('mouseleave', () => {
      // Reset shadow
      level.style.boxShadow = 'none';
      
      // Reset icon
      const icon = level.querySelector('.level-icon i');
      if (icon) {
        icon.style.transform = 'scale(1)';
      }
      
      // Reset background
      level.style.backgroundColor = 'rgba(30, 30, 30, 0.7)';
    });
  });
}

// Seasonal Card Hover Effects
const seasonalCards = document.querySelectorAll('.seasonal-card');
if (seasonalCards.length > 0) {
  seasonalCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      // Add shadow
      card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
      card.style.transition = 'all 0.3s ease';
      
      // Scale image
      const image = card.querySelector('.seasonal-image img');
      if (image) {
        image.style.transform = 'scale(1.05)';
        image.style.transition = 'transform 0.3s ease';
      }
      
      // Change link color for active card
      const link = card.querySelector('.seasonal-link');
      if (link && card.classList.contains('active')) {
        link.style.fontWeight = '700';
        link.style.transition = 'all 0.3s ease';
      }
    });
    
    card.addEventListener('mouseleave', () => {
      // Reset shadow
      card.style.boxShadow = 'none';
      
      // Reset image
      const image = card.querySelector('.seasonal-image img');
      if (image) {
        image.style.transform = 'scale(1)';
      }
      
      // Reset link
      const link = card.querySelector('.seasonal-link');
      if (link) {
        link.style.fontWeight = '';
      }
    });
  });
}

// Tournament Card Progress Bar Animation
const tournamentCards = document.querySelectorAll('.tournament-card');
if (tournamentCards.length > 0) {
  tournamentCards.forEach(card => {
    // Get the progress fill element
    const progressFill = card.querySelector('.progress-fill');
    
    // Original width
    const originalWidth = progressFill.style.width;
    
    card.addEventListener('mouseenter', () => {
      // Add shadow
      card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
      card.style.transition = 'all 0.3s ease';
      
      // Animate progress bar
      progressFill.style.transition = 'width 0.5s ease';
      
      // Get current width
      const currentWidth = parseInt(originalWidth);
      if (currentWidth < 100) {
        // Increment by 5% to show progress animation
        progressFill.style.width = (currentWidth + 5) + '%';
        
        // Then revert back
        setTimeout(() => {
          progressFill.style.width = originalWidth;
        }, 500);
      }
    });
    
    card.addEventListener('mouseleave', () => {
      // Reset shadow
      card.style.boxShadow = 'none';
    });
  });
}

// Bonus Terms Toggle
const termsContainer = document.querySelector('.terms-container');
if (termsContainer) {
  // Create a toggle for the terms
  const termsToggle = document.createElement('button');
  termsToggle.className = 'terms-toggle';
  termsToggle.innerHTML = 'View Full Terms <i class="fas fa-chevron-down"></i>';
  termsToggle.style.backgroundColor = 'transparent';
  termsToggle.style.border = 'none';
  termsToggle.style.color = 'var(--color-accent-gold)';
  termsToggle.style.fontWeight = '600';
  termsToggle.style.cursor = 'pointer';
  termsToggle.style.padding = '0';
  termsToggle.style.marginTop = '16px';
  termsToggle.style.display = 'flex';
  termsToggle.style.alignItems = 'center';
  termsToggle.style.margin = '0 auto';
  
  const termsList = termsContainer.querySelector('.terms-list');
  
  // Hide the terms list initially
  termsList.style.display = 'none';
  
  // Add the toggle after the terms title
  const termsTitle = termsContainer.querySelector('.terms-title');
  termsTitle.insertAdjacentElement('afterend', termsToggle);
  
  // Add toggle functionality
  termsToggle.addEventListener('click', () => {
    const isVisible = termsList.style.display !== 'none';
    
    if (isVisible) {
      termsList.style.display = 'none';
      termsToggle.innerHTML = 'View Full Terms <i class="fas fa-chevron-down"></i>';
    } else {
      termsList.style.display = 'block';
      termsToggle.innerHTML = 'Hide Full Terms <i class="fas fa-chevron-up"></i>';
    }
  });
}

// Add animation for the bonus code value
const codeValue = document.querySelector('.code-value');
if (codeValue) {
  codeValue.addEventListener('click', () => {
    // Copy to clipboard
    const code = codeValue.textContent;
    navigator.clipboard.writeText(code).then(() => {
      // Show copied notification
      const notification = document.createElement('div');
      notification.className = 'copy-notification';
      notification.textContent = 'Bonus code copied!';
      notification.style.position = 'absolute';
      notification.style.top = '-30px';
      notification.style.left = '50%';
      notification.style.transform = 'translateX(-50%)';
      notification.style.backgroundColor = 'var(--color-accent-green)';
      notification.style.color = 'black';
      notification.style.padding = '4px 10px';
      notification.style.borderRadius = '4px';
      notification.style.fontSize = '12px';
      notification.style.fontWeight = '700';
      notification.style.opacity = '0';
      notification.style.transition = 'opacity 0.3s ease';
      
      // Add to the code container
      const bonusCode = codeValue.parentElement;
      bonusCode.style.position = 'relative';
      bonusCode.appendChild(notification);
      
      // Show notification
      setTimeout(() => {
        notification.style.opacity = '1';
      }, 10);
      
      // Hide notification
      setTimeout(() => {
        notification.style.opacity = '0';
        
        setTimeout(() => {
          notification.remove();
        }, 300);
      }, 2000);
    });
    
    // Visual feedback
    codeValue.style.backgroundColor = 'rgba(255, 215, 0, 0.3)';
    setTimeout(() => {
      codeValue.style.backgroundColor = '';
    }, 300);
  });
  
  // Add cursor pointer and hover effect
  codeValue.style.cursor = 'pointer';
  codeValue.title = 'Click to copy';
  
  codeValue.addEventListener('mouseenter', () => {
    codeValue.style.backgroundColor = 'rgba(255, 215, 0, 0.2)';
    codeValue.style.transition = 'background-color 0.3s ease';
  });
  
  codeValue.addEventListener('mouseleave', () => {
    codeValue.style.backgroundColor = '';
  });
}

// Add fade-in animation for page sections on scroll
if ('IntersectionObserver' in window) {
  const sections = document.querySelectorAll('.welcome-offer, .ongoing-deals, .vip-program, .seasonal-promotions, .tournaments');
  
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

// VIP Button Animation
const vipButton = document.querySelector('.btn-vip');
if (vipButton) {
  vipButton.addEventListener('mouseenter', () => {
    vipButton.style.transform = 'translateY(-5px)';
    vipButton.style.boxShadow = '0 8px 15px rgba(255, 215, 0, 0.3)';
    vipButton.style.transition = 'all 0.3s ease';
  });
  
  vipButton.addEventListener('mouseleave', () => {
    vipButton.style.transform = 'translateY(-2px)';
    vipButton.style.boxShadow = '0 4px 12px rgba(255, 215, 0, 0.3)';
  });
}