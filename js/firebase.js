var H2MAPS_FIREBASE = {};

var messaging = firebase.messaging();
messaging.usePublicVapidKey("BPNrkIqrzWoYKu9BblgGOX-DuOjUwQnHm5dXANfAmrNYiCkL2bY3-oinMFfM7K5rRcW7Ej6PygQfGbCXw1pklG4");
messaging.onTokenRefresh(function() {
    messaging.getToken().then(function(currentToken) {
        setTokenSentToServer(false);
        sendTokenToServer(currentToken);
    }).catch(function(err) {
        console.error('An error occurred while retrieving token.', err);
        setTokenSentToServer(false);
    });
});

// TODO not sure if this will be of any use.
messaging.onMessage(function(payload) {
    console.log("Message received. ", payload);
});

H2MAPS_FIREBASE.sendTokenToServer = function(currentToken) {
    if (!H2MAPS_FIREBASE.isTokenSentToServer()) {
        // TODO Store token in H2Maps DB
        H2MAPS_FIREBASE.setTokenSentToServer(true);
    } else {
        console.log("Token already sent to server so won't send it again " +
            "unless it changes");
    }
};

H2MAPS_FIREBASE.isTokenSentToServer = function() {
    return window.localStorage.getItem('sentToServer') === "1";
};

H2MAPS_FIREBASE.setTokenSentToServer = function(sent) {
    window.localStorage.setItem('sentToServer', sent ? "1" : "0");
};

H2MAPS_FIREBASE.requestPermission = function() {
    messaging.requestPermission().then(function() {
        messaging.getToken().then(function(currentToken) {
            console.info(currentToken);
            if (currentToken) {
                H2MAPS_FIREBASE.sendTokenToServer(currentToken);
                //updateUIForPushEnabled(currentToken);

                return currentToken;
            } else {
                console.log('No Instance ID token available. Request permission to generate one.');
                //updateUIForPushPermissionRequired();
                H2MAPS_FIREBASE.setTokenSentToServer(false);
            }
        }).catch(function(err) {
            console.error('An error occurred while retrieving token.', err);
            //showToken('Error retrieving Instance ID token.', err);
            H2MAPS_FIREBASE.setTokenSentToServer(false);
        });
    }).catch(function(err) {
        console.error('Unable to get permission to notify.', err);
    });
};