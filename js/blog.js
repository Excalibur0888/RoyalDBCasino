// Blog Page JavaScript

// Story Card Hover Effect
const storyCards = document.querySelectorAll('.story-card');
if (storyCards.length > 0) {
  storyCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      // Enhance the shadow
      card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
      card.style.transition = 'all 0.3s ease';
      
      // Move the "Read More" icon a bit further
      const icon = card.querySelector('.story-card-link i');
      if (icon) {
        icon.style.transform = 'translateX(5px)';
        icon.style.transition = 'transform 0.3s ease';
      }
    });
    
    card.addEventListener('mouseleave', () => {
      // Reset shadow
      card.style.boxShadow = 'none';
      
      // Reset icon position
      const icon = card.querySelector('.story-card-link i');
      if (icon) {
        icon.style.transform = 'translateX(0)';
      }
    });
  });
}

// Blog Post Hover Effect
const blogPosts = document.querySelectorAll('.blog-post');
if (blogPosts.length > 0) {
  blogPosts.forEach(post => {
    post.addEventListener('mouseenter', () => {
      // Enhance the shadow
      post.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
      post.style.transition = 'all 0.3s ease';
      
      // Move the "Read More" icon a bit further
      const icon = post.querySelector('.blog-link i');
      if (icon) {
        icon.style.transform = 'translateX(5px)';
        icon.style.transition = 'transform 0.3s ease';
      }
      
      // Slightly zoom the image
      const image = post.querySelector('.blog-image img');
      if (image) {
        image.style.transform = 'scale(1.05)';
        image.style.transition = 'transform 0.3s ease';
      }
    });
    
    post.addEventListener('mouseleave', () => {
      // Reset shadow
      post.style.boxShadow = 'none';
      
      // Reset icon position
      const icon = post.querySelector('.blog-link i');
      if (icon) {
        icon.style.transform = 'translateX(0)';
      }
      
      // Reset image scale
      const image = post.querySelector('.blog-image img');
      if (image) {
        image.style.transform = 'scale(1)';
      }
    });
  });
}

// Featured Story Parallax Effect
const featuredStory = document.querySelector('.featured-story');
const storyImage = document.querySelector('.story-image img');

if (featuredStory && storyImage) {
  featuredStory.addEventListener('mousemove', (e) => {
    // Calculate mouse position in percentage
    const xPos = (e.clientX / featuredStory.offsetWidth) - 0.5;
    const yPos = (e.clientY / featuredStory.offsetHeight) - 0.5;
    
    // Apply subtle parallax to the image
    storyImage.style.transform = `translate(${xPos * 10}px, ${yPos * 10}px)`;
    storyImage.style.transition = 'transform 0.1s ease-out';
  });
  
  featuredStory.addEventListener('mouseleave', () => {
    // Reset image position
    storyImage.style.transform = 'translate(0, 0)';
    storyImage.style.transition = 'transform 0.3s ease';
  });
}

// Share Story Button Animation
const shareButtons = document.querySelectorAll('.btn-share');
if (shareButtons.length > 0) {
  shareButtons.forEach(button => {
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

// Blog Post Categories Filtering
const blogCategories = document.querySelectorAll('.blog-category');
if (blogCategories.length > 0) {
  blogCategories.forEach(category => {
    category.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Get the category text
      const categoryText = category.textContent.trim();
      
      // Show a toast notification
      showToast(`Filtering by "${categoryText}" category`);
    });
  });
}

// Toast Notification Function
function showToast(message) {
  // Create toast element
  const toast = document.createElement('div');
  toast.className = 'toast-notification';
  toast.innerHTML = `
    <div class="toast-content">
      <i class="fas fa-filter"></i>
      <p>${message}</p>
      <button class="toast-close"><i class="fas fa-times"></i></button>
    </div>
  `;
  
  // Add to the document
  document.body.appendChild(toast);
  
  // Add fade-in animation
  setTimeout(() => {
    toast.classList.add('active');
  }, 10);
  
  // Add close button functionality
  const closeButton = toast.querySelector('.toast-close');
  closeButton.addEventListener('click', () => {
    toast.classList.remove('active');
    
    // Remove from DOM after animation completes
    setTimeout(() => {
      toast.remove();
    }, 300);
  });
  
  // Auto-close after 3 seconds
  setTimeout(() => {
    if (document.body.contains(toast)) {
      toast.classList.remove('active');
      
      // Remove from DOM after animation completes
      setTimeout(() => {
        toast.remove();
      }, 300);
    }
  }, 3000);
}

// Add CSS for toast notification
const style = document.createElement('style');
style.textContent = `
  .toast-notification {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 9999;
    max-width: 300px;
    opacity: 0;
    transform: translateY(-20px);
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
  
  .toast-notification.active {
    opacity: 1;
    transform: translateY(0);
  }
  
  .toast-content {
    background-color: var(--color-bg-secondary);
    border-left: 4px solid var(--color-accent-blue);
    padding: 15px;
    border-radius: var(--radius-md);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: flex-start;
  }
  
  .toast-content i {
    color: var(--color-accent-blue);
    font-size: 18px;
    margin-right: 10px;
    margin-top: 2px;
  }
  
  .toast-content p {
    flex-grow: 1;
    margin: 0;
    font-size: 14px;
    line-height: 1.4;
  }
  
  .toast-close {
    background: none;
    border: none;
    color: var(--color-text-tertiary);
    cursor: pointer;
    padding: 0;
    font-size: 16px;
    margin-left: 10px;
  }
  
  .toast-close:hover {
    color: var(--color-text-primary);
  }
  
  /* Mobile Adjustments */
  @media (max-width: 768px) {
    .toast-notification {
      left: 20px;
      right: 20px;
      max-width: none;
    }
  }
  
  /* Blog category styling */
  .blog-category {
    cursor: pointer;
    position: relative;
  }
  
  .blog-category:after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 1px;
    background-color: var(--color-accent-gold);
    transition: width 0.3s ease;
  }
  
  .blog-category:hover:after {
    width: 100%;
  }
`;

document.head.appendChild(style);

// Add fade-in animation for page sections on scroll
if ('IntersectionObserver' in window) {
  const sections = document.querySelectorAll('.success-stories, .share-story, .blog-posts');
  
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
  const fadeStyle = document.createElement('style');
  fadeStyle.textContent = `
    .fade-in {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;
  document.head.appendChild(fadeStyle);
}