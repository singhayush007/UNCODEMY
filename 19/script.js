function showSection(index) {
      const links = document.querySelectorAll('.nav-link');
      const sections = document.querySelectorAll('.section');

      links.forEach(link => link.classList.remove('active'));
      sections.forEach(section => section.classList.remove('active'));

      links[index].classList.add('active');
      sections[index].classList.add('active');
    }
