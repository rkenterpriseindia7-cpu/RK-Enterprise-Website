// Configuration object for all site data
const SITE_CONFIG = {
  navigation: [
    { href: "#home", text: "Home" },
    { href: "#about", text: "About Us" },
    { href: "#services", text: "Services" },
    { href: "#portfolio", text: "Portfolio" },
    { href: "#contact", text: "Contact" },
  ],
  stats: [
    { value: "₹500+", label: "Crore Turnover" },
    { value: "25+", label: "Years Experience" },
    { value: "50+", label: "Global Partners" },
    { value: "100%", label: "Quality Assured" },
  ],
  aboutFeatures: [
    {
      icon: "fas fa-globe",
      title: "Global Trading Expertise",
      description:
        "RK ENTERPRISE is a diversified business group with expertise in Global Trading of petroleum products, serving markets across continents.",
      color: "primary",
    },
    {
      icon: "fas fa-chart-line",
      title: "₹500+ Crore Turnover",
      description:
        "Associated with industry leaders like Reliance Industries Ltd, IOC, BPCL, HPCL, ONGC, Adani, and more.",
      color: "gold",
    },
    {
      icon: "fas fa-industry",
      title: "Manufacturing Excellence",
      description:
        "Three major processing/manufacturing units ensuring quality control and production efficiency.",
      color: "primary",
    },
    {
      icon: "fas fa-award",
      title: "Flagship Company",
      description:
        "Flagship company of Jainam Group, engaged in marketing/distribution of petroleum products from Bharat Petroleum Corporation Ltd.",
      color: "gold",
    },
  ],
  products: [
    {
      icon: "fas fa-oil-can",
      title: "BITUMEN",
      description:
        "High-quality Furnace Oil, a dark viscous residual fuel obtained from crude distillation. Also known as Bunker Oil and Fuel Oil, perfect for industrial applications.",
      badge: "Premium",
      gradient: "from-primary-500 via-primary-600 to-primary-700",
      borderColor: "primary",
      image: "assets/1.jpg",
    },
    {
      icon: "fas fa-gas-pump",
      title: "Light Diesel Oil (LDO)",
      description:
        "Premium LDO, a medium-coloured fuel available as either distilled or residual fraction, extracted during distillation process with superior quality standards.",
      badge: "Certified",
      gradient: "from-gold-500 via-gold-600 to-gold-700",
      borderColor: "gold",
      image: "assets/2.jpg",
    },
    {
      icon: "fas fa-fire",
      title: "INDUSTRIAL FUEL OIL",
      description:
        "Next-generation marine fuel oils (2019–2020) designed to meet stringent SOx emissions requirements while maintaining exceptional performance standards.",
      badge: "Eco-Friendly",
      gradient: "from-primary-600 via-primary-700 to-primary-800",
      borderColor: "primary",
      image: "assets/3.jpg",
    },
    {
      icon: "fas fa-tint",
      title: "CRUDE OIL",
      description:
        "Premium grade crude oil sourced from the finest reserves, meeting international quality standards for refining and processing applications.",
      badge: "Premium",
      gradient: "from-gold-600 via-gold-700 to-gold-800",
      borderColor: "gold",
      image: "assets/4.jpg",
    },
    {
      icon: "fas fa-cog",
      title: "LUBRICANTS",
      description:
        "High-performance industrial lubricants designed for heavy machinery and automotive applications, ensuring optimal performance and longevity.",
      badge: "Certified",
      gradient: "from-primary-400 via-primary-500 to-primary-600",
      borderColor: "primary",
      image: "assets/5.jpg",
    },
    {
      icon: "fas fa-leaf",
      title: "BIO-FUELS",
      description:
        "Environmentally friendly bio-fuel solutions derived from renewable sources, meeting modern sustainability requirements and emission standards.",
      badge: "Eco-Friendly",
      gradient: "from-green-500 via-green-600 to-green-700",
      borderColor: "green",
      image: "assets/1.jpg",
    },
  ],
  partners: [
    {
      name: "Reliance Industries",
      type: "Strategic Partner",
      icon: "fas fa-building",
      color: "primary",
    },
    {
      name: "IOC & BPCL",
      type: "Supply Partners",
      icon: "fas fa-industry",
      color: "gold",
    },
    {
      name: "ONGC",
      type: "Resource Partner",
      icon: "fas fa-oil-can",
      color: "primary",
    },
    {
      name: "Adani Group",
      type: "Infrastructure Partner",
      icon: "fas fa-cog",
      color: "gold",
    },
  ],
  socialLinks: [
    { href: "#", icon: "fab fa-linkedin-in" },
    { href: "#", icon: "fab fa-twitter" },
    { href: "#", icon: "fab fa-facebook-f" },
  ],
  quickLinks: [
    { href: "#home", text: "Home" },
    { href: "#about", text: "About Us" },
    { href: "#services", text: "Our Products" },
    { href: "#contact", text: "Contact Us" },
  ],
  contactInfo: [
    {
      icon: "fas fa-map-marker-alt",
      text: "B/5, Patriot Complex, Near Inox, Race Course, Ellora Park, Vadodara 390021 Gujarat.",
    },
    { icon: "fas fa-phone", text: "+91 760 000 0483" },
    { icon: "fas fa-envelope", text: "hello@rkenterprise.com" },
  ],
};

