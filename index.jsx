if (location.protocol === 'http:') {
    location.replace(`https:${location.href.substring(location.protocol.length)}`);
} else if (location.protocol === 'file:') {
    alert('Si no reconoce la ubicación, visita https://gps-plus.glitch.me/, Chrome tampoco permite acceso a la ubicación en archivos locales.');
}

const { Fragment, StrictMode } = React;

function onClick() {
    navigator.geolocation.getCurrentPosition(pos => {
        const { latitude, longitude } = pos.coords
        window.open(`https://www.google.com/maps/@${latitude},${longitude}`)
    });
}

const App = () => (
    <Fragment>
        <h1 id='title'>
            GPS+
        </h1>
        <button onClick={onClick}>
          Localízame
        </button>
    </Fragment>
)

ReactDOM.render(<StrictMode><App/></StrictMode>, document.getElementById('root'));
