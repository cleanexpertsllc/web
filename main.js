/**
 * Clean Experts LLC - Professional Cleaning Website
 * Main JavaScript File
 *
 * Features:
 * 1. Language switching (EN/ES)
 * 2. Contact form handling with WhatsApp integration
 * 3. Smooth scrolling for navigation links
 */

// Translation dictionary
const translations = {
  en: {
    // Language switch button
    lang_text: "EN",

    // Navigation
    nav_home: "Home",
    nav_about: "About",
    nav_services: "Services",
    nav_testimonials: "Testimonials",
    nav_gallery: "Gallery",
    nav_contact: "Contact",

    // Hero section
    hero_title: "Professional Cleaning & Painting Services in Norcross, GA",
    hero_subtitle: "Your cleaning in expert hands – 8 Years of Excellence",
    hero_button: "Contact Us via WhatsApp",

    // About section
    about_title: "About Clean Experts LLC",
    about_description:
      "Clean Experts LLC has been providing professional cleaning & painting services for residential and commercial properties in Norcross, GA, for over 8 years. We specialize in post-construction cleaning, office sanitation, and fully compliant services that leave every space spotless and safe.",
    about_feature1_title: "Licensed & Insured",
    about_feature1_desc: "Fully licensed and insured for your peace of mind.",
    about_feature2_title: "Background Checked",
    about_feature2_desc: "All our cleaners are thoroughly vetted and trained.",
    contact_info_title: "Contact Information",
    contact_address_title: "Our Location",
    contact_address: "1112 Singleton Valley Circle, Norcross, GA 30093",
    contact_email_title: "Email Address",
    contact_phone_title: "Call Us Today",

    // Services section
    services_title: "Our Professional Services",
    services_subtitle: "Specialized solutions for every need",
    service1_title: "Post-Construction Cleaning",
    service1_desc:
      "Deep cleaning after construction or renovation projects, removing dust, debris, and residues to make your space ready for use.",
    service2_title: "General Cleaning Service",
    service2_desc:
      "Professional cleaning services for homes, offices, and commercial spaces, tailored to meet each client's specific needs.",
    service3_title: "Painting Service",
    service3_desc:
      "Interior and exterior painting with high-quality finishes, using professional materials to renew and transform your spaces.",

    // Testimonials
    testimonials_title: "What Our Customers Say",
    testimonials_subtitle: "Real feedback from our satisfied clients",
    testimonial1_text:
      '"Amazing job on our new home construction cleanup! Spotless results. The team was professional and thorough."',
    testimonial1_location: "Norcross, GA",
    testimonial2_text:
      '"Our office has never been cleaner! The disinfection service gives our employees peace of mind. Highly recommended!"',
    testimonial2_location: "Atlanta, GA",
    testimonial3_text:
      '"Reliable, professional, and thorough. Clean Experts has been servicing our home for 3 years now. Always impeccable!"',
    testimonial3_location: "Duluth, GA",
    testimonial4_text:
      '"After the construction of my home, the cleanup felt overwhelming, but Clean Experts delivered an excellent cleaning service. I was especially impressed that they also handled the painting, which made the whole post‑construction process so much easier. Highly recommended!"',
    testimonial4_location: "Norcross, GA",

    // Gallery
    gallery_title: "Our Work Gallery",
    gallery_subtitle: "Before and after transformations",
    gallery_slide1_title: "Living Room Transformation",
    gallery_slide1_desc: "From messy to perfectly clean and organized.",
    gallery_slide2_title: "Office Cleaning",
    gallery_slide2_desc: "Professional degreasing and sanitization.",
    gallery_slide3_title: "Windows Cleaning",
    gallery_slide3_desc: "Professional window cleaning for a clear view.",
    gallery_slide4_title: "Post-Construction Cleanup",
    gallery_slide4_desc: "Removing all construction debris and dust.",
    gallery_slide5_title: "Painting Service",
    gallery_slide5_desc:
      "Professional interior and exterior painting with high-quality finishes.",

    // Contact section
    contact_section_title: "Get in Touch Today!",
    contact_section_subtitle: "Choose your preferred method to contact us",
    whatsapp_card_title: "Contact via WhatsApp",
    whatsapp_card_desc:
      "Get quick responses and easy communication through WhatsApp. We're available to answer your questions!",
    whatsapp_card_button: "Start Chat Now",
    email_card_title: "Send Us an Email",
    email_card_desc:
      "For detailed inquiries or service requests, send us an email and we'll respond within 24 hours.",
    email_card_button: "Send Message",
    form_title: "Request a Free Quote",
    form_name: "Full Name",
    form_phone: "Phone Number",
    form_email: "Email Address",
    form_service: "Select Service",
    form_service_placeholder: "Choose a service...",
    form_service_option1: "Post-Construction Cleaning",
    form_service_option2: "Professional Cleaning Services",
    form_service_option3: "Painting Service",
    form_service_option4: "Other Cleaning Service",
    form_message: "Message",
    form_message_placeholder: "Please describe your cleaning needs...",
    form_submit: "Send via WhatsApp",
    map_title: "Our Service Area",

    // Footer
    footer_description:
      "Professional cleaning & Painting services in Norcross, GA with over 8 years of experience. Licensed, insured, and committed to excellence.",
    footer_quick_links: "Quick Links",
    footer_social: "Follow Us",
    footer_copyright: "© 2026 Clean Experts LLC. All rights reserved.",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Service",
  },
  es: {
    // Language switch button
    lang_text: "ES",

    // Navigation
    nav_home: "Inicio",
    nav_about: "Nosotros",
    nav_services: "Servicios",
    nav_testimonials: "Testimonios",
    nav_gallery: "Galería",
    nav_contact: "Contacto",

    // Hero section
    hero_title: "Servicios Profesionales de Limpieza y Pintura en Norcross, GA",
    hero_subtitle: "Tu limpieza en manos expertas – 8 Años de Excelencia",
    hero_button: "Contáctanos por WhatsApp",

    // About section
    about_title: "Acerca de Clean Experts LLC",
    about_description:
      "Clean Experts LLC ha estado proporcionando servicios profesionales de limpieza y desinfección para propiedades residenciales y comerciales en Norcross, GA, durante más de 8 años. Nos especializamos en limpieza post-construcción, sanitización de oficinas y servicios completamente compatibles que dejan cada espacio impecable y seguro.",
    about_feature1_title: "Con Licencia y Asegurados",
    about_feature1_desc:
      "Completamente licenciados y asegurados para su tranquilidad.",
    about_feature2_title: "Verificados Antecedentes",
    about_feature2_desc:
      "Todos nuestros limpiadores son rigurosamente verificados y capacitados.",
    contact_info_title: "Información de Contacto",
    contact_address_title: "Nuestra Ubicación",
    contact_address: "1112 Singleton Valley Circle, Norcross, GA 30093",
    contact_email_title: "Correo Electrónico",
    contact_phone_title: "Llama Hoy",

    // Services section
    services_title: "Nuestros Servicios Profesionales",
    services_subtitle:
      "Soluciones de limpieza especializadas para cada necesidad",
    service1_title: "Limpieza Post-Construcción",
    service1_desc:
      "Limpieza exhaustiva después de proyectos de construcción o renovación, eliminando polvo, escombros y residuos para que su espacio esté listo para mudarse.",
    service2_title: "Servicios Generales de Limpieza",
    service2_desc:
      "Servicios integrales de sanitización y desinfección para oficinas y espacios comerciales que garantizan un ambiente de trabajo saludable.",
    service3_title: "Servicios de Pintura",
    service3_desc:
      "Servicios de pintura profesional para interiores y exteriores con acabados de alta calidad.",

    // Testimonials
    testimonials_title: "Lo Que Dicen Nuestros Clientes",
    testimonials_subtitle:
      "Comentarios reales de nuestros clientes satisfechos",
    testimonial1_text:
      '"¡Trabajo increíble en la limpieza post-construcción de nuestra nueva casa! Resultados impecables. El equipo fue profesional y minucioso."',
    testimonial1_location: "Norcross, GA",
    testimonial2_text:
      '"¡Nuestra oficina nunca ha estado más limpia! El servicio de desinfección da tranquilidad a nuestros empleados. ¡Altamente recomendado!"',
    testimonial2_location: "Atlanta, GA",
    testimonial3_text:
      '"Confiable, profesional y minucioso. Clean Experts ha estado sirviendo nuestro hogar durante 3 años. ¡Siempre impecable!"',
    testimonial3_location: "Duluth, GA",
    testimonial4_text:
      '"Después de la construcción de mi casa, la limpieza parecía abrumadora, pero Clean Experts entregó un excelente servicio de limpieza. Me impresionó especialmente que también hicieran el pintado, lo que hizo todo el proceso post-construcción mucho más fácil. ¡Altamente recomendado!"',
    testimonial4_location: "Norcross, GA",

    // Gallery
    gallery_title: "Galería de Nuestro Trabajo",
    gallery_subtitle: "Transformaciones antes y después",
    gallery_slide1_title: "Transformación de Sala de Estar",
    gallery_slide1_desc: "De desordenado a perfectamente limpio y organizado.",
    gallery_slide2_title: "Limpieza de Oficina",
    gallery_slide2_desc: "Desengrasado y sanitización profesional.",
    gallery_slide3_title: "Limpieza de Ventanas",
    gallery_slide3_desc:
      "Limpieza profesional de ventanas para una vista clara.",
    gallery_slide4_title: "Limpieza Post-Construcción",
    gallery_slide4_desc:
      "Eliminando todos los escombros y polvo de construcción.",
    gallery_slide5_title: "Servicios de Pintura",
    gallery_slide5_desc:
      "Servicios de pintura profesional para interiores y exteriores con acabados de alta calidad.",

    // Contact section
    contact_section_title: "¡Ponte en Contacto Hoy!",
    contact_section_subtitle: "Elige tu método preferido para contactarnos",
    whatsapp_card_title: "Contactar por WhatsApp",
    whatsapp_card_desc:
      "Obtén respuestas rápidas y comunicación fácil a través de WhatsApp. ¡Estamos disponibles para responder tus preguntas!",
    whatsapp_card_button: "Iniciar Chat Ahora",
    email_card_title: "Envíanos un Correo",
    email_card_desc:
      "Para consultas detalladas o solicitudes de servicio, envíanos un correo electrónico y responderemos dentro de las 24 horas.",
    email_card_button: "Enviar Mensaje",
    form_title: "Solicitar Presupuesto Gratuito",
    form_name: "Nombre Completo",
    form_phone: "Número de Teléfono",
    form_email: "Correo Electrónico",
    form_service: "Seleccionar Servicio",
    form_service_placeholder: "Elige un servicio...",
    form_service_option1: "Limpieza Post-Construcción",
    form_service_option2: "Servicios Profesionales de Limpieza",
    form_service_option3: "Servicios de Pintura",
    form_service_option4: "Otro Servicio de Limpieza",
    form_message: "Mensaje",
    form_message_placeholder:
      "Por favor describe tus necesidades de limpieza...",
    form_submit: "Enviar por WhatsApp",
    map_title: "Nuestra Área de Servicio",

    // Footer
    footer_description:
      "Servicios profesionales de limpieza y pintura en Norcross, GA con más de 8 años de experiencia. Con licencia, asegurados y comprometidos con la excelencia.",
    footer_quick_links: "Enlaces Rápidos",
    footer_social: "Síguenos",
    footer_copyright:
      "© 2026 Clean Experts LLC. Todos los derechos reservados.",
    footer_privacy: "Política de Privacidad",
    footer_terms: "Términos de Servicio",
  },
};

