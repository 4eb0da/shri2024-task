function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function Header() {
  const [expanded, setExpanded] = React.useState(false);
  const [toggled, setToggled] = React.useState(false);
  const onClick = () => {
    if (!toggled) {
      setToggled(true);
    }
    setExpanded(!expanded);
  };
  return /*#__PURE__*/React.createElement("header", {
    className: "header"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/",
    className: "header__logo",
    "aria-label": "\u042F\u043D\u0434\u0435\u043A\u0441.\u0414\u043E\u043C"
  }), /*#__PURE__*/React.createElement("button", {
    className: "header__menu",
    "aria-expanded": expanded ? 'true' : 'false',
    onClick: onClick
  }, /*#__PURE__*/React.createElement("span", {
    className: "header__menu-text a11y-hidden"
  }, expanded ? 'Закрыть меню' : 'Открыть меню')), /*#__PURE__*/React.createElement("ul", {
    className: 'header__links' + (expanded ? ' header__links_opened' : '') + (toggled ? ' header__links-toggled' : '')
  }, /*#__PURE__*/React.createElement("li", {
    className: "header__item"
  }, /*#__PURE__*/React.createElement("a", {
    className: "header__link header__link_current",
    href: "/",
    "aria-current": "page"
  }, "\u0421\u0432\u043E\u0434\u043A\u0430")), /*#__PURE__*/React.createElement("li", {
    className: "header__item"
  }, /*#__PURE__*/React.createElement("a", {
    className: "header__link",
    href: "/devices"
  }, "\u0423\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430")), /*#__PURE__*/React.createElement("li", {
    className: "header__item"
  }, /*#__PURE__*/React.createElement("a", {
    className: "header__link",
    href: "/scripts"
  }, "\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0438"))));
}
function Event(props) {
  return /*#__PURE__*/React.createElement("li", {
    className: 'event' + (props.slim ? ' event_slim' : '')
  }, /*#__PURE__*/React.createElement("button", {
    className: "event__button"
  }, /*#__PURE__*/React.createElement("span", {
    className: `event__icon event__icon_${props.icon}`,
    role: "img",
    "aria-label": props.iconLabel
  }), /*#__PURE__*/React.createElement("h4", {
    className: "event__title"
  }, props.title), props.subtitle && /*#__PURE__*/React.createElement("span", {
    className: "event__subtitle"
  }, props.subtitle)));
}
const TABS = {
  all: {
    title: 'Все',
    items: [{
      icon: 'light2',
      iconLabel: 'Освещение',
      title: 'Xiaomi Yeelight LED Smart Bulb',
      subtitle: 'Включено'
    }, {
      icon: 'light',
      iconLabel: 'Освещение',
      title: 'D-Link Omna 180 Cam',
      subtitle: 'Включится в 17:00'
    }, {
      icon: 'temp',
      iconLabel: 'Температура',
      title: 'Elgato Eve Degree Connected',
      subtitle: 'Выключено до 17:00'
    }, {
      icon: 'light',
      iconLabel: 'Освещение',
      title: 'LIFX Mini Day & Dusk A60 E27',
      subtitle: 'Включится в 17:00'
    }, {
      icon: 'light2',
      iconLabel: 'Освещение',
      title: 'Xiaomi Mi Air Purifier 2S',
      subtitle: 'Включено'
    }, {
      icon: 'light',
      iconLabel: 'Освещение',
      title: 'Philips Zhirui',
      subtitle: 'Включено'
    }, {
      icon: 'light',
      iconLabel: 'Освещение',
      title: 'Philips Zhirui',
      subtitle: 'Включено'
    }, {
      icon: 'light2',
      iconLabel: 'Освещение',
      title: 'Xiaomi Mi Air Purifier 2S',
      subtitle: 'Включено'
    }]
  },
  kitchen: {
    title: 'Кухня',
    items: [{
      icon: 'light2',
      iconLabel: 'Освещение',
      title: 'Xiaomi Yeelight LED Smart Bulb',
      subtitle: 'Включено'
    }, {
      icon: 'temp',
      iconLabel: 'Температура',
      title: 'Elgato Eve Degree Connected',
      subtitle: 'Выключено до 17:00'
    }]
  },
  hall: {
    title: 'Зал',
    items: [{
      icon: 'light',
      iconLabel: 'Освещение',
      title: 'Philips Zhirui',
      subtitle: 'Выключено'
    }, {
      icon: 'light2',
      iconLabel: 'Освещение',
      title: 'Xiaomi Mi Air Purifier 2S',
      subtitle: 'Выключено'
    }]
  },
  lights: {
    title: 'Лампочки',
    items: [{
      icon: 'light',
      iconLabel: 'Освещение',
      title: 'D-Link Omna 180 Cam',
      subtitle: 'Включится в 17:00'
    }, {
      icon: 'light',
      iconLabel: 'Освещение',
      title: 'LIFX Mini Day & Dusk A60 E27',
      subtitle: 'Включится в 17:00'
    }, {
      icon: 'light2',
      iconLabel: 'Освещение',
      title: 'Xiaomi Mi Air Purifier 2S',
      subtitle: 'Включено'
    }, {
      icon: 'light',
      iconLabel: 'Освещение',
      title: 'Philips Zhirui',
      subtitle: 'Включено'
    }]
  },
  cameras: {
    title: 'Камеры',
    items: [{
      icon: 'light2',
      iconLabel: 'Освещение',
      title: 'Xiaomi Mi Air Purifier 2S',
      subtitle: 'Включено'
    }]
  }
};
for (let i = 0; i < 6; ++i) {
  TABS.all.items = TABS.all.items.concat(TABS.all.items);
}
const TABS_KEYS = Object.keys(TABS);
function getDefaultActiveTab() {
  return new URLSearchParams(location.search).get('tab') || 'all';
}
function Main() {
  const ref = React.useRef();
  const [activeTab, setActiveTab] = React.useState(getDefaultActiveTab);
  const [hasRightScroll, setHasRightScroll] = React.useState(() => {
    const ITEM_WIDTH_PX = 200;
    return TABS[activeTab].items.length * ITEM_WIDTH_PX > window.innerWidth;
  });
  // console.log('Render Main', ref, activeTab, hasRightScroll);

  const onSelectInput = event => {
    setActiveTab(event.target.value);
  };
  React.useEffect(() => {
    const scroller = ref.current.querySelector('.section__panel_visible');
    const newHasRightScroll = scroller.scrollWidth > ref.current.offsetWidth;
    if (newHasRightScroll !== hasRightScroll) {
      setHasRightScroll(newHasRightScroll);
    }
  });
  const onArrowCLick = () => {
    const scroller = ref.current.querySelector('.section__panel_visible');
    if (scroller) {
      scroller.scrollTo({
        left: scroller.scrollLeft + 400,
        behavior: 'smooth'
      });
    }
  };
  return /*#__PURE__*/React.createElement("main", {
    className: "main"
  }, /*#__PURE__*/React.createElement("section", {
    className: "section main__general"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "section__title section__title-header section__main-title"
  }, "\u0413\u043B\u0430\u0432\u043D\u043E\u0435"), /*#__PURE__*/React.createElement("div", {
    className: "hero-dashboard"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-dashboard__primary"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "hero-dashboard__title"
  }, "\u041F\u0440\u0438\u0432\u0435\u0442, \u0413\u0435\u043D\u043D\u0430\u0434\u0438\u0439!"), /*#__PURE__*/React.createElement("p", {
    className: "hero-dashboard__subtitle"
  }, "\u0414\u0432\u0435\u0440\u0438 \u0438 \u043E\u043A\u043D\u0430 \u0437\u0430\u043A\u0440\u044B\u0442\u044B, \u0441\u0438\u0433\u043D\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0430."), /*#__PURE__*/React.createElement("ul", {
    className: "hero-dashboard__info"
  }, /*#__PURE__*/React.createElement("li", {
    className: "hero-dashboard__item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-dashboard__item-title"
  }, "\u0414\u043E\u043C\u0430"), /*#__PURE__*/React.createElement("div", {
    className: "hero-dashboard__item-details"
  }, "+23", /*#__PURE__*/React.createElement("span", {
    className: "a11y-hidden"
  }, "\xB0"))), /*#__PURE__*/React.createElement("li", {
    className: "hero-dashboard__item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-dashboard__item-title"
  }, "\u0417\u0430 \u043E\u043A\u043D\u043E\u043C"), /*#__PURE__*/React.createElement("div", {
    className: "hero-dashboard__item-details"
  }, "+19", /*#__PURE__*/React.createElement("span", {
    className: "a11y-hidden"
  }, "\xB0"), /*#__PURE__*/React.createElement("div", {
    className: "hero-dashboard__icon hero-dashboard__icon_rain",
    role: "img",
    "aria-label": "\u0414\u043E\u0436\u0434\u044C"
  }))))), /*#__PURE__*/React.createElement("ul", {
    className: "hero-dashboard__schedule"
  }, /*#__PURE__*/React.createElement(Event, {
    icon: "temp",
    iconLabel: "\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430",
    title: "Philips Cooler",
    subtitle: "\u041D\u0430\u0447\u043D\u0435\u0442 \u043E\u0445\u043B\u0430\u0436\u0434\u0430\u0442\u044C \u0432 16:30"
  }), /*#__PURE__*/React.createElement(Event, {
    icon: "light",
    iconLabel: "\u041E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0435",
    title: "Xiaomi Yeelight LED Smart Bulb",
    subtitle: "\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u0441\u044F \u0432 17:00"
  }), /*#__PURE__*/React.createElement(Event, {
    icon: "light",
    iconLabel: "\u041E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0435",
    title: "Xiaomi Yeelight LED Smart Bulb",
    subtitle: "\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u0441\u044F \u0432 17:00"
  })))), /*#__PURE__*/React.createElement("section", {
    className: "section main__scripts"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "section__title section__title-header"
  }, "\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0438"), /*#__PURE__*/React.createElement("ul", {
    className: "event-grid"
  }, /*#__PURE__*/React.createElement(Event, {
    slim: true,
    icon: "light2",
    iconLabel: "\u041E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0435",
    title: "\u0412\u044B\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0432\u0435\u0441\u044C \u0441\u0432\u0435\u0442 \u0432 \u0434\u043E\u043C\u0435 \u0438 \u0432\u043E \u0434\u0432\u043E\u0440\u0435"
  }), /*#__PURE__*/React.createElement(Event, {
    slim: true,
    icon: "schedule",
    iconLabel: "\u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
    title: "\u042F \u0443\u0445\u043E\u0436\u0443"
  }), /*#__PURE__*/React.createElement(Event, {
    slim: true,
    icon: "light2",
    iconLabel: "\u041E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0435",
    title: "\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0441\u0432\u0435\u0442 \u0432 \u043A\u043E\u0440\u0438\u0434\u043E\u0440\u0435"
  }), /*#__PURE__*/React.createElement(Event, {
    slim: true,
    icon: "temp2",
    iconLabel: "\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430",
    title: "\u041D\u0430\u0431\u0440\u0430\u0442\u044C \u0433\u043E\u0440\u044F\u0447\u0443\u044E \u0432\u0430\u043D\u043D\u0443",
    subtitle: "\u041D\u0430\u0447\u043D\u0451\u0442\u0441\u044F \u0432 18:00"
  }), /*#__PURE__*/React.createElement(Event, {
    slim: true,
    icon: "temp2",
    iconLabel: "\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430",
    title: "\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u043F\u043E\u043B \u0442\u0451\u043F\u043B\u044B\u043C \u0432\u043E \u0432\u0441\u0435\u0439 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0435"
  }))), /*#__PURE__*/React.createElement("section", {
    className: "section main__devices"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__title"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "section__title-header"
  }, "\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430"), /*#__PURE__*/React.createElement("select", {
    className: "section__select",
    defaultValue: "all",
    onInput: onSelectInput
  }, TABS_KEYS.map(key => /*#__PURE__*/React.createElement("option", {
    key: key,
    value: key
  }, TABS[key].title))), /*#__PURE__*/React.createElement("ul", {
    role: "tablist",
    className: "section__tabs"
  }, TABS_KEYS.map(key => /*#__PURE__*/React.createElement("li", {
    key: key,
    role: "tab",
    "aria-selected": key === activeTab ? 'true' : 'false',
    tabIndex: key === activeTab ? '0' : undefined,
    className: 'section__tab' + (key === activeTab ? ' section__tab_active' : ''),
    id: `tab_${key}`,
    "aria-controls": `panel_${key}`,
    onClick: () => setActiveTab(key)
  }, TABS[key].title)))), /*#__PURE__*/React.createElement("div", {
    className: "section__panel-wrapper",
    ref: ref
  }, TABS_KEYS.map(key => /*#__PURE__*/React.createElement("div", {
    key: key,
    role: "tabpanel",
    className: 'section__panel' + (key === activeTab ? ' section__panel_visible' : ' section__panel_hidden'),
    "aria-hidden": key === activeTab ? 'false' : 'true',
    id: `panel_${key}`,
    "aria-labelledby": `tab_${key}`
  }, /*#__PURE__*/React.createElement("ul", {
    className: "section__panel-list"
  }, TABS[key].items.map((item, index) => /*#__PURE__*/React.createElement(Event, _extends({
    key: index
  }, item)))))), hasRightScroll && /*#__PURE__*/React.createElement("div", {
    className: "section__arrow",
    onClick: onArrowCLick
  }))));
}
document.addEventListener('DOMContentLoaded', () => {
  const root = ReactDOM.createRoot(document.getElementById('app'));
  root.render( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(Main, null)));
  setTimeout(() => {
    const footer = document.querySelector('.footer_hidden');
    footer.classList.remove('footer_hidden');
  }, 0);
});