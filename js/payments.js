// Payments Page JavaScript

// Payment Card Hover Effects
const paymentCards = document.querySelectorAll('.payment-card');
if (paymentCards.length > 0) {
  paymentCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      // Enhance shadow
      card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
      card.style.transition = 'all 0.3s ease';
      
      // Scale up icon
      const icon = card.querySelector('.payment-icon i');
      if (icon) {
        icon.style.transform = 'scale(1.2)';
        icon.style.transition = 'transform 0.3s ease';
      }
      
      // Highlight button
      const button = card.querySelector('.btn-payment');
      if (button) {
        button.style.backgroundColor = 'var(--color-accent-gold-light)';
        button.style.transform = 'translateY(-2px)';
        button.style.boxShadow = '0 4px 12px rgba(255, 215, 0, 0.3)';
        button.style.transition = 'all 0.3s ease';
      }
    });
    
    card.addEventListener('mouseleave', () => {
      // Reset shadow
      card.style.boxShadow = 'none';
      
      // Reset icon
      const icon = card.querySelector('.payment-icon i');
      if (icon) {
        icon.style.transform = 'scale(1)';
      }
      
      // Reset button
      const button = card.querySelector('.btn-payment');
      if (button) {
        button.style.backgroundColor = 'var(--color-accent-gold)';
        button.style.transform = 'translateY(0)';
        button.style.boxShadow = 'none';
      }
    });
  });
}

// FAQ Accordion Animation
const faqItems = document.querySelectorAll('.faq-item');
if (faqItems.length > 0) {
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const icon = item.querySelector('.faq-icon i');
    
    // Set initial styles
    answer.style.height = '0';
    answer.style.overflow = 'hidden';
    answer.style.transition = 'height 0.3s ease';
    answer.style.display = 'block';
    
    question.addEventListener('click', () => {
      // Toggle active state
      const isActive = item.classList.contains('active');
      
      // Close all other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          const otherAnswer = otherItem.querySelector('.faq-answer');
          const otherIcon = otherItem.querySelector('.faq-icon i');
          
          otherItem.classList.remove('active');
          otherAnswer.style.height = '0';
          otherIcon.style.transform = 'rotate(0)';
        }
      });
      
      // Toggle current item
      if (isActive) {
        item.classList.remove('active');
        answer.style.height = '0';
        icon.style.transform = 'rotate(0)';
      } else {
        item.classList.add('active');
        answer.style.height = answer.scrollHeight + 'px';
        icon.style.transform = 'rotate(180deg)';
      }
    });
  });
}

// Tip Item Hover Effect
const tipItems = document.querySelectorAll('.tip-item');
if (tipItems.length > 0) {
  tipItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      // Highlight icon
      const icon = item.querySelector('.tip-icon');
      if (icon) {
        icon.style.transform = 'scale(1.2)';
        icon.style.transition = 'transform 0.3s ease';
      }
      
      // Highlight text
      const text = item.querySelector('.tip-text');
      if (text) {
        text.style.color = 'var(--color-text-primary)';
        text.style.fontWeight = '600';
        text.style.transition = 'all 0.3s ease';
      }
    });
    
    item.addEventListener('mouseleave', () => {
      // Reset icon
      const icon = item.querySelector('.tip-icon');
      if (icon) {
        icon.style.transform = 'scale(1)';
      }
      
      // Reset text
      const text = item.querySelector('.tip-text');
      if (text) {
        text.style.color = '';
        text.style.fontWeight = '';
      }
    });
  });
}

// Security Feature Hover Effect
const securityFeatures = document.querySelectorAll('.security-feature');
if (securityFeatures.length > 0) {
  securityFeatures.forEach(feature => {
    feature.addEventListener('mouseenter', () => {
      // Scale up icon
      const icon = feature.querySelector('.security-icon i');
      if (icon) {
        icon.style.transform = 'scale(1.2)';
        icon.style.transition = 'transform 0.3s ease';
      }
      
      // Add subtle background color
      feature.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
      feature.style.transition = 'background-color 0.3s ease';
    });
    
    feature.addEventListener('mouseleave', () => {
      // Reset icon
      const icon = feature.querySelector('.security-icon i');
      if (icon) {
        icon.style.transform = 'scale(1)';
      }
      
      // Reset background
      feature.style.backgroundColor = '';
    });
  });
}

// CTA Buttons Hover Effect
const ctaButtons = document.querySelectorAll('.payment-cta .btn-cta');
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

// Add subtle animation to "Recommended" badge
const recommendedBadges = document.querySelectorAll('.payment-badge');
if (recommendedBadges.length > 0) {
  // Add CSS animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes badge-pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }
    
    .payment-badge {
      animation: badge-pulse 2s infinite;
    }
  `;
  document.head.appendChild(style);
}

// Add fade-in animation for page sections on scroll
if ('IntersectionObserver' in window) {
  const sections = document.querySelectorAll('.payment-methods, .banking-tips, .faq-section, .security-section');
  
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

// Enhance payment detail values with animation
const detailValues = document.querySelectorAll('.detail-value');
if (detailValues.length > 0) {
  detailValues.forEach(value => {
    // Only animate for time values (containing "seconds" or "minutes")
    const text = value.textContent.toLowerCase();
    if (text.includes('second') || text.includes('minute')) {
      value.style.position = 'relative';
      
      // Add animation for speed indicators
      const speedStyle = document.createElement('style');
      speedStyle.textContent = `
        @keyframes speed-indicator {
          0% { color: var(--color-text-primary); }
          50% { color: var(--color-accent-green); }
          100% { color: var(--color-text-primary); }
        }
        
        .fast-payment {
          animation: speed-indicator 2s infinite;
          font-weight: 700;
        }
      `;
      document.head.appendChild(speedStyle);
      
      value.classList.add('fast-payment');
    }
  });
}