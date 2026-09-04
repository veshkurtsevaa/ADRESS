// i18n.js — RU/EN dictionary + language switching logic
(function (global) {
  'use strict';

  var DICT = {
    ru: {
      'brand.name': 'ADDRESS',
      'nav.about': 'О нас',
      'nav.service': 'Сервис',
      'nav.contacts': 'Контакты',
      'nav.contactCta': 'Связаться',
      'common.learnMore': 'Подробнее',
      'footer.tagline': 'Кураторские путешествия',
      'footer.rights': '© 2026 ADDRESS. Все права защищены.',

      'home.hero.kicker': 'YOUR PERSONAL GUIDE',
      'home.hero.title': 'ADDRESS',
      'home.hero.subtitle': 'Проект авторских путешествий. Мы создаём поездки индивидуально, продумывая их под ваш ритм, интересы и ожидания.',
      'home.hero.cta': 'Связаться',
      'home.hero.cta2': 'Смотреть индекс',

      'home.marquee.text': 'КУРАТОРСКИЕ ПУТЕШЕСТВИЯ · ОТЕЛИ · ГИДЫ · ИНДИВИДУАЛЬНЫЕ МАРШРУТЫ',

      'home.index.label': 'указатель',
      'home.index.01.title': 'Address Personal',
      'home.index.01.text': 'Гиды по городам, созданные специально для вас.',
      'home.index.02.title': 'Address Tailored',
      'home.index.02.text': 'Индивидуальные маршруты прогулок и досуга.',
      'home.index.03.title': 'Бронирование отелей',
      'home.index.03.text': 'Поможем вам подобрать лучший вариант проживания, учитывая все ваши предпочтения.',
      'home.index.03.bonus': 'Особые условия в партнёрских отелях: апгрейд категории номера, приоритет на ранний заезд и поздний выезд, комплименты в номере, кредиты на spa и трансферы, сопровождение до поездки, во время неё и после.',
      'home.index.04.title': 'Консьерж сервис',
      'home.index.04.text': 'Бронируем рестораны, билеты на мероприятия и экскурсии, организуем трансферы. Берём организацию на себя.',

      'home.quote.num': 'философия',
      'home.quote.text': 'Эстетика, скрытые места, внимание к деталям и лёгкость, когда путешествие складывается идеально.',

      'home.pillars.personal.title': 'Индивидуальный подход',
      'home.pillars.personal.text': 'Каждый маршрут создаётся с нуля под ваш ритм и интересы.',
      'home.pillars.partners.title': 'Прямые партнёрства',
      'home.pillars.partners.text': 'Работаем напрямую с отелями: эксклюзивные условия и апгрейды.',
      'home.pillars.guides.title': 'Гиды со скрытыми местами',
      'home.pillars.guides.text': 'Личные гиды с локациями, которых нет в путеводителях.',
      'home.pillars.trust.title': 'Приватность и доверие',
      'home.pillars.trust.text': 'Конфиденциальность и внимание к деталям на каждом этапе.',

      'home.cta.title': 'Готовы спланировать путешествие?',
      'home.cta.text': 'Напишите нам в Telegram или оставьте заявку, мы свяжемся с вами в течение дня.',
      'home.cta.telegram': 'Написать в Telegram',
      'home.cta.form': 'Оставить заявку',

      'about.s1.title': 'ADDRESS',
      'about.s1.lead': 'Проект авторских путешествий. Мы создаём поездки индивидуально, продумывая их под ваш ритм, интересы и ожидания.',
      'about.s1.note': 'о нас',

      'about.s2.title': 'ОТЕЛИ: ОСНОВА\nЛЮБОГО ПУТЕШЕСТВИЯ',
      'about.s2.lead': 'Мы консультируем, подбираем и бронируем для вас те варианты, которые становятся частью общего впечатления от поездки.',
      'about.s2.foot': 'Работаем напрямую с отелями, чтобы вы получали лучшие условия, приоритет по размещению и внимание к деталям.',
      'about.s2.note': 'отели',

      'about.s3.note': 'как мы работаем?',
      'about.s3.lead': 'Вы делитесь направлением, количеством дней и своими ожиданиями, а мы создаём маршрут, который точно совпадает с вашим настроением и запросом.',

      'about.s4.title': 'ADDRESS GUIDES',
      'about.s4.lead': 'Мы составляем отдельно под каждую поездку и под ваши пожелания. Персональный гайд с редкими местами, неочевидными локациями и полезными подсказками.',
      'about.s4.kicker': 'your personal guide',
      'about.s4.kickerCity': 'your personal city guide',
      'about.s4.tag.italy': 'Италия',
      'about.s4.tag.london': 'Лондон',
      'about.s4.note': 'guides',

      'about.s5.title': 'ADDRESS',
      'about.s5.lead': 'Эстетика, редкие места, внимание к деталям и ощущение лёгкости, когда путешествие складывается идеально.',
      'about.s5.cta': 'связаться с нами',

      'service.hero.label': 'сервисы',
      'service.title': 'Чтобы путешествие складывалось легко',
      'service.intro.text': 'Мы предлагаем несколько форматов сопровождения: от персональных гайдов до полного планирования маршрута.',

      'service.personal.tag': 'personal',
      'service.personal.name': 'Address Personal',
      'service.personal.title': 'Personal',
      'service.personal.text': 'Подборка отелей, ресторанов, музеев, выставок, магазинов и просто интересных точек на карте города собирается специально для вас и вашей поездки, с учётом сезона, района проживания и предпочитаемого досуга.',
      'service.personal.category.hotels': 'Отели',
      'service.personal.category.restaurants': 'Рестораны',
      'service.personal.category.shops': 'Магазины',
      'service.personal.category.exhibitions': 'Выставки',
      'service.personal.category.museums': 'Музеи',
      'service.personal.deliverable1': 'Вы получаете файл с подборками по категориям: с описаниями, ссылками и важными деталями (часы работы, условия бронирования, travel tips).',
      'service.personal.deliverable2': 'А также ссылку на карту в Google Maps для удобного ориентирования в городе.',
      'service.personal.price': 'от 20 000 ₽',
      'service.personal.priceNote': 'в зависимости от запроса',

      'service.tailored.tag': 'tailored',
      'service.tailored.name': 'Address Tailored',
      'service.tailored.title': 'Индивидуальные маршруты прогулок и досуга',
      'service.tailored.text': 'Ваш идеальный день в городе, продуманный до мелочей:',
      'service.tailored.q1': 'где самый большой выбор шампанского по бокалам?',
      'service.tailored.q2': 'в какой магазин заглянуть между музеем и кофе?',
      'service.tailored.q3': 'с какой террасы откроется лучший вид на город?',
      'service.tailored.q4': 'куда ходят ужинать sophisticated locals?',
      'service.tailored.title2': 'Мы продумываем логистику, тайминг и удобные маршруты',
      'service.tailored.text2': 'Вам остаётся только наслаждаться городом.',
      'service.tailored.deliverable': 'Вы получите файл с маршрутом по дням с примерным таймингом и ссылку на карту в Google Maps с готовыми маршрутами.',
      'service.tailored.price': '15 000 ₽ / день',
      'service.tailored.priceNote': 'услуга доступна от двух дней',

      'service.hotels.tag': 'отели',
      'service.hotels.title': 'Бронирование отелей',
      'service.hotels.text': 'Поможем вам подобрать лучший вариант проживания, учитывая все ваши предпочтения: район, атмосферу, бюджет и повод поездки.',
      'service.hotels.bonus1': 'особые условия и привилегии в партнёрских отелях',
      'service.hotels.bonus2': 'апгрейд категории номера при наличии',
      'service.hotels.bonus3': 'приоритет на ранний заезд и поздний выезд',
      'service.hotels.bonus4': 'комплименты в номере, кредиты на spa и трансферы',
      'service.hotels.bonus5': 'сопровождение до поездки, во время неё и после',

      'service.concierge.tag': 'concierge',
      'service.concierge.name': 'Консьерж сервис',
      'service.concierge.title': 'Бронируем для вас рестораны, билеты на мероприятия и экскурсии.',
      'service.concierge.text': 'Берём на себя организационные детали, чтобы путешествие было максимально комфортным.',
      'service.concierge.price': 'от 5 000 ₽',

      'service.closing.text1': 'Если вы планируете поездку и хотите, чтобы она была продумана до деталей, напишите нам.',
      'service.closing.text2': 'Мы подберём формат сопровождения и создадим путешествие именно для вас.',
      'service.closing.cta': 'Связаться с нами',

      'contacts.title': 'Контакты',
      'contacts.hero.line1': 'Расскажите, каким вы видите своё путешествие.',
      'contacts.hero.line2': 'Мы свяжемся с вами в течение дня.',

      'contacts.channel.telegram': 'написать нам ↗',
      'contacts.copy': 'скопировать',
      'contacts.copied': 'скопировано',

      'contacts.plan.title': 'НАЧНИТЕ ПЛАНИРОВАТЬ СВОЮ ПОЕЗДКУ',
      'contacts.plan.sub': 'Мы свяжемся с вами как можно скорее',
      'contacts.plan.where': 'Куда вы хотите поехать?',
      'contacts.plan.when': 'Когда планируете поездку?',
      'contacts.plan.days': 'На сколько дней?',
      'contacts.plan.firstName': 'Имя',
      'contacts.plan.lastName': 'Фамилия',
      'contacts.plan.email': 'Адрес электронной почты',
      'contacts.plan.phone': 'Номер телефона',
      'contacts.plan.comments': 'Есть пожелания или вопросы?',
      'contacts.plan.submit': 'Запросить путешествие',

      'contacts.interest.label': 'Меня интересует…',
      'contacts.interest.personal': 'Address personal',
      'contacts.interest.tailored': 'Address tailored',
      'contacts.interest.hotels': 'Отели',
      'contacts.interest.concierge': 'Консьерж',
      'contacts.interest.other': 'Свой запрос',

      'contacts.form.name': 'Имя',
      'contacts.form.email': 'Почта',
      'contacts.form.message': 'Сообщение',
      'contacts.form.submit': 'Отправить',
      'contacts.form.success': 'Спасибо, мы свяжемся с вами в течение дня.',
      'contacts.form.error': 'Не получилось отправить. Попробуйте ещё раз или напишите нам напрямую.',
      'contacts.form.validation.required': 'Заполните это поле.',
      'contacts.form.validation.email': 'Введите корректный email.',
      'contacts.form.validation.phone': 'Неверный номер телефона.',

      'contacts.info.telegram.label': 'Telegram',
      'contacts.info.title': 'Контактная информация',
      'contacts.info.email.label': 'Почта',
      'contacts.info.phone.label': 'Телефон'
    },
    en: {
      'brand.name': 'ADDRESS',
      'nav.about': 'About Us',
      'nav.service': 'Service',
      'nav.contacts': 'Contacts',
      'nav.contactCta': 'Get in Touch',
      'common.learnMore': 'Learn more',
      'footer.tagline': 'Curated travel experiences',
      'footer.rights': '© 2026 ADDRESS. All rights reserved.',

      'home.hero.kicker': 'YOUR PERSONAL GUIDE',
      'home.hero.title': 'ADDRESS',
      'home.hero.subtitle': 'A project of signature travel. We design each trip individually, shaping it around your rhythm, interests, and expectations.',
      'home.hero.cta': 'Get in Touch',
      'home.hero.cta2': 'View Index',

      'home.marquee.text': 'CURATED TRAVEL · HOTELS · GUIDES · TAILORED ITINERARIES',

      'home.index.label': 'index',
      'home.index.01.title': 'Address Personal',
      'home.index.01.text': 'City guides made especially for you.',
      'home.index.02.title': 'Address Tailored',
      'home.index.02.text': 'Personalized routes for walks and leisure.',
      'home.index.03.title': 'Hotel Booking',
      'home.index.03.text': 'We help you find the best place to stay, with every one of your preferences in mind.',
      'home.index.03.bonus': 'Special conditions at our partner hotels: an upgraded room category, priority for early arrival and late departure, treats in your room, spa credits and transfers, plus support before, during and after the trip.',
      'home.index.04.title': 'Concierge Service',
      'home.index.04.text': 'We book restaurants, event tickets and tours, and arrange transfers. The organizing is on us.',

      'home.quote.num': 'philosophy',
      'home.quote.text': 'Aesthetics, hidden places, attention to detail, and the feeling of ease when a journey comes together perfectly.',

      'home.pillars.personal.title': 'Personal Approach',
      'home.pillars.personal.text': 'Every itinerary is built from scratch around your rhythm and interests.',
      'home.pillars.partners.title': 'Direct Partnerships',
      'home.pillars.partners.text': 'We work directly with hotels: exclusive rates and upgrades.',
      'home.pillars.guides.title': 'Guides With Hidden Places',
      'home.pillars.guides.text': 'Personal guides with locations no guidebook lists.',
      'home.pillars.trust.title': 'Privacy & Trust',
      'home.pillars.trust.text': 'Confidentiality and attention to detail at every step.',

      'home.cta.title': 'Ready to plan your journey?',
      'home.cta.text': "Message us on Telegram or leave a request and we'll get back to you within a day.",
      'home.cta.telegram': 'Message on Telegram',
      'home.cta.form': 'Leave a Request',

      'about.s1.title': 'ADDRESS',
      'about.s1.lead': 'A project of authored travel. We build every trip individually, shaping it around your rhythm, your interests and what you expect from it.',
      'about.s1.note': 'about us',

      'about.s2.title': 'HOTELS: THE FOUNDATION\nOF ANY JOURNEY',
      'about.s2.lead': 'We advise, select and book the stays that become part of how the whole trip feels.',
      'about.s2.foot': 'We work with hotels directly, so you get the best conditions, priority on rooms and attention to detail.',
      'about.s2.note': 'hotels',

      'about.s3.note': 'how do we work?',
      'about.s3.lead': 'You share the destination, the number of days and what you are hoping for, and we build an itinerary that matches your mood and your request exactly.',

      'about.s4.title': 'ADDRESS GUIDES',
      'about.s4.lead': 'We put one together for every trip and every wish. A personal guide with rare places, unexpected locations and useful hints.',
      'about.s4.kicker': 'your personal guide',
      'about.s4.kickerCity': 'your personal city guide',
      'about.s4.tag.italy': 'Италия',
      'about.s4.tag.london': 'Лондон',
      'about.s4.note': 'guides',

      'about.s5.title': 'ADDRESS',
      'about.s5.lead': 'Aesthetics, rare places, attention to detail and the feeling of ease when a journey comes together perfectly.',
      'about.s5.cta': 'get in touch',

      'service.hero.label': 'services',
      'service.title': 'For a Journey That Comes Together Effortlessly',
      'service.intro.text': 'We offer several formats of support, from personal guides to complete itinerary planning.',

      'service.personal.tag': 'personal',
      'service.personal.name': 'Address Personal',
      'service.personal.title': 'Personal',
      'service.personal.text': 'A curated selection of hotels, restaurants, museums, exhibitions, shops, and unique spots around the city, carefully tailored to the season, where you are staying, and the kinds of experiences you enjoy.',
      'service.personal.category.hotels': 'Hotels',
      'service.personal.category.restaurants': 'Restaurants',
      'service.personal.category.shops': 'Shops',
      'service.personal.category.exhibitions': 'Exhibitions',
      'service.personal.category.museums': 'Museums',
      'service.personal.deliverable1': 'You receive a file with curated picks by category: descriptions, links, and key details (opening hours, booking conditions, travel tips).',
      'service.personal.deliverable2': 'Plus a Google Maps link for easy orientation around the city.',
      'service.personal.price': 'from €200',
      'service.personal.priceNote': 'depending on your request',

      'service.tailored.tag': 'tailored',
      'service.tailored.name': 'Address Tailored',
      'service.tailored.title': 'Personalized Routes for Walks and Leisure',
      'service.tailored.text': 'Your ideal day in the city, planned down to the smallest detail:',
      'service.tailored.q1': 'which museum to visit without the queues?',
      'service.tailored.q2': 'where to find the best local spots?',
      'service.tailored.q3': 'where to enjoy specialty coffee?',
      'service.tailored.q4': 'where to have breakfast?',
      'service.tailored.title2': 'We Plan the Logistics, Timing, and Convenient Routes',
      'service.tailored.text2': "All that's left is to enjoy the city.",
      'service.tailored.deliverable': "You'll receive a file with your itinerary day by day, with approximate timing and a Google Maps link with the routes ready to go.",
      'service.tailored.price': '€150 / day',
      'service.tailored.priceNote': 'available from two days',

      'service.hotels.tag': 'hotels',
      'service.hotels.title': 'Hotel Booking',
      'service.hotels.text': 'We help you find the best place to stay, with every one of your preferences in mind: the neighborhood, the atmosphere, the budget, and the reason for the trip.',
      'service.hotels.bonus1': 'special conditions and privileges at our partner hotels',
      'service.hotels.bonus2': 'an upgraded room category, subject to availability',
      'service.hotels.bonus3': 'priority for early arrival and late departure',
      'service.hotels.bonus4': 'treats in your room, spa credits and transfers',
      'service.hotels.bonus5': 'support before, during and after the trip',

      'service.concierge.tag': 'concierge',
      'service.concierge.name': 'Concierge Service',
      'service.concierge.title': 'We book restaurants, event tickets and tours for you.',
      'service.concierge.text': 'We take care of the organizational details so your trip is as comfortable as possible.',
      'service.concierge.price': 'from €50',

      'service.closing.text1': 'Planning a trip and want it thought through to the very last detail? Write to us.',
      'service.closing.text2': "We'll choose the right format of support and create a journey made just for you.",
      'service.closing.cta': 'Get in Touch',

      'contacts.title': 'Contacts',
      'contacts.hero.line1': 'Tell us how you picture your journey.',
      'contacts.hero.line2': "We'll get back to you within a day.",

      'contacts.channel.telegram': 'message us ↗',
      'contacts.copy': 'copy',
      'contacts.copied': 'copied',

      'contacts.plan.title': 'START PLANNING YOUR TRIP',
      'contacts.plan.sub': 'We will get back to you as soon as we can',
      'contacts.plan.where': 'Where would you like to go?',
      'contacts.plan.when': 'When are you planning to travel?',
      'contacts.plan.days': 'How long for?',
      'contacts.plan.firstName': 'First name',
      'contacts.plan.lastName': 'Last name',
      'contacts.plan.email': 'Email address',
      'contacts.plan.phone': 'Phone number',
      'contacts.plan.comments': 'Anything specific you would like us to know?',
      'contacts.plan.submit': 'Request my trip',

      'contacts.interest.label': "I'm interested in…",
      'contacts.interest.personal': 'Address personal',
      'contacts.interest.tailored': 'Address tailored',
      'contacts.interest.hotels': 'Hotels',
      'contacts.interest.concierge': 'Concierge',
      'contacts.interest.other': 'Something else',

      'contacts.form.name': 'Name',
      'contacts.form.email': 'Email',
      'contacts.form.message': 'Message',
      'contacts.form.submit': 'Send',
      'contacts.form.success': "Thank you, we'll get back to you within a day.",
      'contacts.form.error': 'Something went wrong. Please try again or reach us directly.',
      'contacts.form.validation.required': 'Please fill in this field.',
      'contacts.form.validation.email': 'Please enter a valid email address.',
      'contacts.form.validation.phone': 'Invalid phone number.',

      'contacts.info.telegram.label': 'Telegram',
      'contacts.info.title': 'Contact Information',
      'contacts.info.email.label': 'Email',
      'contacts.info.phone.label': 'Phone'
    }
  };

  var STORAGE_KEY = 'address-lang';
  var current = 'en';

  function detectDefault() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'ru' || saved === 'en') return saved;
    } catch (e) {}
    return (navigator.language || '').toLowerCase().indexOf('ru') === 0 ? 'ru' : 'en';
  }

  function translate(lang) {
    var dict = DICT[lang] || DICT.en;
    document.documentElement.setAttribute('lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
    });
    document.querySelectorAll('[data-lang-toggle]').forEach(function (btn) {
      var cur = btn.querySelector('.lang-toggle__current');
      var tgt = btn.querySelector('.lang-toggle__target');
      if (cur && tgt) {
        cur.textContent = lang.toUpperCase();
        tgt.textContent = (lang === 'ru' ? 'en' : 'ru').toUpperCase();
      }
    });
  }

  function setLang(lang) {
    current = lang === 'ru' ? 'ru' : 'en';
    try { localStorage.setItem(STORAGE_KEY, current); } catch (e) {}
    translate(current);
    document.dispatchEvent(new CustomEvent('address:langchange', { detail: { lang: current } }));
  }

  function t(key) {
    var dict = DICT[current] || DICT.en;
    return dict[key] !== undefined ? dict[key] : key;
  }

  document.addEventListener('DOMContentLoaded', function () {
    setLang(detectDefault());
    document.querySelectorAll('[data-lang-toggle]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLang(current === 'ru' ? 'en' : 'ru');
      });
    });
  });

  global.addressI18n = { setLang: setLang, t: t, getLang: function () { return current; } };
})(window);
