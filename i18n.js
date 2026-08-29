// i18n.js — RU/EN dictionary + language switching logic
(function (global) {
  'use strict';

  var DICT = {
    ru: {
      'brand.name': 'ADDRESS',
      'nav.about': 'О нас',
      'nav.service': 'Сервис',
      'nav.contacts': 'Контакты',
      'nav.contactCta': 'Связаться',
      'common.learnMore': 'Подробнее',
      'footer.tagline': 'Кураторские путешествия',
      'footer.rights': '© 2026 ADDRESS. Все права защищены.',

      'home.hero.title': 'ADDRESS',
      'home.hero.subtitle': 'Проект авторских путешествий. Мы создаем поездки индивидуально, продумывая их под ваш ритм, интересы и ожидания.',
      'home.hero.cta': 'Связаться',
      'home.hero.cta2': 'Смотреть индекс',

      'home.marquee.text': 'КУРАТОРСКИЕ ПУТЕШЕСТВИЯ · ОТЕЛИ · ГИДЫ · ИНДИВИДУАЛЬНЫЕ МАРШРУТЫ',

      'home.index.label': 'указатель',
      'home.index.01.title': 'Personal',
      'home.index.01.text': 'Персональная подборка отелей, ресторанов, музеев и мест под ваш маршрут — с описаниями, ссылками и картой',
      'home.index.02.title': 'Tailored',
      'home.index.02.text': 'Индивидуальные маршруты прогулок и досуга на каждый день, с логистикой и таймингом',
      'home.index.03.title': 'Concierge',
      'home.index.03.text': 'Бронируем отели, рестораны и билеты на мероприятия — берём организацию на себя',
      'home.index.04.title': 'О нас',
      'home.index.04.text': 'Команда, которая проектирует путешествие вокруг вас — от выбора отеля до последней детали маршрута',
      'home.index.05.title': 'Контакты',
      'home.index.05.text': 'Расскажите о своей поездке — мы свяжемся в течение дня',

      'home.quote.num': 'философия',
      'home.quote.text': 'Эстетика, скрытые места, внимание к деталям и лёгкость, когда путешествие складывается идеально',

      'home.pillars.personal.title': 'Индивидуальный подход',
      'home.pillars.personal.text': 'Каждый маршрут создаётся с нуля под ваш ритм и интересы',
      'home.pillars.partners.title': 'Прямые партнёрства',
      'home.pillars.partners.text': 'Работаем напрямую с отелями — эксклюзивные условия и апгрейды',
      'home.pillars.guides.title': 'Гиды со скрытыми местами',
      'home.pillars.guides.text': 'Личные гиды с локациями, которых нет в путеводителях',
      'home.pillars.trust.title': 'Приватность и доверие',
      'home.pillars.trust.text': 'Конфиденциальность и внимание к деталям на каждом этапе',

      'home.cta.title': 'Готовы спланировать путешествие?',
      'home.cta.text': 'Напишите нам в Telegram или оставьте заявку — мы свяжемся с вами в течение дня',
      'home.cta.telegram': 'Написать в Telegram',
      'home.cta.form': 'Оставить заявку',

      'about.s1.title': 'ADDRESS',
      'about.s1.lead': 'Проект авторских путешествий. Мы создаём поездки индивидуально, продумывая их под ваш ритм, интересы и ожидания.',
      'about.s1.note': 'о нас',

      'about.s2.title': 'ОТЕЛИ — ОСНОВА\nЛЮБОГО ПУТЕШЕСТВИЯ',
      'about.s2.lead': 'Мы консультируем, подбираем и бронируем для вас те варианты, которые становятся частью общего впечатления от поездки.',
      'about.s2.foot': 'Работаем напрямую с отелями, чтобы вы получали лучшие условия, приоритет по размещению и внимание к деталям.',
      'about.s2.note': 'отели',

      'about.s3.note': 'как мы работаем?',
      'about.s3.lead': 'Вы делитесь направлением, количеством дней и своими ожиданиями — мы создаём маршрут, который точно совпадает с вашим настроением и запросом.',

      'about.s4.title': 'ADDRESS GUIDES',
      'about.s4.lead': 'Мы составляем отдельно под каждую поездку и под ваши пожелания. Персональный гайд с редкими местами, неочевидными локациями и полезными подсказками.',
      'about.s4.kicker': 'your personal guide',
      'about.s4.kickerCity': 'your personal city guide',
      'about.s4.tag.italy': 'Италия',
      'about.s4.tag.london': 'Лондон',
      'about.s4.note': 'guides',

      'about.s5.title': 'ADDRESS',
      'about.s5.lead': 'Эстетика, редкие места, внимание к деталям и ощущение лёгкости, когда путешествие складывается идеально.',
      'about.s5.cta': 'связаться с нами',

      'service.hero.label': 'сервисы',
      'service.title': 'Чтобы путешествие складывалось легко',
      'service.intro.text': 'Мы предлагаем несколько форматов сопровождения: от персональных гайдов до полного планирования маршрута',

      'service.personal.tag': 'personal',
      'service.personal.title': 'Personal',
      'service.personal.text': 'Подборка отелей, ресторанов, музеев, выставок, магазинов и просто интересных точек на карте города собирается специально для вас и вашей поездки — с учётом сезона, района проживания и предпочитаемого досуга',
      'service.personal.category.hotels': 'Отели',
      'service.personal.category.restaurants': 'Рестораны',
      'service.personal.category.shops': 'Магазины',
      'service.personal.category.exhibitions': 'Выставки',
      'service.personal.category.museums': 'Музеи',
      'service.personal.deliverable1': 'Вы получаете файл с подборками по категориям: с описаниями, ссылками и важными деталями (часы работы, условия бронирования, travel tips)',
      'service.personal.deliverable2': 'А также ссылку на карту в Google Maps для удобного ориентирования в городе',
      'service.personal.price': 'от 20 000 ₽',
      'service.personal.priceNote': 'в зависимости от запроса',

      'service.tailored.tag': 'tailored',
      'service.tailored.title': 'Индивидуальные маршруты прогулок и досуга',
      'service.tailored.text': 'Ваш идеальный день в городе, продуманный до мелочей:',
      'service.tailored.q1': 'где самый большой выбор шампанского по бокалам?',
      'service.tailored.q2': 'в какой магазин заглянуть между музеем и кофе?',
      'service.tailored.q3': 'с какой террасы откроется лучший вид на город?',
      'service.tailored.q4': 'куда ходят ужинать sophisticated locals?',
      'service.tailored.title2': 'Мы продумываем логистику, тайминг и удобные маршруты',
      'service.tailored.text2': 'Вам остаётся только наслаждаться городом',
      'service.tailored.deliverable': 'Вы получите файл с маршрутом по дням с примерным таймингом и ссылку на карту в Google Maps с готовыми маршрутами',
      'service.tailored.price': '15 000 ₽ / день',
      'service.tailored.priceNote': 'услуга доступна от двух дней',

      'service.concierge.tag': 'concierge',
      'service.concierge.title': 'Мы бронируем для вас отели, рестораны и билеты на мероприятия',
      'service.concierge.text': 'Берём на себя организационные детали, чтобы путешествие было максимально комфортным',
      'service.concierge.price': 'от 5 000 ₽',

      'service.closing.text1': 'Если вы планируете поездку и хотите, чтобы она была продумана до деталей — напишите нам',
      'service.closing.text2': 'Мы подберём формат сопровождения и создадим путешествие именно для вас',
      'service.closing.cta': 'Связаться с нами',

      'contacts.title': 'Контакты',
      'contacts.hero.line1': 'Расскажите, каким вы видите своё путешествие.',
      'contacts.hero.line2': 'Мы свяжемся с вами в течение дня.',

      'contacts.interest.label': 'Меня интересует…',
      'contacts.interest.personal': 'Персональное',
      'contacts.interest.tailored': 'Индивидуальное',
      'contacts.interest.concierge': 'Консьерж',
      'contacts.interest.other': 'Свой запрос',

      'contacts.form.name': 'Имя',
      'contacts.form.email': 'Почта',
      'contacts.form.message': 'Сообщение',
      'contacts.form.submit': 'Отправить',
      'contacts.form.success': 'Спасибо — мы свяжемся с вами в течение дня',
      'contacts.form.error': 'Что-то пошло не так. Попробуйте ещё раз или напишите нам напрямую',
      'contacts.form.validation.required': 'Заполните это поле',
      'contacts.form.validation.email': 'Введите корректный email',

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

      'home.hero.title': 'ADDRESS',
      'home.hero.subtitle': 'A project of signature travel. We design each trip individually, shaping it around your rhythm, interests, and expectations.',
      'home.hero.cta': 'Get in Touch',
      'home.hero.cta2': 'View Index',

      'home.marquee.text': 'CURATED TRAVEL · HOTELS · GUIDES · TAILORED ITINERARIES',

      'home.index.label': 'index',
      'home.index.01.title': 'Personal',
      'home.index.01.text': 'A personal selection of hotels, restaurants, museums, and places tailored to your route — with descriptions, links, and a map',
      'home.index.02.title': 'Tailored',
      'home.index.02.text': 'Personalized daily routes for walks and leisure, with logistics and timing planned out',
      'home.index.03.title': 'Concierge',
      'home.index.03.text': 'We book hotels, restaurants, and event tickets — taking the organizing off your hands',
      'home.index.04.title': 'About Us',
      'home.index.04.text': 'A team that designs the journey around you, from choosing the hotel to the very last detail',
      'home.index.05.title': 'Contacts',
      'home.index.05.text': "Tell us about your journey — we'll get back to you within a day",

      'home.quote.num': 'philosophy',
      'home.quote.text': 'Aesthetics, hidden places, attention to detail, and the feeling of ease when a journey comes together perfectly',

      'home.pillars.personal.title': 'Personal Approach',
      'home.pillars.personal.text': 'Every itinerary is built from scratch around your rhythm and interests',
      'home.pillars.partners.title': 'Direct Partnerships',
      'home.pillars.partners.text': 'We work directly with hotels — exclusive rates and upgrades',
      'home.pillars.guides.title': 'Guides With Hidden Places',
      'home.pillars.guides.text': 'Personal guides with locations no guidebook lists',
      'home.pillars.trust.title': 'Privacy & Trust',
      'home.pillars.trust.text': 'Confidentiality and attention to detail at every step',

      'home.cta.title': 'Ready to plan your journey?',
      'home.cta.text': "Message us on Telegram or leave a request — we'll get back to you within a day",
      'home.cta.telegram': 'Message on Telegram',
      'home.cta.form': 'Leave a Request',

      'about.s1.title': 'ADDRESS',
      'about.s1.lead': 'A project of authored travel. We build every trip individually, shaping it around your rhythm, your interests and what you expect from it.',
      'about.s1.note': 'about us',

      'about.s2.title': 'HOTELS — THE FOUNDATION\nOF ANY JOURNEY',
      'about.s2.lead': 'We advise, select and book the stays that become part of how the whole trip feels.',
      'about.s2.foot': 'We work with hotels directly, so you get the best conditions, priority on rooms and attention to detail.',
      'about.s2.note': 'hotels',

      'about.s3.note': 'how do we work?',
      'about.s3.lead': 'You share the destination, the number of days and what you are hoping for — we build an itinerary that matches your mood and your request exactly.',

      'about.s4.title': 'ADDRESS GUIDES',
      'about.s4.lead': 'We put one together for every trip and every wish. A personal guide with rare places, non-obvious locations and useful hints.',
      'about.s4.kicker': 'your personal guide',
      'about.s4.kickerCity': 'your personal city guide',
      'about.s4.tag.italy': 'Италия',
      'about.s4.tag.london': 'Лондон',
      'about.s4.note': 'guides',

      'about.s5.title': 'ADDRESS',
      'about.s5.lead': 'Aesthetics, rare places, attention to detail and the feeling of ease when a journey comes together perfectly.',
      'about.s5.cta': 'get in touch',

      'service.hero.label': 'services',
      'service.title': 'For a Journey That Comes Together Effortlessly',
      'service.intro.text': 'We offer several formats of support — from personal guides to complete itinerary planning',

      'service.personal.tag': 'personal',
      'service.personal.title': 'Personal',
      'service.personal.text': 'A curated selection of hotels, restaurants, museums, exhibitions, shops, and simply interesting spots on the city map, put together specifically for you and your trip — with the season, neighborhood, and your preferred pace in mind',
      'service.personal.category.hotels': 'Hotels',
      'service.personal.category.restaurants': 'Restaurants',
      'service.personal.category.shops': 'Shops',
      'service.personal.category.exhibitions': 'Exhibitions',
      'service.personal.category.museums': 'Museums',
      'service.personal.deliverable1': 'You receive a file with curated picks by category — descriptions, links, and key details (opening hours, booking conditions, travel tips)',
      'service.personal.deliverable2': 'Plus a Google Maps link for easy orientation around the city',
      'service.personal.price': 'from 20 000 ₽',
      'service.personal.priceNote': 'depending on your request',

      'service.tailored.tag': 'tailored',
      'service.tailored.title': 'Personalized Routes for Walks and Leisure',
      'service.tailored.text': 'Your ideal day in the city, planned down to the smallest detail:',
      'service.tailored.q1': "where's the widest by-the-glass champagne selection?",
      'service.tailored.q2': 'which shop is worth a stop between the museum and coffee?',
      'service.tailored.q3': 'which terrace has the best view of the city?',
      'service.tailored.q4': 'where do sophisticated locals go for dinner?',
      'service.tailored.title2': 'We Plan the Logistics, Timing, and Convenient Routes',
      'service.tailored.text2': "All that's left is to enjoy the city",
      'service.tailored.deliverable': "You'll receive a day-by-day itinerary file with approximate timing and a Google Maps link with the routes ready to go",
      'service.tailored.price': '15 000 ₽ / day',
      'service.tailored.priceNote': 'available from two days',

      'service.concierge.tag': 'concierge',
      'service.concierge.title': 'We Book Your Hotels, Restaurants, and Event Tickets',
      'service.concierge.text': 'We take care of the organizational details so your trip is as comfortable as possible',
      'service.concierge.price': 'from 5 000 ₽',

      'service.closing.text1': 'Planning a trip and want it thought through to the very last detail? Write to us',
      'service.closing.text2': "We'll choose the right format of support and create a journey made just for you",
      'service.closing.cta': 'Get in Touch',

      'contacts.title': 'Contacts',
      'contacts.hero.line1': 'Tell us how you picture your journey.',
      'contacts.hero.line2': "We'll get back to you within a day.",

      'contacts.interest.label': "I'm interested in…",
      'contacts.interest.personal': 'Personal',
      'contacts.interest.tailored': 'Tailored',
      'contacts.interest.concierge': 'Concierge',
      'contacts.interest.other': 'Something else',

      'contacts.form.name': 'Name',
      'contacts.form.email': 'Email',
      'contacts.form.message': 'Message',
      'contacts.form.submit': 'Send',
      'contacts.form.success': "Thank you — we'll get back to you within a day",
      'contacts.form.error': 'Something went wrong. Please try again or reach us directly',
      'contacts.form.validation.required': 'Please fill in this field',
      'contacts.form.validation.email': 'Please enter a valid email address',

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