// Utility functions
const utils = {
  // Create element with classes
  createElement: (tag, classes = "", content = "") => {
    const element = document.createElement(tag);
    if (classes) element.className = classes;
    if (content) element.innerHTML = content;
    return element;
  },

  // Add multiple classes to element
  addClasses: (element, ...classes) => {
    element.classList.add(...classes);
  },

  // Remove multiple classes from element
  removeClasses: (element, ...classes) => {
    element.classList.remove(...classes);
  },

  // Toggle multiple classes on element
  toggleClasses: (element, classes, condition) => {
    if (condition) {
      utils.addClasses(element, ...classes);
    } else {
      utils.removeClasses(element, ...classes);
    }
  },
};

// Content generation functions
const contentGenerator = {
  // Generate navigation links
  generateNavigation: () => {
    const navMenu = document.getElementById("nav-menu");
    const mobileNavMenu = document.getElementById("mobile-nav-menu");

    if (!navMenu) return;

    const navLinks = SITE_CONFIG.navigation
      .map(
        (item) => `
      <li>
        <a href="${item.href}" class="nav-link text-gray-800 font-semibold hover:text-primary-600 transition-all duration-300 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-0 after:h-1 after:bg-gradient-to-r after:from-primary-500 after:to-primary-600 after:transition-all after:duration-300 hover:after:w-full">
          ${item.text}
        </a>
      </li>
    `
      )
      .join("");

    navMenu.innerHTML = navLinks;

    // Generate mobile navigation
    if (mobileNavMenu) {
      const mobileNavLinks = SITE_CONFIG.navigation
        .map(
          (item) => `
        <li>
          <a href="${item.href}" class="nav-link text-gray-800 font-semibold hover:text-primary-600 transition-all duration-300 py-2 block">
            ${item.text}
          </a>
        </li>
      `
        )
        .join("");

      mobileNavMenu.innerHTML = mobileNavLinks;
    }
  },

  // Generate stats section
  generateStats: () => {
    const statsSection = document.getElementById("stats-section");
    if (!statsSection) return;

    const stats = SITE_CONFIG.stats
      .map(
        (item) => `
      <div class="text-center">
        <div class="text-3xl md:text-4xl font-bold text-gold-400 mb-2">${item.value}</div>
        <div class="text-sm text-gray-300">${item.label}</div>
      </div>
    `
      )
      .join("");

    statsSection.innerHTML = stats;
  },

  // Generate about features
  generateAboutFeatures: () => {
    const aboutFeatures = document.getElementById("about-features");
    if (!aboutFeatures) return;

    const features = SITE_CONFIG.aboutFeatures
      .map(
        (item) => `
      <div class="flex items-start space-x-4">
        <div class="w-12 h-12 bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 rounded-xl flex items-center justify-center flex-shrink-0">
          <i class="${item.icon} text-white text-lg"></i>
        </div>
        <div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">${item.title}</h3>
          <p class="text-gray-600 leading-relaxed">${item.description}</p>
        </div>
      </div>
    `
      )
      .join("");

    aboutFeatures.innerHTML = features;
  },

  // Generate products
  generateProducts: () => {
    const productsGrid = document.getElementById("products-grid");
    if (!productsGrid) return;

    // Show first 3 products initially
    const initialProducts = SITE_CONFIG.products.slice(0, 3);
    const remainingProducts = SITE_CONFIG.products.slice(3);

    // Generate initial products
    const initialProductsHTML = initialProducts
      .map(
        (item) => `
      <div class="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 border border-gray-100">
        <div class="relative h-64 flex justify-center items-center text-white overflow-hidden" style="background-image: url('${
          item.image
        }'); background-size: cover; background-position: center;">
          <div class="absolute inset-0 bg-black/50"></div>
          <div class="absolute inset-0 bg-gradient-to-br ${
            item.gradient
          } opacity-60"></div>
          <div class="relative z-10 text-6xl group-hover:scale-110 transition-transform duration-500">
            <i class="${item.icon}"></i>
          </div>
          <div class="absolute top-4 right-4 bg-gold-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            ${item.badge}
          </div>
        </div>
        <div class="p-8">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">${item.title}</h3>
          <p class="text-gray-600 mb-6 leading-relaxed">${item.description}</p>
          <div class="flex items-center justify-between">
            <a href="#${item.title
              .toLowerCase()
              .replace(
                /\s+/g,
                "-"
              )}" class="inline-flex items-center px-6 py-3 border-2 border-${
          item.borderColor
        }-500 text-${item.borderColor}-500 rounded-lg font-semibold hover:bg-${
          item.borderColor
        }-500 hover:text-white transition-all duration-300">
              <span>Learn More</span>
              <i class="fas fa-arrow-right ml-2"></i>
            </a>
            <div class="flex space-x-1">
              <i class="fas fa-star text-gold-400"></i>
              <i class="fas fa-star text-gold-400"></i>
              <i class="fas fa-star text-gold-400"></i>
              <i class="fas fa-star text-gold-400"></i>
              <i class="fas fa-star text-gold-400"></i>
            </div>
          </div>
        </div>
      </div>
    `
      )
      .join("");

    // Generate remaining products (initially hidden)
    const remainingProductsHTML = remainingProducts
      .map(
        (item) => `
      <div class="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 border border-gray-100 hidden-products opacity-0 transform translate-y-8" style="display: none;">
        <div class="relative h-64 flex justify-center items-center text-white overflow-hidden" style="background-image: url('${
          item.image
        }'); background-size: cover; background-position: center;">
          <div class="absolute inset-0 bg-black/50"></div>
          <div class="absolute inset-0 bg-gradient-to-br ${
            item.gradient
          } opacity-60"></div>
          <div class="relative z-10 text-6xl group-hover:scale-110 transition-transform duration-500">
            <i class="${item.icon}"></i>
          </div>
          <div class="absolute top-4 right-4 bg-gold-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            ${item.badge}
          </div>
        </div>
        <div class="p-8">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">${item.title}</h3>
          <p class="text-gray-600 mb-6 leading-relaxed">${item.description}</p>
          <div class="flex items-center justify-between">
            <a href="#${item.title
              .toLowerCase()
              .replace(
                /\s+/g,
                "-"
              )}" class="inline-flex items-center px-6 py-3 border-2 border-${
          item.borderColor
        }-500 text-${item.borderColor}-500 rounded-lg font-semibold hover:bg-${
          item.borderColor
        }-500 hover:text-white transition-all duration-300">
              <span>Learn More</span>
              <i class="fas fa-arrow-right ml-2"></i>
            </a>
            <div class="flex space-x-1">
              <i class="fas fa-star text-gold-400"></i>
              <i class="fas fa-star text-gold-400"></i>
              <i class="fas fa-star text-gold-400"></i>
              <i class="fas fa-star text-gold-400"></i>
              <i class="fas fa-star text-gold-400"></i>
            </div>
          </div>
        </div>
      </div>
    `
      )
      .join("");

    productsGrid.innerHTML = initialProductsHTML + remainingProductsHTML;

    // Setup explore button functionality
    const exploreButton = document.querySelector('a[href="#products-details"]');
    if (exploreButton) {
      exploreButton.addEventListener("click", (e) => {
        e.preventDefault();
        contentGenerator.toggleProducts();
      });
    }
  },

  // Toggle products visibility
  toggleProducts: () => {
    const hiddenProducts = document.querySelectorAll(".hidden-products");
    const exploreButton = document.querySelector('a[href="#products-details"]');

    if (
      hiddenProducts.length > 0 &&
      hiddenProducts[0].style.display !== "block"
    ) {
      // Show hidden products
      hiddenProducts.forEach((product, index) => {
        product.style.display = "block";
        setTimeout(() => {
          product.classList.remove("opacity-0", "translate-y-8");
          product.classList.add("opacity-100", "translate-y-0");
        }, index * 200);
      });

      // Update button text
      if (exploreButton) {
        exploreButton.innerHTML = `
          <i class="fas fa-chevron-up mr-3 text-white"></i>
          <span class="font-bold text-white">Show Less</span>
        `;
      }
    } else {
      // Hide products (reverse animation)
      const allProducts = document.querySelectorAll("#products-grid > div");
      const productsToHide = Array.from(allProducts).slice(3);

      productsToHide.forEach((product, index) => {
        setTimeout(() => {
          product.classList.remove("opacity-100", "translate-y-0");
          product.classList.add("opacity-0", "translate-y-8");
        }, index * 100);

        // Hide the element after animation
        setTimeout(() => {
          product.style.display = "none";
        }, index * 100 + 600);
      });

      // Update button text
      if (exploreButton) {
        exploreButton.innerHTML = `
          <i class="fas fa-th-large mr-3 text-white"></i>
          <span class="font-bold text-white">Explore All Products</span>
        `;
      }
    }
  },

  // Generate partners (now handled by static HTML)
  generatePartners: () => {
    // Partners are now static HTML, no JavaScript generation needed
    return;
  },

  // Generate social links
  generateSocialLinks: () => {
    const socialLinks = document.getElementById("social-links");
    if (!socialLinks) return;

    const links = SITE_CONFIG.socialLinks
      .map(
        (item) => `
      <a href="${item.href}" class="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors">
        <i class="${item.icon} text-white"></i>
      </a>
    `
      )
      .join("");

    socialLinks.innerHTML = links;
  },

  // Generate quick links
  generateQuickLinks: () => {
    const quickLinks = document.getElementById("quick-links");
    if (!quickLinks) return;

    const links = SITE_CONFIG.quickLinks
      .map(
        (item) => `
      <li>
        <a href="${item.href}" class="text-white hover:text-gold-400 transition-colors duration-300 flex items-center">
          <i class="fas fa-chevron-right text-xs mr-3 text-primary-400"></i>
          <span class="font-bold text-white hover:text-gold-400 transition-colors duration-300">${item.text}</span>
        </a>
      </li>
    `
      )
      .join("");

    quickLinks.innerHTML = links;
  },

  // Generate contact info
  generateContactInfo: () => {
    const contactInfo = document.getElementById("contact-info");
    if (!contactInfo) return;

    const info = SITE_CONFIG.contactInfo
      .map(
        (item) => `
      <div class="flex items-start space-x-4">
        <div class="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
          <i class="${item.icon} text-white"></i>
        </div>
        <div>
          <p class="text-gray-300 leading-relaxed">${item.text}</p>
        </div>
      </div>
    `
      )
      .join("");

    contactInfo.innerHTML = info;
  },

  // Initialize all content
  init: () => {
    contentGenerator.generateNavigation();
    contentGenerator.generateStats();
    contentGenerator.generateAboutFeatures();
    contentGenerator.generateProducts();
    contentGenerator.generatePartners();
    contentGenerator.generateSocialLinks();
    contentGenerator.generateQuickLinks();
    contentGenerator.generateContactInfo();
  },
};

