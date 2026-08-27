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
      'home.hero.subtitle': 'Проект кураторских путешествий. Мы создаём каждое путешествие индивидуально, подстраиваясь под ваш ритм, интересы и ожидания',
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

      'home.quote.num': '{ философия }',
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

      'about.hero.label': 'о нас',
      'about.title': 'Путевой дневник ADDRESS',
      'about.lead': 'ADDRESS — проект кураторских путешествий. Мы работаем напрямую с отелями, гидами и локальными партнёрами, чтобы каждая деталь была продумана заранее',

      'about.spread.01': 'Каждый маршрут начинается с разговора — о ритме, вкусах и том, что для вас значит «идеальный день»',
      'about.spread.02': 'Мы бываем в местах лично, прежде чем рекомендовать их вам',
      'about.spread.03': 'Скрытые адреса, которых нет в путеводителях — часть нашей работы',
      'about.spread.04': 'От первого письма до последнего дня поездки — мы на связи',

      'about.principles.label': 'принципы',
      'about.principles.personal.title': 'Индивидуальный подход',
      'about.principles.personal.text': 'Каждый маршрут создаётся с нуля под ваш ритм и интересы',
      'about.principles.partners.title': 'Прямые партнёрства',
      'about.principles.partners.text': 'Работаем напрямую с отелями — эксклюзивные условия и апгрейды',
      'about.principles.guides.title': 'Гиды со скрытыми местами',
      'about.principles.guides.text': 'Личные гиды с локациями, которых нет в путеводителях',
      'about.principles.trust.title': 'Приватность и доверие',
      'about.principles.trust.text': 'Конфиденциальность и внимание к деталям на каждом этапе',

      'about.quote': 'Эстетика, скрытые места, внимание к деталям и лёгкость, когда путешествие складывается идеально',

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
      'contacts.lead': 'Расскажите нам о своём путешествии — мы свяжемся с вами в течение дня',

      'contacts.interest.label': 'Меня интересует…',
      'contacts.interest.personal': 'Personal',
      'contacts.interest.tailored': 'Tailored',
      'contacts.interest.concierge': 'Concierge',
      'contacts.interest.other': 'Свой запрос',

      'contacts.form.name': 'Имя',
      'contacts.form.email': 'Email',
      'contacts.form.message': 'Сообщение',
      'contacts.form.submit': 'Отправить',
      'contacts.form.success': 'Спасибо! Мы получили ваше сообщение и свяжемся с вами в ближайшее время',
      'contacts.form.error': 'Что-то пошло не так. Попробуйте ещё раз или напишите нам в Telegram',
      'contacts.form.validation.required': 'Заполните это поле',
      'contacts.form.validation.email': 'Введите корректный email',

      'contacts.info.telegram.label': 'Telegram'
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
      'home.hero.subtitle': 'A project of curated travel experiences. We design each journey individually, shaping it around your rhythm, interests, and expectations',
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

      'home.quote.num': '{ philosophy }',
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

      'about.hero.label': 'about us',
      'about.title': "ADDRESS's Travel Journal",
      'about.lead': 'ADDRESS is a project of curated travel experiences. We work directly with hotels, guides, and local partners so every detail is thought through in advance',

      'about.spread.01': "Every itinerary starts with a conversation — about rhythm, taste, and what a perfect day means to you",
      'about.spread.02': 'We visit places ourselves before we recommend them to you',
      'about.spread.03': "Hidden addresses no guidebook lists are part of the job",
      'about.spread.04': "From the first message to the last day of the trip — we stay in touch",

      'about.principles.label': 'principles',
      'about.principles.personal.title': 'Personal Approach',
      'about.principles.personal.text': 'Every itinerary is built from scratch around your rhythm and interests',
      'about.principles.partners.title': 'Direct Partnerships',
      'about.principles.partners.text': 'We work directly with hotels — exclusive rates and upgrades',
      'about.principles.guides.title': 'Guides With Hidden Places',
      'about.principles.guides.text': 'Personal guides with locations no guidebook lists',
      'about.principles.trust.title': 'Privacy & Trust',
      'about.principles.trust.text': 'Confidentiality and attention to detail at every step',

      'about.quote': 'Aesthetics, hidden places, attention to detail, and the feeling of ease when a journey comes together perfectly',

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
      'contacts.lead': "Tell us about your journey — we'll get back to you within a day",

      'contacts.interest.label': "I'm interested in…",
      'contacts.interest.personal': 'Personal',
      'contacts.interest.tailored': 'Tailored',
      'contacts.interest.concierge': 'Concierge',
      'contacts.interest.other': 'Something else',

      'contacts.form.name': 'Name',
      'contacts.form.email': 'Email',
      'contacts.form.message': 'Message',
      'contacts.form.submit': 'Send',
      'contacts.form.success': "Thank you! We've received your message and will get back to you shortly",
      'contacts.form.error': 'Something went wrong. Please try again or message us on Telegram',
      'contacts.form.validation.required': 'Please fill in this field',
      'contacts.form.validation.email': 'Please enter a valid email address',

      'contacts.info.telegram.label': 'Telegram'
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
