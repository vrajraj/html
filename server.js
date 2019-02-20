(function () {
    // Initialize Firebase
    const config = {
        apiKey: "AIzaSyA4ML3ntkN8lROoGiuKnoipVL2lltGd3QM",
        authDomain: "fizzy5-b140e.firebaseapp.com",
        databaseURL: "https://fizzy5-b140e.firebaseio.com",
        projectId: "fizzy5-b140e",
        storageBucket: "fizzy5-b140e.appspot.com",
        messagingSenderId: "459113918994"
    };
    firebase.initializeApp(config);

    const textEmail=document.getElementById('textEmail');
    const textPassword=document.getElementById('textPassword');
    const btnLogin=document.getElementById('btnLogin');
    const btnSignup=document.getElementById('btnSignup');
}