// Current language state
let currentLanguage = "en";

// DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", function () {
  // Initialize the website
  initLanguage();
  initSmoothScroll();
  initContactForm();

  // Add event listener to language switch button
  const languageSwitch = document.getElementById("language-switch");
  if (languageSwitch) {
    languageSwitch.addEventListener("click", toggleLanguage);
  }
});

// Initialize language on page load
function initLanguage() {
  // Check if language is stored in localStorage
  const savedLanguage = localStorage.getItem("cleanExpertsLanguage");
  if (savedLanguage && (savedLanguage === "en" || savedLanguage === "es")) {
    currentLanguage = savedLanguage;
  }

  // Apply the current language
  applyLanguage();
}

// Toggle between English and Spanish
function toggleLanguage() {
  currentLanguage = currentLanguage === "en" ? "es" : "en";

  // Save language preference to localStorage
  localStorage.setItem("cleanExpertsLanguage", currentLanguage);

  // Apply the new language
  applyLanguage();
}

// Apply the current language to all translatable elements
function applyLanguage() {
  const translation = translations[currentLanguage];

  // Update language switch button text
  const langTextElement = document.getElementById("lang-text");
  if (langTextElement) {
    langTextElement.textContent = translation.lang_text;
  }

  // Update all elements with data-translate attribute
  const translatableElements = document.querySelectorAll("[data-translate]");
  translatableElements.forEach((element) => {
    const key = element.getAttribute("data-translate");
    if (translation[key]) {
      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        element.placeholder = translation[key];
      } else if (element.tagName === "OPTION") {
        element.textContent = translation[key];
      } else {
        element.textContent = translation[key];
      }
    }
  });
}

