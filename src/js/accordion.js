const accordion = () => {
  const headers = document.querySelectorAll('.accordion-title');
  const contents = document.querySelectorAll('.accordion-content');

  // 1. Функція закриття всіх панелей ТА зняття класів активності
  const closeAll = () => {
    headers.forEach((header, i) => {
      header.classList.remove('active'); // Прибираємо активність з кнопки (стрілка повернеться назад)
      contents[i].style.maxHeight = '0'; // Ховаємо контент
    });
  };

  // 2. ВІДКРИВАЄМО ПЕРШУ СЕКЦІЮ ПРИ ЗАВАНТАЖЕННІ
  if (headers.length > 0) {
    headers[0].classList.add('active'); // Додаємо клас першій кнопці
    contents[0].style.maxHeight = contents[0].scrollHeight + 'px';
  }

  headers.forEach((header, index) => {
    header.addEventListener('click', () => {
      const content = contents[index];
      const isOpen =
        content.style.maxHeight !== '0px' && content.style.maxHeight !== '';

      if (isOpen) {
        // Якщо натиснули на вже відкриту — просто закриваємо її
        header.classList.remove('active');
        content.style.maxHeight = '0';
      } else {
        // Якщо натиснули на закриту — закриваємо ВСІ інші та відкриваємо цю
        closeAll();
        header.classList.add('active'); // Це запустить анімацію повороту SVG
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
};

accordion();