// Mobile Navigation Toggle
const mobileNav = {
  hamburger: null,
  navMenu: null,

  init: () => {
    mobileNav.hamburger = document.getElementById("hamburger");
    mobileNav.navMenu = document.getElementById("nav-menu");

    if (mobileNav.hamburger && mobileNav.navMenu) {
      mobileNav.hamburger.addEventListener("click", mobileNav.toggle);
      mobileNav.setupLinkListeners();
    }
  },

  toggle: () => {
    mobileNav.hamburger.classList.toggle("active");
    mobileNav.navMenu.classList.toggle("active");

    const mobileClasses = [
      "fixed",
      "left-0",
      "top-[70px]",
      "flex-col",
      "bg-white",
      "w-full",
      "text-center",
      "transition-all",
      "duration-300",
      "shadow-lg",
      "py-8",
      "space-y-4",
    ];

    if (mobileNav.navMenu.classList.contains("active")) {
      utils.removeClasses(mobileNav.navMenu, "hidden");
      utils.addClasses(mobileNav.navMenu, ...mobileClasses);
    } else {
      utils.addClasses(mobileNav.navMenu, "hidden");
      utils.removeClasses(mobileNav.navMenu, ...mobileClasses);
    }
  },

  setupLinkListeners: () => {
    document.querySelectorAll(".nav-link, a[href^='#']").forEach((link) => {
      link.addEventListener("click", mobileNav.close);
    });
  },

  close: () => {
    mobileNav.hamburger.classList.remove("active");
    mobileNav.navMenu.classList.remove("active");
    utils.addClasses(mobileNav.navMenu, "hidden");
    utils.removeClasses(
      mobileNav.navMenu,
      "fixed",
      "left-0",
      "top-[70px]",
      "flex-col",
      "bg-white",
      "w-full",
      "text-center",
      "transition-all",
      "duration-300",
      "shadow-lg",
      "py-8",
      "space-y-4"
    );
  },
};

