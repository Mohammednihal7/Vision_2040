// 🟡 Scroll Change Background + Active Link + Smooth Scroll
const navbar = document.querySelector('.custom-navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  // Scroll background change
  if (window.scrollY > 50) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }

  // Active link highlight
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 100;
    const height = section.offsetHeight;
    if (scrollY >= top && scrollY < top + height) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

// 🔗 Smooth Scroll
navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').replace("#", "");
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});
// 🧠 Typing Effect for Hero Title
const text = "Vision 2040";
const target = document.getElementById("typing-text");

let index = 0;
function typeLetter() {
  if (index < text.length) {
    target.textContent += text.charAt(index);
    index++;
    setTimeout(typeLetter, 150);
  }
}
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(typeLetter, 500);
});
// Reveal content on scroll
document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".fade-slide");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  fadeElements.forEach(el => observer.observe(el));
});
// 🧠 Scroll-based image entrance/exit animation
const homeSection = document.getElementById("home");
const imageGrid = document.querySelector(".image-grid");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // 👁️ Home in view - show image grid
        imageGrid.classList.add("image-in");
        imageGrid.classList.remove("image-out");
      } else {
        // 👁️ Home out of view - hide image grid
        imageGrid.classList.remove("image-in");
        imageGrid.classList.add("image-out");
      }
    });
  },
  { threshold: 0.4 }
);

observer.observe(homeSection);
// 🟢 Apply hover background from data-color attribute
const serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach(card => {
  const color = card.getAttribute("data-color");
  card.style.setProperty('--hover-color', color);
});


document.getElementById("seeMoreBtn").addEventListener("click", function () {
  const hiddenMembers = document.querySelectorAll(".team-member.hidden");
  hiddenMembers.forEach((member) => {
    member.classList.remove("hidden");
    member.style.animation = "fadeIn 0.8s ease-in-out";
  });
  this.style.display = "none"; // Hide the button after showing all
});

// Optional fade-in animation
const style = document.createElement('style');
style.innerHTML = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(style);


  // ===== Chart.js Initialization for 6 charts =====
  const chartConfigs = [
    {
      id: 'chart1',
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr'],
        datasets: [{
          label: 'Growth',
          data: [12, 19, 3, 17],
          backgroundColor: '#00FFFF',
        }]
      }
    },
    {
      id: 'chart2',
      type: 'line',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
          label: 'Visitors',
          data: [150, 200, 180, 240],
          borderColor: '#FFD700',
          backgroundColor: 'transparent',
          tension: 0.4
        }]
      }
    },
    {
      id: 'chart3',
      type: 'pie',
      data: {
        labels: ['India', 'US', 'UK'],
        datasets: [{
          label: 'Regions',
          data: [55, 30, 15],
          backgroundColor: ['#FFD700', '#00FFFF', '#999']
        }]
      }
    },
    {
      id: 'chart4',
      type: 'radar',
      data: {
        labels: ['Speed', 'UX', 'Security', 'Design'],
        datasets: [{
          label: 'Performance',
          data: [80, 90, 70, 85],
          borderColor: '#00FFFF',
          backgroundColor: 'rgba(0, 255, 255, 0.3)',
        }]
      }
    },
    {
      id: 'chart5',
      type: 'doughnut',
      data: {
        labels: ['Web', 'Mobile', 'AI'],
        datasets: [{
          data: [40, 30, 30],
          backgroundColor: ['#FFD700', '#00FFFF', '#444']
        }]
      }
    },
    {
      id: 'chart6',
      type: 'bar',
      data: {
        labels: ['SEO', 'UI', 'UX', 'Content'],
        datasets: [{
          label: 'Quality Score',
          data: [85, 90, 88, 95],
          backgroundColor: '#00FFFF',
        }]
      }
    }
  ];

  chartConfigs.forEach(config => {
    const ctx = document.getElementById(config.id)?.getContext('2d');
    if (ctx) {
      new Chart(ctx, {
        type: config.type,
        data: config.data,
        options: {
          responsive: true,
          plugins: {
            legend: {
              labels: { color: '#fff' }
            }
          },
          scales: {
            x: { ticks: { color: '#ccc' } },
            y: { ticks: { color: '#ccc' } }
          }
        }
      });
    }
  });

  // ===== CountUp Animation =====
  document.addEventListener('DOMContentLoaded', () => {
    const counterElements = document.querySelectorAll('.counter');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const endVal = parseInt(el.getAttribute('data-target'), 10);
          const countUp = new countUp.CountUp(el, endVal);
          if (!countUp.error) {
            countUp.start();
          } else {
            console.error(countUp.error);
          }
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.6 });

    counterElements.forEach(el => observer.observe(el));
  });

  // ===== Initialize AOS (Animate On Scroll) =====
  AOS.init({
    duration: 1000,
    once: true,
    offset: 50
  });
// ========== AOS Initialization ==========
// Initialize AOS (scroll animation)
AOS.init({
  duration: 1000,
  once: true
});
