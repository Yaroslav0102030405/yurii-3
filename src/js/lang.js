const htmlEl = document.querySelector('html');
const buttonEl = document.querySelector('.js-container');

buttonEl.addEventListener('click', onClickButton2);

function onClickButton2(e) {
  console.log(e.target.textContent);
  if (e.target.classList.contains('en')) {
    htmlEl.setAttribute('lang', 'en');
    console.log('Привіт');
  } else if (e.target.classList.contains('pl')) {
    htmlEl.setAttribute('lang', 'pl');
  } else if (e.target.classList.contains('ua')) {
    htmlEl.setAttribute('lang', 'ua');
  } else if (e.target.classList.contains('ru')) {
    htmlEl.setAttribute('lang', 'ru');
  }
  return;
}

const homeTexts = {
  header_logo: {
    ua: 'Брокер з нерухомості',
    ru: 'Брокер по недвижимости',
    pl: 'Agent nieruchomości',
    en: 'Real estate broker',
  },
  header_logo2: {
    ua: 'Брокер з нерухомості',
    ru: 'Брокер по недвижимости',
    pl: 'Agent nieruchomości',
    en: 'Real estate broker',
  },
  header_logo3: {
    ua: 'Брокер з нерухомості',
    ru: 'Брокер по недвижимости',
    pl: 'Agent nieruchomości',
    en: 'Real estate broker',
  },
  // навігація
  'header_menu-home': {
    ua: 'Головна',
    ru: 'Главная',
    pl: 'Dom',
    en: 'Home',
  },
  'header_menu-advantages': {
    ua: 'Послуги',
    ru: 'Услуги',
    pl: 'Usługi',
    en: 'Services',
  },
  'header_menu-about': {
    ua: 'Про мене',
    ru: 'Обо мне',
    pl: 'O mnie',
    en: 'About me',
  },
  // 'header_menu-service': {
  //   ua: 'Переваги',
  //   ru: 'Преимущества',
  //   pl: 'Zalety',
  //   en: 'Advantages',
  // },
  'header_menu-cases': {
    ua: 'Кейси',
    ru: 'Кейсы',
    pl: 'Wyniki',
    en: 'Cases',
  },
  'header_menu-contacts': {
    ua: 'Контакти',
    ru: 'Контакты',
    pl: 'Kontakty',
    en: 'Contact',
  },
  // hero section
  'header_banner-pre-title': {
    ua: 'Знайду ідеальний офіс в оренду у Варшаві для вашої компанії',
    ru: 'Найду идеальный офис в аренду в Варшаве для вашей компании',
    pl: 'Znajdę idealne biuro do wynajęcia w Warszawie dla Twojej firmy',
    en: 'I will find the perfect office for rent in Warsaw for your company',
  },
  'header_banner-pre-title-2': {
    ua: '(локальної або міжнародної: від стартапу до корпорації)',
    ru: '(локальной или международной: от стартапа к корпорации)',
    pl: '(lokalny lub międzynarodowy: od startupu do korporacji)',
    en: '(local or international: from startup to corporation)',
  },
  // кнопка
  'header_banner-button': {
    ua: 'Безкоштовна консультація',
    ru: 'Бесплатная консультация',
    pl: 'Darmowa konsultacja',
    en: 'Free consultation',
  },
  // ссилка
  'header_banner-link': {
    ua: 'Або зателефонувати за номером +48 735 775 810',
    ru: 'Или позвонить по номеру +48 735 775 810',
    pl: 'Lub zadzwoń +48 735 775 810',
    en: 'Or call +48 735 775 810',
  },
  // my services
  'advantages_title-1': {
    ua: 'Забудьте про перегляд сотень оголошень про оренду офісів. Більшість з них — неактуальні, або мають приховані недоліки: погана вентиляція, малий паркінг, слабкий інтернет. Я знаю ринок Варшави зсередини, тому відсіюю все зайве. Ви отримаєте 3–5 найкращих варіантів, які на 100% відповідають вашим вимогам',
    ru: 'Забудьте о просмотре сотен объявлений об аренде офисов. Большинство из них – неактуальны, или имеют скрытые недостатки: плохая вентиляция, малый паркинг, слабый интернет. Я знаю рынок Варшавы изнутри, потому отсеиваю все лишнее. Вы получите 3–5 лучших вариантов, которые на 100% отвечают вашим требованиям',
    pl: 'Zapomnij o przeglądaniu setek ogłoszeń wynajmu biur. Większość z nich jest nieistotna lub ma ukryte wady: słabą wentylację, mały parking, słaby internet. Znam warszawski rynek od podszewki, więc filtruję wszystko, co zbędne. Otrzymasz 3-5 najlepszych ofert, które w 100% spełnią Twoje wymagania',
    en: 'Forget about browsing through hundreds of office rental ads. Most of them are irrelevant or have hidden flaws: poor ventilation, small parking, weak internet. I know the Warsaw market inside out, so I filter out everything unnecessary. You will get 3-5 best options that 100% meet your requirements',
  },
  // my services
  'my-services_title-2': {
    ua: 'Я пропоную',
    ru: 'Я предлагаю',
    pl: 'Sugeruję',
    en: 'I suggest',
  },
  // опис послуг 1
  'my-services-desc-1': {
    ua: 'Офіси в офісних будівлях від 2200€ до 5500€/місяць',
    ru: 'Офисы в офисных зданиях от 2200 € до 5500 €/месяц',
    pl: 'Biura w budynkach biurowych od 2200 do 5500 euro/miesiąc',
    en: 'Offices in office buildings from €2,200 to €5,500/month',
  },
  'my-services-desc-2': {
    ua: 'Офіси в бізнес-центрах від 6000€ до 7700€/місяць',
    ru: 'Офисы в бизнес-центрах от 6000€ до 7700€/месяц',
    pl: 'Biura w centrach biznesowych od 6000 do 7700 euro/miesiąc',
    en: 'Offices in business centers from €6,000 to €7,700/month',
  },
  'my-services-desc-3': {
    ua: 'Офіси в хмарочосах Варшави від 8000€ до 13000€/місяць',
    ru: 'Офисы в небоскребах Варшавы от 8000€ до 13000€/месяц',
    pl: 'Biura w warszawskich wieżowcach od 8 000 do 13 000 euro/miesiąc',
    en: 'Offices in Warsaw skyscrapers from €8,000 to €13,000/month',
  },
  about_title1: {
    ua: 'Офіси в офісних будівлях',
    ru: 'Офисы в офисных зданиях',
    pl: 'Biura w budynkach biurowych',
    en: 'Offices in office buildings',
  },
  about_description02: {
    ua: '- це окремі будівлі, які мають різні класи (A, B, C)',
    ru: ' - Это отдельные здания, имеющие разные классы (A, B, C)',
    pl: '- Są to oddzielne budynki posiadające różne klasy (A, B, C)',
    en: '- These are separate buildings that have different classes (A, B, C)',
  },
  about_description03: {
    ua: 'Розташовані по всьому місту у різних районах Варшави',
    ru: 'Расположены по всему городу в разных районах Варшавы',
    pl: 'Znajdują się w różnych dzielnicach Warszawy',
    en: 'Located throughout the city in different districts of Warsaw',
  },
  about_description04: {
    ua: 'Особливості: Часто пропонують кабінетну систему планування',
    ru: 'Особенности: Часто предлагают кабинетную систему планирования',
    pl: 'Cechy: Często oferują system planowania szafek',
    en: 'Features: Often offer a cabinet planning system',
  },
  about_description05: {
    ua: 'Підходять: Малому та середньому бізнесу, локальним компаніям, яким важлива функціональність і паркінг',
    ru: 'Подходят: Малому и среднему бизнесу, локальным компаниям, которым важна функциональность и паркинг',
    pl: 'Odpowiednie dla: Małych i średnich przedsiębiorstw, lokalnych firm ceniących funkcjonalność i parking',
    en: 'Suitable for: Small and medium businesses, local companies that value functionality and parking',
  },
  about_description06: {
    ua: 'Престиж: Низький/Середній',
    ru: 'Престиж: Низкий/Средний',
    pl: 'Prestiż: niski/średni',
    en: 'Prestige: Low/Medium',
  },
  about_description07: {
    ua: 'Ціна (м²) 12€ - 14€',
    ru: 'Цена (м²) 12€ - 14€',
    pl: 'Cena (m²) 12€ - 14€',
    en: 'Price (m²) 12€ - 14€',
  },
  // опис послуга 2
  about_title2: {
    ua: 'Офіси в бізнес-центрах',
    ru: 'Офисы в бизнес-центрах',
    pl: 'Biura w centrach biznesowych',
    en: 'Offices in business centers',
  },
  about_description0222: {
    ua: '- Найпрестижніші офіси на високих поверхах значущих будівель з панорамними видами на місто',
    ru: '- Самые престижные офисы на высоких этажах значимых зданий с панорамными видами на город',
    pl: '- Najbardziej prestiżowe biura na najwyższych piętrach znaczących budynków z panoramicznym widokiem na miasto',
    en: '- The most prestigious offices on the high floors of significant buildings with panoramic views of the city',
  },
  about_description0333: {
    ua: 'Розташовані виключно діловий центр — Rondo ONZ, Rondo Daszyńskiego та вздовж вулиці Emilii Plater.Особливості',
    ru: 'Расположены исключительно деловой центр — Rondo ONZ, Rondo Daszyńskiego и вдоль улицы Emilii Plater',
    pl: 'Położone wyłącznie w centrum biznesowym - Rondzie ONZ, Rondzie Daszyńskiego i wzdłuż ulicy Emilii Plater.',
    en: 'Located exclusively in the business center - Rondo ONZ, Rondo Daszyńskiego and along Emilii Plater Street. Features',
  },
  about_description0444: {
    ua: 'Особливості: Панорамні краєвиди на місто, найвищий рівень безпеки та престижу',
    ru: 'Особенности: Панорамные виды на город, высокий уровень безопасности и престижа',
    pl: 'Cechy: Panoramiczny widok na miasto, najwyższy poziom bezpieczeństwa i prestiż',
    en: 'Features: Panoramic views of the city, the highest level of security and prestige',
  },
  about_description0555: {
    ua: 'Для кого: Банки, юридичні фірми, великі консалтингові компанії, інвестиційні фонди',
    ru: 'Для кого: Банки, юридические фирмы, крупные консалтинговые компании, инвестиционные фонды',
    pl: 'Dla kogo: Banki, kancelarie prawne, duże firmy konsultingowe, fundusze inwestycyjne',
    en: 'For whom: Banks, law firms, large consulting companies, investment funds',
  },
  about_description0666: {
    ua: 'Престиж: Ексклюзивний',
    ru: 'Престиж: Эксклюзивный',
    pl: 'Prestiż: Ekskluzywny',
    en: 'Prestige: Exclusive',
  },
  about_description0777: {
    ua: 'Ціна (м²) 22€ - 25€',
    ru: 'Цена (м²) 22€ - 25€',
    pl: 'Cena (m²) 22€ - 25€',
    en: 'Price (m²) 22€ - 25€',
  },
  // опис послуга 3

  about_description022: {
    ua: '- це сучасні комплекси з розвиненою внутрішньою інфраструктурою (рецепція, охорона, кафе, конференц-зали, (Класи A та A+)',
    ru: '- это современные комплексы с развитой внутренней инфраструктурой (рецепция, охрана, кафе, конференц-залы, (Классы A и A+)',
    pl: '- są to nowoczesne kompleksy z rozwiniętą infrastrukturą wewnętrzną (recepcja, ochrona, kawiarnia, sale konferencyjne, (klasy A i A+)',
    en: '- these are modern complexes with developed internal infrastructure (reception, security, cafe, conference rooms, (Classes A and A+)',
  },
  about_description033: {
    ua: 'Розташовані в ділових районах та центрі міста Wola, Rondo Daszyńskiego, Śródmieście, Mokotów та Domaniewska',
    ru: 'Расположены в деловых районах и центре города Wola, Rondo Daszyńskiego, Śródmieście, Mokotów и Domaniewska',
    pl: 'Zlokalizowany w dzielnicach biznesowych i centrum Woli, Rondo Daszyńskiego, Śródmieściu, Mokotowie i Domaniewskiej',
    en: 'Located in the business districts and city center of Wola, Rondo Daszyńskiego, Śródmieście, Mokotów and Domaniewska',
  },
  about_description044: {
    ua: 'Особливості: Сучасні системи вентиляції, підземні паркінги. Мають сертифікати екологічності (BREEAM/LEED)',
    ru: 'Современные системы вентиляции, подземные паркинги. Имеют сертификаты экологичности (BREEAM/LEED)',
    pl: 'Cechy: Nowoczesne systemy wentylacji, parking podziemny. Posiadają certyfikaty środowiskowe (BREEAM/LEED)',
    en: 'Features: Modern ventilation systems, underground parking. Have environmental certificates (BREEAM/LEED)',
  },
  about_description055: {
    ua: 'Для кого: Корпорації, IT-компанії, міжнародні філії. Тут ви отримуєте "все включено" в межах однієї будівлі',
    ru: 'Для кого: Корпорации, IT компании, международные филиалы. Здесь вы получаете "все включено" в пределах одного здания',
    pl: 'Dla kogo: Korporacje, firmy IT, oddziały międzynarodowe. U nas otrzymasz „all inclusive” w jednym budynku',
    en: 'For whom: Corporations, IT companies, international branches. Here you get "all inclusive" within one building',
  },
  about_description066: {
    ua: 'Престиж: Високий',
    ru: 'Престиж: Высокий',
    pl: 'Prestiż: wysoki',
    en: 'Prestige: High',
  },
  about_description077: {
    ua: 'Ціна (м²) 15€ - 21€',
    ru: 'Цена (м²) 15€ - 21€',
    pl: 'Cena (m²) 15€ - 21€',
    en: 'Price (m²) 15€ - 21€',
  },
  // формат офісу
  // 'my-services_title-03': {
  //   ua: 'Комплектація офісу',
  //   ru: 'Комплектация офиса',
  //   pl: 'Sprzęt biurowy',
  //   en: 'Office equipment',
  // },
  'my-services_title-3': {
    ua: 'можливо вибрати комплектацію офісу',
    ru: 'можно выбрать комплектацию офиса',
    pl: 'możliwość wyboru wyposażenia biura',
    en: 'it is possible to choose the office equipment',
  },
  // опис форматів офісу 1
  'my-services-title-11': {
    ua: 'Офіс без меблів',
    ru: 'Офис без мебели',
    pl: 'Biuro bez mebli',
    en: 'Office without furniture',
  },
  'my-services-desc-11': {
    ua: 'Компанія отримує приміщення без оздоблення, з усіма підведеними комунікаціями. Повний простір для втілення будь-яких ваших рішень',
    ru: 'Компания получает помещение без отделки, со всеми подведенными коммуникациями. Полное пространство для воплощения любых ваших решений',
    pl: 'Firma otrzymuje lokal bez dekoracji, z pełną komunikacją. Pełna przestrzeń do realizacji dowolnych decyzji',
    en: 'The company receives premises without decoration, with all communications connected. Full space for the implementation of any of your decisions',
  },
  // опис форматів офісу 2
  'my-services-title-22': {
    ua: 'Мебльований Офіс',
    ru: 'Меблированный офис',
    pl: 'Umeblowane biuro',
    en: 'Furnished Office',
  },
  'my-services-desc-22': {
    ua: 'Офіс вже оснащений якісними меблями (столи, стільці, системи зберігання) та, за потреби, базовою технікою (принтери, сканери)',
    ru: 'Офис уже оснащен качественной мебелью (столы, стулья, системы хранения) и, при необходимости, базовой техникой (принтеры, сканеры)',
    pl: 'Biuro jest już wyposażone w wysokiej jakości meble (stoły, krzesła, systemy przechowywania) oraz, w razie potrzeby, podstawowy sprzęt (drukarki, skanery)',
    en: 'The office is already equipped with quality furniture (tables, chairs, storage systems) and, if necessary, basic equipment (printers, scanners)',
  },
  // опис форматів офісу 3
  'my-services-title-33': {
    ua: 'Офіс з ремонтом під компанію',
    ru: 'Офис с ремонтом под компанию',
    pl: 'Biuro po remoncie dla firmy',
    en: 'Office with renovation for the company',
  },
  'my-services-desc-33': {
    ua: 'Ми беремо на себе виконання індивідуального ремонту приміщення згідно з вашим технічним завданням. Ви отримуєте офіс "під ключ"',
    ru: 'Мы берем на себя выполнение индивидуального ремонта помещения согласно вашему техническому заданию. Вы получаете офис "под ключ"',
    pl: 'Podejmujemy się indywidualnego remontu lokalu według Państwa specyfikacji technicznej. Otrzymują Państwo biuro pod klucz',
    en: 'We undertake individual renovation of the premises according to your technical specifications. You receive a turnkey office',
  },
  // відео презентація
  video: {
    ua: 'Відеоогляд: як може виглядати ваш офіс у Варшаві',
    ru: 'Видеообзор: как может выглядеть ваш офис в Варшаве',
    pl: 'Recenzja wideo: jak mogłoby wyglądać Twoje biuro w Warszawie',
    en: 'Video review: what your office in Warsaw could look like',
  },
  // мотиви обрати мене
  contacts_logo3: {
    ua: 'Шукаєте офіс у Варшаві? Звертайтеся і я запропоную Вам найкращі варіанти +48 735 775 810',
    ru: 'Ищете офис в Варшаве? Обращайтесь и я предложу Вам самые лучшие варианты +48 735 775 810',
    pl: 'Szukasz biura w Warszawie? Skontaktuj się ze mną, a przedstawię Ci najlepsze opcje. +48 735 775 810',
    en: 'Looking for an office in Warsaw? Contact me and I will offer you the best options +48 735 775 810',
  },
  // про мене
  about_title: {
    ua: 'Ваш партнер з нерухомості у Варшаві',
    ru: 'Ваш партнер по недвижимости в Варшаве',
    pl: 'Twój partner w nieruchomościach w Warszawie',
    en: 'Your real estate partner in Warsaw',
  },
  // опис про мене
  about_description: {
    ua: 'Привіт! Я Юрій Бухтій',
    ru: 'Привет! Меня зовут Юрий Бухтий',
    pl: 'Cześć! Nazywam się Yuriy Bukhty',
    en: 'Hello! My name is Yurii Bukhtii',
  },
  about_description2: {
    ua: 'Брокер — що спеціалізується виключно на представленні інтересів міжнародного бізнесу на ринку комерційної нерухомості Польщі. Я не просто шукаю офіси — я забезпечую «м’яку посадку» вашого бізнесу, мінімізуючи ризики та оптимізуючи операційні витрати',
    ru: 'Брокер — специализирующийся исключительно на представлении интересов международного бизнеса на рынке коммерческой недвижимости Польши. Я не просто ищу офисы — я обеспечиваю «мягкую посадку» вашего бизнеса, минимизируя риски и оптимизируя операционные расходы',
    pl: 'Broker — specjalizujący się wyłącznie w reprezentowaniu interesów międzynarodowych firm na polskim rynku nieruchomości komercyjnych. Nie szukam tylko biur – zapewniam „miękkie lądowanie” dla Twojej firmy, minimalizując ryzyko i optymalizując koszty operacyjne',
    en: 'Broker — specializing exclusively in representing the interests of international businesses in the Polish commercial real estate market. I don`t just look for offices - I ensure a "soft landing" for your business, minimizing risks and optimizing operating costs',
  },
  about_description3: {
    ua: 'Чим я корисний?',
    ru: 'Чем я полезен?',
    pl: 'Jak mogę się przydać?',
    en: 'How can I be useful?',
  },
  about_description4: {
    ua: '1. Я розумію складність корпоративних процедур. Вся моя комунікація, звітність та юридичний супровід відповідають вимогам глобального комплаєнсу',
    ru: '1. Я понимаю сложность корпоративных процедур. Вся моя коммуникация, отчетность и юридическое сопровождение отвечают требованиям глобального комплаенса',
    pl: '1. Rozumiem złożoność procedur korporacyjnych. Cała moja komunikacja, raportowanie i wsparcie prawne spełniają globalne wymogi zgodności',
    en: '1. I understand the complexity of corporate procedures. All my communications, reporting, and legal support meet global compliance requirements',
  },
  about_description5: {
    ua: '2. Ринок Варшави має свої нюанси. Я знаю про майбутні об`єкти ще до того, як вони з`являться на ринку, і розуміємо реальну технічну специфікацію кожної будівлі класу А',
    ru: '2. Рынок Варшавы имеет свои нюансы. Я знаю о будущих объектах еще до того, как они появятся на рынке, и понимаем реальную техническую спецификацию каждого здания класса А',
    pl: '2. Rynek warszawski ma swoje niuanse. Znam nadchodzące nieruchomości, zanim pojawią się na rynku, i rozumiemy rzeczywiste parametry techniczne każdego budynku klasy A',
    en: '2. The Warsaw market has its own nuances. I know about upcoming properties before they appear on the market, and we understand the real technical specifications of each Class A building',
  },
  about_description6: {
    ua: '3. У моєму фокусі — лише енергоефективні будівлі з сертифікатами BREEAM/LEED, які відповідають екологічним цілям вашої компанії',
    ru: '3. В моем фокусе только энергоэффективные здания с сертификатами BREEAM/LEED, которые отвечают экологическим целям вашей компании',
    pl: '3. Skupiam się wyłącznie na budynkach energooszczędnych, posiadających certyfikaty BREEAM/LEED, które spełniają cele środowiskowe Twojej firmy',
    en: '3. My focus is only on energy-efficient buildings with BREEAM/LEED certificates that meet your company`s environmental goals',
  },
  about_description7: {
    ua: 'Моя мета — вибити для вас найкращі умови: від максимальних орендних канікул до бюджетів на оздоблення (Fit-out contributions)',
    ru: 'Моя цель – выбить для вас наилучшие условия: от максимальных арендных каникул до бюджетов на отделку (Fit-out contributions)',
    pl: 'Moim celem jest zapewnienie Ci najlepszej możliwej oferty: od maksymalnego wynajmu wakacyjnego po dofinansowanie wyposażenia (fit-out)',
    en: 'My goal is to get you the best deal possible: from maximum rental vacations to fit-out contributions.',
  },
  // переваги
  'advantages_title-2': {
    ua: 'Чому компанії обираєть мене',
    ru: 'Почему омпании выбирают меня',
    pl: 'Dlaczego firmy wybierają mnie',
    en: 'Why companies choose me',
  },
  'advantages_pre-title-4': {
    ua: 'Ексклюзивна база офісів',
    ru: 'Эксклюзивная база офисов',
    pl: 'Ekskluzywna baza biurowa',
    en: 'Exclusive office base',
  },
  'advantages_pre-title-5': {
    ua: 'Індивідуальний підбір',
    ru: 'Индивидуальный подбор',
    pl: 'Selekcja indywidualna',
    en: 'Individual selection',
  },
  'advantages_pre-title-6': {
    ua: 'Без комісії для орендаря',
    ru: 'Без комиссии для арендатора',
    pl: 'Brak opłat dla najemcy',
    en: 'No fee for the tenant',
  },
  // про ціну
  'advantages_title-5': {
    ua: 'Нульова комісія для орендаря',
    ru: 'Нулевая комиссия для арендатора',
    pl: 'Zerowa prowizja dla najemcy',
    en: 'Zero commission for the tenant',
  },
  'advantages_desc-5': {
    ua: 'Ви отримуєте повний професійний супровід та експертну допомогу з підбору офісу у Варшаві абсолютно безкоштовно, без жодних прихованих платежів чи додаткових комісій. Мої послуги на 100% оплачує власник офісної будівлі',
    ru: 'Вы получаете полное профессиональное сопровождение и экспертную помощь по подбору офиса в Варшаве абсолютно бесплатно, без скрытых платежей или дополнительных комиссий. Мои услуги на 100% оплачивает владелец офисного здания',
    pl: 'Otrzymujesz pełne, profesjonalne wsparcie i fachową pomoc w wyborze biura w Warszawie całkowicie za darmo, bez ukrytych opłat i dodatkowych prowizji. Moje usługi są w 100% finansowane przez właściciela budynku biurowego',
    en: 'You receive full professional support and expert assistance in selecting an office in Warsaw absolutely free of charge, without any hidden fees or additional commissions. My services are 100% paid for by the owner of the office building',
  },
  // процес підбору офісу
  'my-services-title-4': {
    ua: 'Процес підбору офісу',
    ru: 'Процесс подбора офиса',
    pl: 'Proces wyboru biura',
    en: 'Office selection process',
  },
  'my-services-title-41': {
    ua: '1. Аналіз потреб компанії',
    ru: '1. Анализ потребностей компании',
    pl: '1. Analiza potrzeb firmy',
    en: '1. Analysis of company needs',
  },
  'my-services-title-42': {
    ua: 'Я починаю з консультації, щоб зрозуміти ваші потреби, бізнес-цілі та вимоги до локації офісу',
    ru: 'Я начинаю с консультации, чтобы понять ваши потребности, бизнес-цели и требования к локации офиса',
    pl: 'Zaczynam od konsultacji, aby zrozumieć Twoje potrzeby, cele biznesowe i wymagania dotyczące lokalizacji biura',
    en: 'I start with a consultation to understand your needs, business goals, and office location requirements',
  },
  'my-services-title-43': {
    ua: '2. Аналіз доступних приміщень',
    ru: '2. Анализ доступных помещений',
    pl: '2. Analiza dostępnych lokali',
    en: '2. Analysis of available premises',
  },
  'my-services-title-44': {
    ua: 'Компанія отримує перелік доступних об`єктів, які ідеально відповідають його критеріям',
    ru: 'Компания получает перечень доступных объектов, идеально отвечающих его критериям',
    pl: 'Firma otrzymuje listę dostępnych nieruchomości, które idealnie odpowiadają jej kryteriom',
    en: 'The company receives a list of available properties that perfectly match its criteria',
  },
  'my-services-title-45': {
    ua: '3. Перегляд обраних приміщень',
    ru: '3. Просмотр избранных помещений',
    pl: '3. Zobacz wybrane lokale',
    en: '3. View selected premises',
  },
  'my-services-title-46': {
    ua: 'Домовляюсь про зустрічі з власниками та організовую виїзні презентації всіх обраних об`єктів',
    ru: 'Договариваюсь о встречах с владельцами и организую выездные презентации всех выбранных объектов',
    pl: 'Organizuję spotkania z właścicielami i prezentacje terenowe wszystkich wybranych nieruchomości',
    en: 'I arrange meetings with owners and organize field presentations of all selected properties',
  },
  'my-services-title-47': {
    ua: '4. Технічна підтримка компанії',
    ru: '4. Техническая поддержка компании',
    pl: '4. Wsparcie techniczne firmy',
    en: '4. Company technical support',
  },
  'my-services-title-48': {
    ua: 'Надаю аналіз приміщення від наших архітекторів щоб розрахувати потенційну кількість робочих місць',
    ru: 'Предоставляю анализ помещения от наших архитекторов, чтобы рассчитать потенциальное количество рабочих мест',
    pl: 'Dostarczam analizę pomieszczeń sporządzoną przez naszych architektów w celu oszacowania potencjalnej liczby miejsc pracy',
    en: 'I provide a room analysis from our architects to calculate the potential number of jobs',
  },
  'my-services-title-49': {
    ua: '5. Проведення переговорів',
    ru: '5. Проведение переговоров',
    pl: '5. Prowadzenie negocjacji',
    en: '5. Conducting negotiations',
  },
  'my-services-title-50': {
    ua: 'Мої налагоджені бізнес-відносини з власниками приміщень дозволяють добиватися найкращих орендних умов для вашого бізнесу',
    ru: 'Мои отлаженные бизнес-отношения с владельцами помещений позволяют добиваться наилучших арендных условий для вашего бизнеса',
    pl: 'Dzięki moim ugruntowanym relacjom biznesowym z właścicielami nieruchomości możemy zapewnić Państwu najlepsze warunki wynajmu dla Państwa biznesu',
    en: 'My established business relationships with property owners allow us to achieve the best rental conditions for your business',
  },
  'my-services-title-51': {
    ua: '6. Супровід після оренди',
    ru: '6. Сопровождение после аренды',
    pl: '6. Wsparcie po wynajmie',
    en: '6. Post-rental support',
  },
  'my-services-title-52': {
    ua: 'Я залишаюся вашим надійним партнером протягом усього терміну дії договору оренди',
    ru: 'Я остаюсь вашим надежным партнером в течение всего срока действия договора аренды',
    pl: 'Pozostaję Państwa niezawodnym partnerem przez cały okres trwania umowy najmu',
    en: 'I remain your reliable partner throughout the entire term of the lease agreement',
  },
  about_title3: {
    ua: 'Офіси в хмарочосах Варшави',
    ru: 'Офисы в небоскребах Варшавы',
    pl: 'Biura w warszawskich wieżowcach',
    en: 'Offices in Warsaw skyscrapers',
  },
  'my-services-desc-4': {
    ua: 'Офіси в адміністративних будівлях',
    ru: 'Подбор офиса для аренды без мебели',
    pl: 'Wybór biura do wynajęcia bez mebli',
    en: 'Selecting an office for rent without furniture',
  },
  'my-services-desc-5': {
    ua: 'Підбір офісу для оренди з індивідуальним ремонтом під орендаря',
    ru: 'Подбор офиса для аренды с индивидуальным ремонтом под арендатора',
    pl: 'Wybór biura do wynajęcia z indywidualnym remontem dla najemcy',
    en: 'Selection of an office for rent with individual renovation for the tenant',
  },
  // кому я допомогаю
  'advantages_title-6': {
    ua: 'Кому я допомагаю знайти офіс у Варшаві',
    ru: 'Кому я помогаю найти офис в Варшаве',
    pl: 'Komu mogę pomóc znaleźć biuro w Warszawie?',
    en: 'Who do I help find an office in Warsaw?',
  },
  'advantages_pre-title-61': {
    ua: 'Компанії стартапи, які тільки починають свій шлях у Польщі і потребують представницького офісу',
    ru: 'Компании стартапы, которые только начинают свой путь в Польше и нуждаются в представительном офисе',
    pl: 'Firmy typu start-up, które dopiero rozpoczynają swoją działalność w Polsce i potrzebują przedstawicielstwa',
    en: 'Startup companies that are just starting their journey in Poland and need a representative office',
  },
  'advantages_pre-title-62': {
    ua: 'Малий і середній бізнес, який шукають функціональні та доступні офісні приміщення',
    ru: 'Малый и средний бизнес, ищущий функциональные и доступные офисные помещения',
    pl: 'Małe i średnie przedsiębiorstwa poszukujące funkcjonalnej i niedrogiej powierzchni biurowej',
    en: 'Small and medium-sized businesses looking for functional and affordable office space',
  },
  'advantages_pre-title-63': {
    ua: 'Консатинговим та юридичним агенціям які розширюють свою присутність у Варшаві',
    ru: 'Консатинговым и юридическим агентствам, которые расширяют свое присутствие в Варшаве',
    pl: 'Firmy konsultingowe i prawnicze rozszerzają swoją obecność w Warszawie',
    en: 'Consulting and legal agencies expanding their presence in Warsaw',
  },
  'advantages_pre-title-64': {
    ua: 'Фінансові компанії, інвестиційні фонди та банки, яким необхідні офіси високого класу в центрі міста',
    ru: 'Финансовые компании, инвестиционные фонды и банки, которым необходимы офисы высокого класса в центре города',
    pl: 'Firmy finansowe, fundusze inwestycyjne i banki',
    en: 'Financial companies, investment funds and banks',
  },
  'advantages_pre-title-65': {
    ua: 'Міжнародні корпорації, що виходять на ринок Польщі і шукають головний офіс',
    ru: 'Международные корпорации, выходящие на рынок Польши и ищущие головной офис',
    pl: 'Korporacje międzynarodowe wchodzące na rynek polski i poszukujące siedziby głównej',
    en: 'International corporations entering the Polish market and looking for a head office',
  },
  'advantages_pre-title-66': {
    ua: 'Великі IT-компанії та R&D-центри, які шукають ексклюзивні офіси в хмарочосах Варшави',
    ru: 'Большие IT-компании и R&D-центры, которые ищут эксклюзивные офисы в небоскребах Варшавы',
    pl: 'Duże firmy IT i centra badawczo-rozwojowe poszukują ekskluzywnych biur w warszawskich wieżowcach',
    en: 'Large IT companies and R&D centers looking for exclusive offices in Warsaw`s skyscrapers',
  },
  //  кейс 1
  'portfolio-title-00': {
    ua: 'Реалізовані проекти',
    ru: 'Реализованные проекты',
    pl: 'Zrealizowane projekty',
    en: 'Implemented projects',
  },
  'portfolio-title': {
    ua: 'Кейс, який я успішно закрив для іт-стартапу',
    ru: 'Кейс, который я успешно закрыл для ит-стартапа',
    pl: 'Sprawa, którą pomyślnie zamknąłem dla startupu IT',
    en: 'A case I successfully closed for an IT startup',
  },
  'portfolio-title-2': {
    ua: 'Вимоги: сучасний офіс з меблями, в центрі міста в хмарочоці та з гарним виглядом з вікон на місто',
    ru: 'Требования: современный офис с мебелью, в центре города в небоскребе и с красивым видом из окон на город',
    pl: 'Wymagania: nowoczesne biuro z umeblowaniem, w centrum miasta, w wieżowcu, z pięknym widokiem na miasto z okien',
    en: 'Requirements: modern office with furniture, in the city center in a skyscraper and with a beautiful view of the city from the windows',
  },
  'portfolio-title-3': {
    ua: 'Я виконав усі вимоги і іт компанія залишилась задоволена!',
    ru: 'Я выполнил все требования и компания осталась довольна!',
    pl: 'Spełniłem wszystkie wymagania i firma była zadowolona!',
    en: 'I fulfilled all the requirements and the company was satisfied!',
  },
  // кейс 2
  'portfolio-title-21': {
    ua: 'Кейс, який я успішно закрив для компанії',
    ru: 'Кейс, который я успешно закрыл для компании',
    pl: 'Sprawa, którą pomyślnie zamknąłem dla firmy',
    en: 'A case I successfully closed for the company',
  },
  'portfolio-title-22': {
    ua: 'Вимоги: Офіс з меблями в діловому стилі',
    ru: 'Офис с мебелью в деловом стиле',
    pl: 'Biuro z meblami w stylu biznesowym',
    en: 'Office with business-style furniture',
  },
  'portfolio-title-23': {
    ua: 'Компанія дуже задоволена моєю роботою!',
    ru: 'Компания очень довольна моей работой!',
    pl: 'Firma jest bardzo zadowolona z mojej pracy!',
    en: 'The company is very satisfied with my work!',
  },
  // кейс 3
  'portfolio-title-31': {
    ua: 'Кейс, який я успішно закрив для корпорації',
    ru: 'Кейс, который я успешно закрыл для канала YouTube',
    pl: 'Sprawa, którą pomyślnie zamknąłem dla kanału YouTube',
    en: 'A case I successfully closed for the YouTube channel',
  },
  'portfolio-title-32': {
    ua: 'Вимоги: Офіс з меблями та домашньою атмосферою',
    ru: 'Требования: Офис с мебелью и домашней атмосферой',
    pl: 'Wymagania: Biuro z umeblowaniem i domową atmosferą',
    en: 'Requirements: Office with furniture and a homely atmosphere',
  },
  'portfolio-title-33': {
    ua: 'Корпорація залишилась задоволена!',
    ru: 'Корпорация осталась довольна!',
    pl: 'Korporacja była zadowolona!',
    en: 'The corporation was satisfied!',
  },
  // мотивація
  contacts_logo: {
    ua: 'Загалом, я успішно допоміг вже 40 компаніям знайти офіс в оренду. Буду радий допомогти і Вам!',
    ru: 'В общем, я успешно помог уже 40 компаниям найти офис в аренду. Буду рад помочь и вам!',
    pl: 'W sumie pomogłem ponad 50 firmom znaleźć biuro do wynajęcia. Chętnie pomogę również Tobie!',
    en: 'In total, I have successfully helped over 50 companies find an office for rent. I would be happy to help you too!',
  },
  // питання та відповіді
  questions: {
    ua: 'Запитання та відповіді (Q&A)',
    ru: 'Вопросы и ответы (Q&A)',
    pl: 'Pytania i odpowiedzi (Q&A)',
    en: 'Questions and Answers (Q&A)',
  },
  'questions-1': {
    ua: 'Орендна ставка може бути привабливою, але експлуатаційні витрати та рахунки за енергію часто неприємний сюрприз?',
    ru: 'Арендная ставка может быть привлекательной, но эксплуатационные расходы и счета за энергию часто неприятный сюрприз?',
    pl: 'Stawka czynszu może być atrakcyjna, ale koszty eksploatacji i rachunki za energię często bywają niemiłą niespodzianką?',
    en: 'The rental rate may be attractive, but operating costs and energy bills are often an unpleasant surprise?',
  },
  'questions-2': {
    ua: 'Я надаю прозорий розрахунок усіх витрат ще до підписання договору оренди',
    ru: 'Я предоставляю прозрачный расчет всех расходов еще до подписания договора аренды',
    pl: 'Zapewniam przejrzyste wyliczenie wszystkich kosztów jeszcze przed podpisaniem umowy najmu',
    en: 'I provide a transparent calculation of all costs even before signing the lease agreement',
  },
  'questions-3': {
    ua: 'Ми компанія і боїмося підписувати контракт на 5 років, якщо через рік нам може знадобитися вдвічі більше місця?',
    ru: 'Мы компания и боимся подписывать контракт на пять лет, если через год нам может понадобиться вдвое больше места?',
    pl: 'Jesteśmy firmą i boimy się podpisać umowę na 5 lat, skoro za rok możemy potrzebować dwa razy więcej powierzchni?',
    en: 'We are a company and are afraid to sign a 5-year contract if in a year we may need twice as much space?',
  },
  'questions-4': {
    ua: 'Є можливість розширення офісу в межах однієї будівлі або гнучкі терміни оренди',
    ru: 'Есть возможность расширения офиса в пределах одного здания или гибкие сроки аренды',
    pl: 'Czy istnieje możliwość powiększenia biura w tym samym budynku lub elastyczne warunki najmu',
    en: 'Is there a possibility of expanding the office within the same building or flexible lease terms',
  },
  'questions-5': {
    ua: 'Ми малий бізнес і нас великі фонди не будуть слухати або нав`яжуть невигідні умови?',
    ru: 'Мы малый бизнес, и нас большие фонды не будут слушать или навяжут невыгодные условия?',
    pl: 'Jesteśmy małą firmą, a duże fundusze nie chcą nas słuchać lub narzucają nam niekorzystne warunki?',
    en: 'We are a small business and large funds will not listen to us or will impose unfavorable conditions on us?',
  },
  'questions-6': {
    ua: 'Я — ваш сильний голос у переговорах. Домовлюся про умови, які зазвичай отримують лише корпорації',
    ru: 'Я ваш сильный голос в переговорах. Договорюсь об условиях, которые обычно получают только корпорации',
    pl: 'Jestem Twoim silnym głosem w negocjacjach. Wynegocjuję warunki, które zazwyczaj otrzymują tylko korporacje',
    en: 'I am your strong voice in negotiations. I will negotiate conditions that only corporations usually get',
  },
  'questions-7': {
    ua: 'Потрібно, щоб співробітникам було зручно добиратися (метро, трамваї), а поруч були недорогі ланч-кафе?',
    ru: 'Нужно, чтобы сотрудникам было удобно добираться (метро, ​​трамваи), а рядом были недорогие ланч-кафе?',
    pl: 'Potrzebujesz wygodnego transportu dla pracowników (metro, tramwaje) i niedrogich kawiarni w pobliżu?',
    en: 'Do you need employees to have convenient transportation (metro, trams), and inexpensive lunch cafes nearby?',
  },
  'questions-8': {
    ua: 'Я підберу офіс в районах зі зручною логістикою (Mokotów, Wola, Ochota) та розвиненою інфраструктурою',
    ru: 'Я подберу офис в районах с удобной логистикой (Mokotów, Wola, Ochota) и развитой инфраструктурой',
    pl: 'Wybiorę biuro w lokalizacjach z dogodną logistyką (Mokotów, Wola, Ochota) i rozwiniętą infrastrukturą',
    en: 'I will choose an office in areas with convenient logistics (Mokotów, Wola, Ochota) and developed infrastructure',
  },
  'questions-9': {
    ua: 'Польське законодавство (VAT, індексація орендної плати, вимоги BHP) незрозуміло для нашого головного офісу в Нью-Йорку?',
    ru: 'Польское законодательство (VAT, индексация арендной платы, требования BHP) непонятно для нашего головного офиса в Нью-Йорке?',
    pl: 'Polskie przepisy (VAT, indeksacja czynszów, wymogi BHP) są niejasne dla naszej centrali w Nowym Jorku?',
    en: 'Polish legislation (VAT, rent indexation, BHP requirements) is unclear to our head office in New York?',
  },
  'questions-10': {
    ua: 'Я надаю повний юридичний супровід та договори англійською мовою, що відповідають міжнародним стандартам',
    ru: 'Я предоставляю полное юридическое сопровождение и договоры на английском языке, соответствующие международным стандартам',
    pl: 'Zapewniam pełne wsparcie prawne i umowy w języku angielskim, zgodne z międzynarodowymi standardami',
    en: 'I provide full legal support and contracts in English that meet international standards',
  },
  'questions-11': {
    ua: 'Ми глобальна корпорація і нам треба орендувати офіс з сертифікатами BREEAM або LEED?',
    ru: 'Мы глобальная корпорация, и нам нужно арендовать офис с сертификатами BREEAM или LEED?',
    pl: 'Jesteśmy globalną korporacją i potrzebujemy wynająć biuro z certyfikatami BREEAM lub LEED?',
    en: 'We are a global corporation and need to rent an office with BREEAM or LEED certificates?',
  },
  'questions-12': {
    ua: 'Я підберу офіс у будівлях класу А з високим рейтингом енергоефективності та екологічними сертифікатами',
    ru: 'Я подберу офис в зданиях класса А с высоким рейтингом энергоэффективности и экологическими сертификатами',
    pl: 'Wybiorę biuro w budynkach klasy A z wysokimi wskaźnikami efektywności energetycznej i certyfikatami środowiskowymi',
    en: 'I will choose an office in class A buildings with high energy efficiency ratings and environmental certificates',
  },
  // екекекек
  'header_banner-name': {
    ua: 'Yurii Bukhtii',
    ru: 'Yurii Bukhtii',
    pl: 'Yurii Bukhtii',
    en: 'Yurii Bukhtii',
  },
  // футер мотивація
  contacts_logo2: {
    ua: 'З питань оренди офісу у Варшаві зв`язатися зі мною',
    ru: 'По вопросам аренды офиса в Варшаве связаться со мной',
    pl: 'Jeśli masz pytania dotyczące wynajmu biura w Warszawie, skontaktuj się ze mną',
    en: 'For questions about renting an office in Warsaw, contact me',
  },
  form_title: {
    ua: 'З питань оренди офісу у Варшаві зв`язатися зі мною',
    ru: 'По вопросам аренды офиса в Варшаве связаться со мной',
    pl: 'Jeśli masz pytania dotyczące wynajmu biura w Warszawie, skontaktuj się ze mną',
    en: 'For questions about renting an office in Warsaw, contact me',
  },
  form_name: {
    ua: 'Ім`я*',
    ru: 'Имя*',
    pl: 'Imię*',
    en: 'Name*',
  },
  form_tel: {
    ua: 'Телефон*',
    ru: 'Телефон*',
    pl: 'Phone number*',
    en: 'Phone number*',
  },
  form_comment: {
    ua: 'Повідомлення',
    ru: 'Комментарий',
    pl: 'Comment',
    en: 'Message',
  },
  form_btn: {
    ua: 'Відправити',
    ru: 'Отправить',
    pl: 'Wysłać pytanie',
    en: 'Send an enquiry',
  },
  form_title2: {
    ua: 'З питань оренди офісу у Варшаві зв`язатися зі мною',
    ru: 'По вопросам аренды офиса в Варшаве связаться со мной',
    pl: 'Jeśli masz pytania dotyczące wynajmu biura w Warszawie, skontaktuj się ze mną',
    en: 'For questions about renting an office in Warsaw, contact me',
  },
  form_name2: {
    ua: 'Ім`я*',
    ru: 'Имя*',
    pl: 'Imię*',
    en: 'Name*',
  },
  form_tel2: {
    ua: 'Телефон*',
    ru: 'Телефон*',
    pl: 'Phone number*',
    en: 'Phone number*',
  },
  form_comment2: {
    ua: 'Повідомлення',
    ru: 'Комментарий',
    pl: 'Comment',
    en: 'Message',
  },
  form_btn2: {
    ua: 'Відправити',
    ru: 'Отправить',
    pl: 'Wysłać',
    en: 'Send',
  },
  form_answer1: {
    ua: '✅ Повідомлення відправлено',
    ru: '✅ Сообщение отправлено.',
    pl: '✅ Pytanie wysłano',
    en: '✅ Message sent.',
  },
  form_answer12: {
    ua: 'Зв`яжуся з Вами протягом однієї години',
    ru: 'Я свяжусь с Вами в течении одного часа',
    pl: 'Skontaktuję się z Tobą w ciągu godziny',
    en: 'I will contact you within one hour',
  },
  form_answer21: {
    ua: '✅ Повідомлення відправлено',
    ru: '✅ Сообщение отправлено',
    pl: '✅ Wiadomość wysłana',
    en: '✅ Message sent',
  },
  form_answer22: {
    ua: 'Зв`яжуся з Вами протягом однієї години',
    ru: 'Я свяжусь с Вами в течении одного часа',
    pl: 'Skontaktuję się z Tobą w ciągu jednej godziny',
    en: 'I will contact You within one hour',
  },
};

