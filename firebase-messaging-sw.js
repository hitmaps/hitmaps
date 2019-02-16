importScripts('https://www.gstatic.com/firebasejs/5.8.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.8.2/firebase-messaging.js');

firebase.initializeApp({
    'messagingSenderId': '458558604415'
});

var messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
    var data = JSON.parse(payload);
    self.registration.showNotification(data.title, {
        body: data.body,
        icon: data.icon,
        click_action: data.click_action,
        time_to_live: data.time_to_live,
        data: data.data,
        tag: data.tag
    })
});