// Smooth scrolling
const smoothScroll = {
  init: () => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", smoothScroll.handleClick);
    });
  },

  handleClick: function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  },
};

// Header management
const headerManager = {
  header: null,
  heroSection: null,

  init: () => {
    headerManager.header = document.getElementById("header");
    headerManager.heroSection = document.getElementById("home");

    if (headerManager.header) {
      window.addEventListener("scroll", headerManager.handleScroll);
    }
  },

  handleScroll: () => {
    if (!headerManager.heroSection) return;

    const heroBottom =
      headerManager.heroSection.offsetTop +
      headerManager.heroSection.offsetHeight;
    const isOverHero = window.scrollY < heroBottom;

    if (window.scrollY > 100) {
      // Scrolled down - make header more solid
      utils.removeClasses(headerManager.header, "bg-white/90", "shadow-xl");
      utils.addClasses(headerManager.header, "bg-white/98", "shadow-2xl");
    } else if (isOverHero) {
      // Over hero section - make header more transparent
      utils.removeClasses(headerManager.header, "bg-white/98", "shadow-2xl");
      utils.addClasses(headerManager.header, "bg-white/90", "shadow-xl");
    } else {
      // Over other sections - solid background
      utils.removeClasses(headerManager.header, "bg-white/90", "shadow-xl");
      utils.addClasses(headerManager.header, "bg-white/98", "shadow-2xl");
    }
  },
};

