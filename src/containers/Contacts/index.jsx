import React, { Component, Fragment } from 'react';

import YandexMap from './YandexMap';

class Contacts extends Component {
  render() {
    return (
      <div className="contacts-container">
        <YandexMap />
        <div className="contacts-info">
          <span>
            Контакты
          </span>
          <ul>
            <li>Плугарь А.С.</li>
            <li>Шабанов Д.В.</li>
            <li>Баранов А.А.</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Contacts;