// Initialize smooth scrolling for navigation links
function initSmoothScroll() {
  // Select all links with hashes
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      // Get the target element
      const targetId = this.getAttribute("href");

      // Skip if it's just "#"
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        e.preventDefault();

        // Close mobile navbar if open
        const navbarCollapse = document.getElementById("navbarNav");
        if (navbarCollapse.classList.contains("show")) {
          const bsCollapse = new bootstrap.Collapse(navbarCollapse);
          bsCollapse.hide();
        }

        // Calculate navbar height for offset
        const navbarHeight = document.querySelector(".navbar").offsetHeight;

        // Get target position
        const targetPosition = targetElement.offsetTop - navbarHeight;

        // Smooth scroll to target
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        // Update active nav link
        updateActiveNavLink(targetId);
      }
    });
  });

  // Update active nav link on scroll
  window.addEventListener("scroll", updateActiveNavLinkOnScroll);
}

// Update active navigation link based on scroll position
function updateActiveNavLinkOnScroll() {
  // Get current scroll position
  const scrollPosition = window.scrollY + 100; // Add offset for better detection

  // Get all sections
  const sections = document.querySelectorAll("section[id]");

  // Find the current section in view
  let currentSectionId = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    const navbarHeight = document.querySelector(".navbar").offsetHeight;

    if (
      scrollPosition >= sectionTop - navbarHeight &&
      scrollPosition < sectionTop + sectionHeight - navbarHeight
    ) {
      currentSectionId = "#" + section.id;
    }
  });

  // Update active link
  updateActiveNavLink(currentSectionId);
}