// Animation system
const animationSystem = {
  observer: null,
  observerOptions: {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  },

  init: () => {
    animationSystem.observer = new IntersectionObserver(
      animationSystem.handleIntersection,
      animationSystem.observerOptions
    );
    animationSystem.setupAnimations();
    animationSystem.setupLoadingAnimations();
    animationSystem.setupParallax();
    animationSystem.setupActiveNavigation();
    animationSystem.setupCounterAnimations();
  },

  handleIntersection: (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fade-in-up");
      }
    });
  },

  setupAnimations: () => {
    const animateElements = document.querySelectorAll(
      ".group, .bg-white.rounded-2xl, .flex.justify-center.items-center, .text-center"
    );
    animateElements.forEach((el) => {
      animationSystem.observer.observe(el);
    });
  },

  setupLoadingAnimations: () => {
    window.addEventListener("load", () => {
      const loadingElements = document.querySelectorAll(
        ".text-5xl.font-bold, .text-6xl.font-bold, .bg-white.rounded-2xl, .flex.justify-center.items-center"
      );
      loadingElements.forEach((el, index) => {
        setTimeout(() => {
          utils.addClasses(el, "opacity-100", "translate-y-0");
          utils.removeClasses(el, "opacity-0", "translate-y-4");
        }, index * 100);
      });
    });
  },

  setupParallax: () => {
    window.addEventListener("scroll", () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll(".animate-float");

      parallaxElements.forEach((element, index) => {
        const speed = 0.5 + index * 0.1;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    });
  },

  setupActiveNavigation: () => {
    window.addEventListener("scroll", () => {
      const sections = document.querySelectorAll("section[id]");
      const navLinks = document.querySelectorAll("a[href^='#']");

      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        utils.removeClasses(link, "text-primary-500", "font-semibold");
        utils.addClasses(link, "text-gray-700");
        if (link.getAttribute("href") === `#${current}`) {
          utils.removeClasses(link, "text-gray-700");
          utils.addClasses(link, "text-primary-500", "font-semibold");
        }
      });
    });
  },

  setupCounterAnimations: () => {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animationSystem.animateCounters();
          statsObserver.unobserve(entry.target);
        }
      });
    });

    const statsSection = document.querySelector("#home .grid.grid-cols-2");
    if (statsSection) {
      statsObserver.observe(statsSection);
    }
  },

  animateCounters: () => {
    const counters = document.querySelectorAll(
      ".text-3xl.font-bold, .text-4xl.font-bold"
    );

    counters.forEach((counter) => {
      const target = parseInt(counter.textContent.replace(/[^\d]/g, ""));
      const increment = target / 100;
      let current = 0;

      const updateCounter = () => {
        if (current < target) {
          current += increment;
          counter.textContent =
            Math.ceil(current) +
            (counter.textContent.includes("+") ? "+" : "") +
            (counter.textContent.includes("%") ? "%" : "");
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent =
            target +
            (counter.textContent.includes("+") ? "+" : "") +
            (counter.textContent.includes("%") ? "%" : "");
        }
      };

      updateCounter();
    });
  },
};

