// Games Page JavaScript

// Game Tab Switching
const gameTabs = document.querySelectorAll('.game-tab');
const gameSections = document.querySelectorAll('.games-section');

if (gameTabs.length > 0) {
  gameTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs
      gameTabs.forEach(t => t.classList.remove('active'));
      
      // Add active class to clicked tab
      tab.classList.add('active');
      
      // Get the tab category
      const category = tab.getAttribute('data-tab');
      
      // Filter games by category
      filterGamesByCategory(category);
    });
  });
}

function filterGamesByCategory(category) {
  const allGameCards = document.querySelectorAll('.game-card');
  
  allGameCards.forEach(card => {
    const cardCategory = card.getAttribute('data-category');
    
    if (category === 'all' || cardCategory === category) {
      // Show the card with animation
      card.style.display = 'block';
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 100);
    } else {
      // Hide the card with animation
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      
      setTimeout(() => {
        card.style.display = 'none';
      }, 300);
    }
  });
}

// Provider Badge Filtering
const providerBadges = document.querySelectorAll('.provider-badge');

if (providerBadges.length > 0) {
  providerBadges.forEach(badge => {
    badge.addEventListener('click', () => {
      // Remove active class from all badges
      providerBadges.forEach(b => b.classList.remove('active'));
      
      // Add active class to clicked badge
      badge.classList.add('active');
      
      // Get the provider name
      const provider = badge.getAttribute('data-provider');
      
      // Filter games by provider
      filterGamesByProvider(provider);
    });
  });
}

function filterGamesByProvider(provider) {
  const gameCards = document.querySelectorAll('.game-card');
  
  gameCards.forEach(card => {
    const cardProvider = card.getAttribute('data-provider');
    
    // If "all" is selected or the provider matches
    if (provider === 'all' || cardProvider === provider) {
      // Show the card with animation
      card.style.display = 'block';
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 100);
    } else {
      // Hide the card with animation
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      
      setTimeout(() => {
        card.style.display = 'none';
      }, 300);
    }
  });
}

// Add CSS for notification and game cards
const demoNotificationStyle = document.createElement('style');
demoNotificationStyle.textContent = `
  .demo-notification {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 9999;
    max-width: 300px;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
  
  .demo-notification.active {
    opacity: 1;
    transform: translateY(0);
  }
  
  .notification-content {
    background-color: var(--color-bg-secondary);
    border-left: 4px solid var(--color-accent-gold);
    padding: 15px;
    border-radius: var(--radius-md);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: flex-start;
  }
  
  .notification-content i {
    color: var(--color-accent-gold);
    font-size: 20px;
    margin-right: 10px;
    margin-top: 2px;
  }
  
  .notification-content p {
    flex-grow: 1;
    margin: 0;
    font-size: 14px;
    line-height: 1.4;
  }
  
  .notification-close {
    background: none;
    border: none;
    color: var(--color-text-tertiary);
    cursor: pointer;
    padding: 0;
    font-size: 16px;
    margin-left: 10px;
  }
  
  .notification-close:hover {
    color: var(--color-text-primary);
  }
  
  /* Game Cards Styles */
  .game-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .game-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
  
  .game-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--color-text-primary);
    margin: 1rem 0 0.5rem;
  }
  
  .game-provider {
    font-size: 0.875rem;
    color: var(--color-text-tertiary);
  }
  
  /* Game Tabs Styles */
  .game-tab {
    font-size: 1.125rem;
    font-weight: 600;
    padding: 0.75rem 1.5rem;
    border-radius: var(--radius-md);
    transition: all 0.3s ease;
  }
  
  .game-tab.active {
    background-color: var(--color-accent-gold);
    color: var(--color-bg-primary);
  }
  
  /* Provider Badges Styles */
  .provider-badge {
    padding: 0.5rem 1rem;
    border-radius: var(--radius-md);
    font-weight: 500;
    transition: all 0.3s ease;
  }
  
  .provider-badge.active {
    background-color: var(--color-accent-gold);
    color: var(--color-bg-primary);
  }
  
  /* Mobile Adjustments */
  @media (max-width: 768px) {
    .demo-notification {
      left: 20px;
      right: 20px;
      max-width: none;
    }
    
    .game-tab {
      font-size: 1rem;
      padding: 0.5rem 1rem;
    }
  }
`;

document.head.appendChild(demoNotificationStyle);

// Demo Button Functionality
const demoButtons = document.querySelectorAll('.btn-demo');

if (demoButtons.length > 0) {
  demoButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.stopPropagation();
      
      // Get the game title
      const gameCard = button.closest('.game-card');
      const gameTitle = gameCard.querySelector('.game-title')?.textContent;
      
      // Show a demo notification
      showDemoNotification(gameTitle);
    });
  });
}

function showDemoNotification(gameTitle) {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = 'demo-notification';
  notification.innerHTML = `
    <div class="notification-content">
      <i class="fas fa-gamepad"></i>
      <p>Demo mode for "${gameTitle}" is available after registration.</p>
      <button class="notification-close"><i class="fas fa-times"></i></button>
    </div>
  `;
  
  // Add to the document
  document.body.appendChild(notification);
  
  // Add fade-in animation
  setTimeout(() => {
    notification.classList.add('active');
  }, 10);
  
  // Add close button functionality
  const closeButton = notification.querySelector('.notification-close');
  closeButton.addEventListener('click', () => {
    notification.classList.remove('active');
    
    // Remove from DOM after animation completes
    setTimeout(() => {
      notification.remove();
    }, 300);
  });
  
  // Auto-close after 5 seconds
  setTimeout(() => {
    if (document.body.contains(notification)) {
      notification.classList.remove('active');
      
      // Remove from DOM after animation completes
      setTimeout(() => {
        notification.remove();
      }, 300);
    }
  }, 5000);
}