// console.log(htmlEl.lang);
// return;
// const langButtons = document.querySelectorAll('[data-btn]');
const langButtons = document.querySelectorAll('.btn');
const allLangs = ['ua', 'ru', 'pl', 'en'];
const currentPathName = window.location.pathname;
let currentLang = 'ua';
// localStorage.getItem('language') || checkBrowserLang() || 'ua';
let currentTexts = {};

// Проверка пути страницы сайта
function checkPagePathName() {
  switch (currentPathName) {
    case '/index.html':
      currentTexts = homeTexts;
      break;
    // case '/another_page.html':
    //   currentTexts = anotherTexts;
    //   break;

    default:
      currentTexts = homeTexts;
      break;
  }
}
checkPagePathName();

// Изменение языка у текстов
function changeLang() {
  for (const key in currentTexts) {
    let elem = document.querySelector(`[data-lang=${key}]`);
    if (elem) {
      elem.textContent = currentTexts[key][currentLang];
    }
  }
}
changeLang();

// Вешаем обработчики на каждую кнопку
langButtons.forEach(btn => {
  btn.addEventListener('click', event => {
    if (!event.target.classList.contains('header__btn_active')) {
      currentLang = event.target.dataset.btn;
      // localStorage.setItem('language', event.target.dataset.btn);
      resetActiveClass(langButtons, 'header__btn_active');
      btn.classList.add('header__btn_active');
      changeLang();
    }
  });
});

