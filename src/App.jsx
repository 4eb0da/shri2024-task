import React from "react";
import { TABS, TABS_KEYS } from "./constants/contants";
import CustomEvent from "./components/CustomEvent";

export default function App() {
  const ref = React.useRef();
  const initedRef = React.useRef(false);
  const [activeTab, setActiveTab] = React.useState('');
  const [hasRightScroll, setHasRightScroll] = React.useState(false);

  React.useEffect(() => {
      if (!activeTab && !initedRef.current) {
          initedRef.current = true;
          setActiveTab(new URLSearchParams(location.search).get('tab') || 'all');
      }
  });

  const onSelectInput = event => {
      setActiveTab(event.target.value);
  };

  let sizes = [];
  const onSize = size => {
      sizes = [...sizes, size];
  };

  React.useEffect(() => {
      const sumWidth = sizes.reduce((acc, item) => acc + item.width, 0);
      const sumHeight = sizes.reduce((acc, item) => acc + item.height, 0);

      const newHasRightScroll = sumWidth > ref.current.offsetWidth;
      if (newHasRightScroll !== hasRightScroll) {
          setHasRightScroll(newHasRightScroll);
      }
  });

  const onArrowCLick = () => {
      const scroller = ref.current.querySelector('.section__panel:not(.section__panel_hidden)');
      if (scroller) {
          scroller.scrollTo({
              left: scroller.scrollLeft + 400,
              behavior: 'smooth'
          });
      }
  };

  return <main className="main">
      <section className="section main__general">
          <h2 className="section__title section__title-header section__main-title">Главное</h2>
          <div className="hero-dashboard">
              <div className="hero-dashboard__primary">
                  <h3 className="hero-dashboard__title">Привет, Геннадий!</h3>
                  <p className="hero-dashboard__subtitle">Двери и окна закрыты, сигнализация включена.</p>
                  <ul className="hero-dashboard__info">
                      <li className="hero-dashboard__item">
                          <div className="hero-dashboard__item-title">Дома</div>
                          <div className="hero-dashboard__item-details">
                              +23
                              <span className="a11y-hidden">°</span>
                          </div>
                      </li>
                      <li className="hero-dashboard__item">
                          <div className="hero-dashboard__item-title">За окном</div>
                          <div className="hero-dashboard__item-details">
                              +19
                              <span className="a11y-hidden">°</span>

                              <div
                                  className="hero-dashboard__icon hero-dashboard__icon_rain"
                                  role="img"
                                  aria-label="Дождь"
                              ></div>
                          </div>
                      </li>
                  </ul>
              </div>
              <ul className="hero-dashboard__schedule">
                  <CustomEvent
                      icon="temp"
                      iconLabel="Температура"
                      title="Philips Cooler"
                      subtitle="Начнет охлаждать в 16:30"
                  />
                  <CustomEvent
                      icon="light"
                      iconLabel="Освещение"
                      title="Xiaomi Yeelight LED Smart Bulb"
                      subtitle="Включится в 17:00"
                  />
                  <CustomEvent
                      icon="light"
                      iconLabel="Освещение"
                      title="Xiaomi Yeelight LED Smart Bulb"
                      subtitle="Включится в 17:00"
                  />
              </ul>
          </div>
      </section>

      <section className="section main__scripts">
          <h2 className="section__title section__title-header">Избранные сценарии</h2>

          <ul className="event-grid">
              <CustomEvent
                  slim={true}
                  icon="light2"
                  iconLabel="Освещение"
                  title="Выключить весь свет в доме и во дворе"
              />
              <CustomEvent
                  slim={true}
                  icon="schedule"
                  iconLabel="Расписание"
                  title="Я ухожу"
              />
              <CustomEvent
                  slim={true}
                  icon="light2"
                  iconLabel="Освещение"
                  title="Включить свет в коридоре"
              />
              <CustomEvent
                  slim={true}
                  icon="temp2"
                  iconLabel="Температура"
                  title="Набрать горячую ванну"
                  subtitle="Начнётся в 18:00"
              />
              <CustomEvent
                  slim={true}
                  icon="temp2"
                  iconLabel="Температура"
                  title="Сделать пол тёплым во всей квартире"
              />
          </ul>
      </section>

      <section className="section main__devices">
          <div className="section__title">
              <h2 className="section__title-header">
                  Избранные устройства
              </h2>

              <select className="section__select" defaultValue="all" onInput={onSelectInput}>
                  {TABS_KEYS.map(key =>
                      <option key={key} value={key}>
                          {TABS[key].title}
                      </option>
                  )}
              </select>

              <ul role="tablist" className="section__tabs">
                  {TABS_KEYS.map(key =>
                      <li
                          key={key}
                          role="tab"
                          aria-selected={key === activeTab ? 'true' : 'false'}
                          tabIndex={key === activeTab ? '0' : undefined}
                          className={'section__tab' + (key === activeTab ? ' section__tab_active' : '')}
                          id={`tab_${key}`}
                          aria-controls={`panel_${key}`}
                          onClick={() => setActiveTab(key)}
                      >
                          {TABS[key].title}
                      </li>
                  )}
              </ul>
          </div>

          <div className="section__panel-wrapper" ref={ref}>
              {TABS_KEYS.map(key =>
                  <div key={key} role="tabpanel" className={'section__panel' + (key === activeTab ? '' : ' section__panel_hidden')} aria-hidden={key === activeTab ? 'false' : 'true'} id={`panel_${key}`} aria-labelledby={`tab_${key}`}>
                      <ul className="section__panel-list">
                          {TABS[key].items.map((item, index) =>
                              <CustomEvent
                                  key={index}
                                  {...item}
                                  onSize={onSize}
                              />
                          )}
                      </ul>
                  </div>
              )}
              {hasRightScroll &&
                  <div className="section__arrow" onClick={onArrowCLick}></div>
              }
          </div>
      </section>
  </main>;
}
