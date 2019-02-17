var H2MAPS_FIREBASE = {};

var messaging;
try {
    messaging = firebase.messaging();
    H2MAPS_FIREBASE.messagingSupported = true;
} catch (err) {
    console.log(err);
    H2MAPS_FIREBASE.messagingSupported = false;
}

if (H2MAPS_FIREBASE.messagingSupported) {
    messaging.usePublicVapidKey("BPNrkIqrzWoYKu9BblgGOX-DuOjUwQnHm5dXANfAmrNYiCkL2bY3-oinMFfM7K5rRcW7Ej6PygQfGbCXw1pklG4");
    messaging.onTokenRefresh(function() {
        messaging.getToken().then(function(currentToken) {
            H2MAPS_FIREBASE.setTokenSentToServer(false);
            H2MAPS_FIREBASE.sendTokenToServer(currentToken);
        }).catch(function(err) {
            console.error('[onTokenRefresh] An error occurred while retrieving token.', err);
            H2MAPS_FIREBASE.setTokenSentToServer(false);
        });
    });

    messaging.onMessage(function(payload) {
        var notificationTitle = payload.notification.title;
        var notificationOptions = {
            body: payload.notification.body,
            icon: payload.notification.icon
        };

        if (!("Notification" in window)) {
            console.log("This browser does not support system notifications");
        } else if (Notification.permission === "granted") {
            var notification = new Notification(notificationTitle, notificationOptions);
            notification.onclick = function(event) {
                event.preventDefault(); // prevent the browser from focusing the Notification's tab
                window.open(payload.notification.click_action , '_blank');
                notification.close();
            }
        }
    });

    H2MAPS_FIREBASE.RESULT = {
        SUCCESS: 'SUCCESS',
        FAILURE: 'FAILURE',
        ERROR: 'ERROR'
    };

    H2MAPS_FIREBASE.sendTokenToServer = function(currentToken) {
        if (!H2MAPS_FIREBASE.isTokenSentToServer()) {
            H2MAPS_FIREBASE.setTokenSentToServer(true);
        }
    };

    H2MAPS_FIREBASE.isTokenSentToServer = function() {
        return window.localStorage.getItem('sentToServer') === "1";
    };

    H2MAPS_FIREBASE.setTokenSentToServer = function(sent) {
        window.localStorage.setItem('sentToServer', sent ? "1" : "0");
    };

    H2MAPS_FIREBASE.requestPermission = function(callback) {
        messaging.requestPermission().then(function() {
            messaging.getToken().then(function(currentToken) {
                if (currentToken) {
                    H2MAPS_FIREBASE.sendTokenToServer(currentToken);

                    return callback(currentToken);
                } else {
                    console.log('[requestPermission > getToken] No Instance ID token available. Request permission to generate one.');
                    H2MAPS_FIREBASE.setTokenSentToServer(false);

                    return callback(H2MAPS_FIREBASE.RESULT.FAILURE);
                }
            }).catch(function(err) {
                console.error('[requestPermission > getToken] An error occurred while retrieving token.', err);
                H2MAPS_FIREBASE.setTokenSentToServer(false);

                return callback(H2MAPS_FIREBASE.RESULT.ERROR);
            });
        }).catch(function(err) {
            console.error('[requestPermission] Unable to get permission to notify.', err);

            return callback(H2MAPS_FIREBASE.RESULT.ERROR);
        });
    };

    H2MAPS_FIREBASE.checkIfEnrolled = function(callback) {
        messaging.getToken().then(function(currentToken) {
            return callback(currentToken);
        }).catch(function(err) {
            if (err.code === 'messaging/notifications-blocked') {
                return callback(H2MAPS_FIREBASE.RESULT.FAILURE);
            }

            console.error('[checkIfEnrolled] An error occurred while checking token status.', err);
            return callback(H2MAPS_FIREBASE.RESULT.ERROR);
        });
    };
}