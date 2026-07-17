function launch(app, params) {

    const upiUrl = 'upi://pay?' + params;

    if (app === 'phonepe') {
        window.location.href = 'phonepe://pay?' + params;
        setTimeout(() => {
            window.location.href = upiUrl;
        }, 800);
    }

    else if (app === 'gpay') {
        window.location.href = 'tez://upi/pay?' + params;
        setTimeout(() => {
            window.location.href = upiUrl;
        }, 800);
    }

    else {
        window.location.href = upiUrl;
    }

}
