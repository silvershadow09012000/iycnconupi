function launch(app, params) {

    const uri = "upi://pay?" + params;

    alert(uri);

    window.location.href = uri;
}
