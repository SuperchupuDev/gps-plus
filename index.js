"use strict";

if (location.protocol === 'http:') {
  location.replace(`https:${location.href.substring(location.protocol.length)}`);
} else if (location.protocol === 'file:') {
  alert('Si no reconoce la ubicación, visita https://gps-plus.glitch.me/, Chrome tampoco permite acceso a la ubicación en archivos locales.');
}

const {
  Fragment,
  StrictMode
} = React;

function onClick() {
  navigator.geolocation.getCurrentPosition(pos => {
    const {
      latitude,
      longitude
    } = pos.coords;
    window.open(`https://www.google.com/maps/@${latitude},${longitude},15z`);
  });
}

const App = () => /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("h1", {
  id: "title"
}, "GPS+"), /*#__PURE__*/React.createElement("button", {
  onClick: onClick
}, "Local\xEDzame"));

ReactDOM.render( /*#__PURE__*/React.createElement(StrictMode, null, /*#__PURE__*/React.createElement(App, null)), document.getElementById('root'));