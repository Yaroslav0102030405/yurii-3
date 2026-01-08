const accordion = () => {
  const headers = document.querySelectorAll('.accordion-title');
  const contents = document.querySelectorAll('.accordion-content');

  const closeAll = () => {
    headers.forEach((header, i) => {
      header.classList.remove('active');
      contents[i].style.maxHeight = '0px'; // Вказуємо '0px' для коректної роботи порівняння
    });
  };

  headers.forEach((header, index) => {
    header.addEventListener('click', () => {
      const content = contents[index];

      // Перевіряємо, чи відкрита поточна панель
      const isOpen = header.classList.contains('active');

      if (isOpen) {
        // Якщо відкрита — закриваємо
        header.classList.remove('active');
        content.style.maxHeight = '0px';
      } else {
        // Якщо закрита — закриваємо всі інші та відкриваємо поточну
        closeAll();
        header.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
};

accordion();