// Back to top button
const backToTop = {
  button: null,

  init: () => {
    backToTop.createButton();
    backToTop.setupScrollListener();
  },

  createButton: () => {
    backToTop.button = utils.createElement("button", "back-to-top");
    backToTop.button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.button.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 50px;
      height: 50px;
      background: linear-gradient(135deg, #1e3c72, #2a5298);
      color: white;
      border: none;
      border-radius: 50%;
      cursor: pointer;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      z-index: 1000;
      box-shadow: 0 4px 20px rgba(30, 60, 114, 0.3);
      font-size: 18px;
    `;

    backToTop.button.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });

    document.body.appendChild(backToTop.button);
  },

  setupScrollListener: () => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        backToTop.button.style.opacity = "1";
        backToTop.button.style.visibility = "visible";
      } else {
        backToTop.button.style.opacity = "0";
        backToTop.button.style.visibility = "hidden";
      }
    });
  },
};

// Form validation utility
const formValidator = {
  validate: (form) => {
    const inputs = form.querySelectorAll("input[required], textarea[required]");
    let isValid = true;

    inputs.forEach((input) => {
      if (!input.value.trim()) {
        utils.addClasses(input, "border-red-500", "ring-red-500");
        isValid = false;
      } else {
        utils.removeClasses(input, "border-red-500", "ring-red-500");
      }
    });

    return isValid;
  },
};

// Lazy loading utility
const lazyLoader = {
  init: () => {
    const images = document.querySelectorAll("img[data-src]");
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove("lazy");
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));
  },
};

// Custom CSS injection
const customStyles = {
  init: () => {
    const style = utils.createElement("style");
    style.textContent = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .animate-fade-in-up {
        animation: fadeInUp 0.8s ease-out;
      }
      
      .hamburger.active .bar:nth-child(2) {
        opacity: 0;
      }
      
      .hamburger.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
      }
      
      .hamburger.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
      }
      
      html {
        scroll-padding-top: 80px;
      }
      
      /* Enhanced hover effects */
      .group:hover .group-hover\\:scale-110 {
        transform: scale(1.1);
      }
      
      .group:hover .group-hover\\:rotate-12 {
        transform: rotate(12deg);
      }
      
      .group:hover .group-hover\\:translate-x-1 {
        transform: translateX(0.25rem);
      }
      
      /* Smooth transitions for all interactive elements */
      * {
        transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 300ms;
      }
      
      /* Product animation transitions */
      .hidden-products {
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
      }
      
      .hidden-products.opacity-100 {
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
      }
    `;
    document.head.appendChild(style);
  },
};

// Initialize initial opacity classes
const initialSetup = {
  init: () => {
    const elements = document.querySelectorAll(
      ".text-5xl.font-bold, .text-6xl.font-bold, .bg-white.rounded-2xl, .flex.justify-center.items-center"
    );
    elements.forEach((el) => {
      utils.addClasses(
        el,
        "opacity-0",
        "translate-y-4",
        "transition-all",
        "duration-500"
      );
    });
  },
};

// Main initialization
document.addEventListener("DOMContentLoaded", () => {
  // Initialize all systems
  contentGenerator.init();
  mobileNav.init();
  smoothScroll.init();
  headerManager.init();
  animationSystem.init();
  backToTop.init();
  lazyLoader.init();
  customStyles.init();
  initialSetup.init();
});
