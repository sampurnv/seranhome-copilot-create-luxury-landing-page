import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';

function App() {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleClick = (e) => {
      if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleClick);

    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      if (!navbar) return;

      if (currentScroll > 100) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.value-item, .feature-row, .process-step, .showcase-item, .testimonial');
    animateElements.forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(40px)';
      element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      observer.observe(element);
    });

    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    const handleHeroScroll = () => {
      const scrolled = window.pageYOffset;
      if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleHeroScroll);

    // Cursor effect for premium feel (desktop only)
    const DESKTOP_BREAKPOINT = 1024;
    let cursor;
    let handleMouseMove;
    let handleMouseLeave;
    
    if (window.innerWidth > DESKTOP_BREAKPOINT) {
      cursor = document.createElement('div');
      cursor.className = 'custom-cursor';
      cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border: 1px solid #d4af37;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.2s ease, opacity 0.2s ease;
        opacity: 0;
      `;
      document.body.appendChild(cursor);
      
      handleMouseMove = (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        cursor.style.opacity = '1';
      };
      
      handleMouseLeave = () => {
        cursor.style.opacity = '0';
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseleave', handleMouseLeave);

      // Expand cursor on interactive elements
      const interactiveElements = document.querySelectorAll('a, button, .showcase-item, .process-step');
      interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
          cursor.style.transform = 'scale(2)';
          cursor.style.background = 'rgba(212, 175, 55, 0.1)';
        });
        
        element.addEventListener('mouseleave', () => {
          cursor.style.transform = 'scale(1)';
          cursor.style.background = 'transparent';
        });
      });
    }

    // Cleanup
    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleHeroScroll);
      if (cursor && document.body.contains(cursor)) {
        if (handleMouseMove) {
          document.removeEventListener('mousemove', handleMouseMove);
        }
        if (handleMouseLeave) {
          document.removeEventListener('mouseleave', handleMouseLeave);
        }
        document.body.removeChild(cursor);
      }
    };
  }, []);

  return (
    <div className="App">
      <div className="bg-video-wrap">
        <video id="bg-video" autoPlay muted loop playsInline preload="auto" poster="/assets/backgrounds/nature-poster.jpg">
          <source src="https://assets.mixkit.co/videos/44392/44392-720.mp4" type="video/mp4" />
        </video>
        <div className="bg-video-fallback" />
      </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