// Сброс активного класса у переданного массива элементов
function resetActiveClass(arr, activeClass) {
  arr.forEach(elem => {
    elem.classList.remove(activeClass);
  });
}

// Проверка активной кнопки
// function checkActiveLangButton(e) {
//   switch (currentLang) {
//     case 'ua':
//       document.querySelector('[data-btn="ua"]');
//       // .classList.add('header__btn_active');
//       htmlEl.setAttribute('lang', 'ua');
//       break;
//     case 'ru':
//       document.querySelector('[data-btn="ru"]');
//       // .classList.add('header__btn_active');
//       htmlEl.setAttribute('lang', 'ru');
//       break;
//     case 'pl':
//       document.querySelector('[data-btn="pl"]');
//       // .classList.add('header__btn_active');
//       htmlEl.setAttribute('lang', 'pl');
//       break;
//     case 'de':
//       document.querySelector('[data-btn="en"]');
//       // .classList.add('header__btn_active');
//       htmlEl.setAttribute('lang', 'en');
//       break;

//     default:
//       document.querySelector('[data-btn="ua"]');
//       // .classList.add('header__btn_active');
//       htmlEl.setAttribute('lang', 'uk');
//       break;
//   }
// }
// checkActiveLangButton();

// Проверка языка браузера
function checkBrowserLang() {
  const navLang = navigator.language.slice(0, 2).toLowerCase();
  const result = allLangs.some(elem => {
    return elem === navLang;
  });
  if (result) {
    return navLang;
  }
}

console.log('navigator.language', checkBrowserLang());
