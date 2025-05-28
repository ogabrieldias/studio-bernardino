// ================ menu icon navbar ================
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let navLinks = document.querySelectorAll('header nav a');

// Menu icon click event
menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// Scroll sections active link
let sections = document.querySelectorAll('section');

window.onscroll = () => {
  // Scroll sections active link
  sections.forEach(seca => {
    let top = window.scrollY;
    let offset = seca.offsetTop - 150;
    let height = seca.offsetHeight;
    let id = seca.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });

  // Sticky navbar
  let header = document.querySelector('.header');
  header.classList.toggle('sticky', window.scrollY > 100);
};

// Remove menu icon when clicking on a nav link
navLinks.forEach(link => {
  link.onclick = () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  };
});

// ================ swiper ================
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  grabCursor: true,
  pagination: {                    
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// ================ dark light mode ================
let darkModeIcon = document.querySelector('#darkMode-icon');
darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle('bx-sun');
  document.body.classList.toggle('dark-mode');
};

// ================ scroll reveal ================
document.addEventListener('DOMContentLoaded', () => {
  ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
  });

  ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
  ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
  ScrollReveal().reveal('.home-content h1, .about-img img', {origin: 'left'});
  ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', {origin: 'right'});
});

// ================ input data collection ================
// Seleciona todos os formulários
const forms = document.querySelectorAll(".contact-form");

// forms.forEach(form => {
//     form.addEventListener("submit", function(e) {
//         e.preventDefault(); // Evita o envio padrão

//         const name = form.querySelector("[name='name']").value;
//         const email = form.querySelector("[name='email']").value;
//         const phone_number = form.querySelector("[name='phone_number']").value;
//         const email_subject = form.querySelector("[name='email_subject']").value;
//         const message = form.querySelector("[name='message']").value;

//         console.log(name, email, phone_number, email_subject, message);
//         alert("Data has been collected successfully!");
//     });
// });

document.querySelector(".send-btn").addEventListener("click", function (e) {
  e.preventDefault(); // Impede o envio do formulário padrão

  // Capturando os valores do formulário
  const name = document.querySelector("[name='name']").value;
  const email = document.querySelector("[name='email']").value;
  const phone_number = document.querySelector("[name='phone_number']").value;
  const email_subject = document.querySelector("[name='email_subject']").value;
  const message = document.querySelector("[name='message']").value;

  // Número do WhatsApp que receberá a mensagem
  const telefoneDestino = "5524998558044"; // DDI 55 (Brasil) + DDD 24 + Número 123456789

  // Criando a mensagem formatada
  const mensagem = 
      `📩 Novo Formulário Recebido:%0A` +
      `👤 Nome: ${name}%0A` +
      `📧 Email: ${email}%0A` +
      `📞 Telefone: ${phone_number}%0A` +
      `📌 Assunto: ${email_subject}%0A` +
      `📝 Mensagem: ${message}`;

  // Criando o link do WhatsApp
  const url = `https://wa.me/${telefoneDestino}?text=${mensagem}`;

  // Abrindo o WhatsApp Web ou App
  window.open(url, "_blank");
});




// Modal
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("portfolioModal");
  const modalOverlay = document.getElementById("modalOverlay");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const modalLink = document.getElementById("modal-link");
  const modalVideo = document.getElementById("modal-video");
  const modalDate = document.getElementById("modal-date");
  const modalRepo = document.getElementById("modal-repo");
  const modalLinkedin = document.getElementById("modal-linkedin");
  const closeBtn = document.querySelector(".bx-x"); // Corrigido para o ícone do X
  const portfolioBoxes = document.querySelectorAll(".portfolio-box");

  portfolioBoxes.forEach(box => {
    box.addEventListener("click", (e) => {
      e.preventDefault(); // impede qualquer comportamento padrão

      const title = box.getAttribute("data-title") || "Título do Projeto";
      const description = box.getAttribute("data-description") || "";
      const link = box.getAttribute("data-link") || "#";
      const video = box.getAttribute("data-video") || "";
      const date = box.getAttribute("data-date") || "";
      const repo = box.getAttribute("data-repo");
      const linkedin = box.getAttribute("data-linkedin");

      modalTitle.textContent = title;
      modalDescription.innerHTML = description;
      modalLink.href = link;

      if (video) {
        modalVideo.src = video + "?autoplay=1&loop=0";
        modalVideo.style.display = "block";
      } else {
        modalVideo.src = "";
        modalVideo.style.display = "none";
      }

      modalDate.textContent = date;
      modalDate.style.display = date ? "inline" : "none";

      modalRepo.href = repo || "#";
      modalRepo.style.display = repo ? "inline-block" : "none";

      modalLinkedin.href = linkedin || "#";
      modalLinkedin.style.display = linkedin ? "inline-block" : "none";

      modal.classList.add("active");
      modalOverlay.classList.add("active");
      document.body.classList.add("modal-open");
    });
  });

  // Função para fechar o modal
  function closeModal() {
    modal.classList.remove("active");
    modalOverlay.classList.remove("active");
    modalVideo.src = ""; // Para o vídeo parar
    document.body.classList.remove("modal-open");
  }

  // Fecha com ícone X
  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }

  // Fecha clicando fora do modal
  modalOverlay.addEventListener("click", closeModal);

  // Fecha com tecla ESC
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" || e.key === "Esc") {
      if (modal.classList.contains("active")) {
        closeModal();
      }
    }
  });
});