// Update active navigation link
function updateActiveNavLink(targetId) {
  // Remove active class from all nav links
  document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
    link.classList.remove("active");
  });

  // Add active class to the corresponding nav link
  if (targetId) {
    const correspondingLink = document.querySelector(
      `.navbar-nav a[href="${targetId}"]`,
    );
    if (correspondingLink) {
      correspondingLink.classList.add("active");
    }
  }
}

// Initialize contact form functionality
function initContactForm() {
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      sendWhatsAppMessage();
    });
  }
}

// Send message via WhatsApp with form data
function sendWhatsAppMessage() {
  // Get form values
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value;

  // Validate required fields
  if (!name || !phone) {
    alert(
      currentLanguage === "en"
        ? "Please fill in at least your name and phone number."
        : "Por favor completa al menos tu nombre y número de teléfono.",
    );
    return;
  }

  // Construct the WhatsApp message
  let whatsappMessage = `Hello Clean Experts LLC,\n\n`;
  whatsappMessage += `I would like to request a quote for your cleaning services.\n\n`;
  whatsappMessage += `Name: ${name}\n`;
  whatsappMessage += `Phone: ${phone}\n`;
  whatsappMessage += `Email: ${email}\n`;
  whatsappMessage += `Service Interested: ${getServiceName(service)}\n`;

  if (message) {
    whatsappMessage += `Message: ${message}\n`;
  }

  whatsappMessage += `\nPlease contact me at your earliest convenience. Thank you!`;

  // Encode the message for URL
  const encodedMessage = encodeURIComponent(whatsappMessage);

  // WhatsApp number to send the message to
  const whatsappNumber = "+16785497440";

  // Open WhatsApp with the pre-filled message
  window.open(
    `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
    "_blank",
  );

  // Show success message
  alert(
    currentLanguage === "en"
      ? "Thank you! WhatsApp will now open with your pre-filled message. Please send it to contact us."
      : "¡Gracias! WhatsApp se abrirá ahora con tu mensaje pre-llenado. Por favor envíalo para contactarnos.",
  );

  // Optionally reset the form
  document.getElementById("contactForm").reset();
}

// Get service name based on selected value
function getServiceName(serviceValue) {
  const serviceMap = {
    en: {
      "post-construction": "Post-Construction Cleaning",
      "office-disinfection": "Office Disinfection",
      "compliant-services": "Painting Service",
      other: "Other Cleaning Service",
    },
    es: {
      "post-construction": "Limpieza Post-Construcción",
      "office-disinfection": "Desinfección de Oficinas",
      "compliant-services": "Servicios de Pintura",
      other: "Otro Servicio de Limpieza",
    },
  };

  return serviceMap[currentLanguage][serviceValue] || serviceValue;
}
