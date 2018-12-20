import App from './App';

let app;

let checkExist = setInterval(function() {
    if (document.getElementById("appRoot")) {
        app = new App();
        app.run();
        clearInterval(checkExist);
    }
}, 100);