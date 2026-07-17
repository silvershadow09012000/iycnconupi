function launch(app) {

    let packageName = "";

    switch(app) {

        case "gpay":
            packageName = "com.google.android.apps.nbu.paisa.user";
            break;

        case "phonepe":
            packageName = "com.phonepe.app";
            break;

        case "bhim":
            packageName = "in.org.npci.upiapp";
            break;

        default:
            packageName = "";
    }

    const params = new URLSearchParams({
        pa: "apps290@oksbi",
        pn: "APOORVA DODDAMANI",
        am: "3",
        cu: "INR",
        tn: "Faculty Registration - IYCNCON 2026",
        tr: "FAC" + Date.now()
    });

    const intent =
        "intent://pay?" +
        params.toString() +
        "#Intent;" +
        "scheme=upi;" +
        "package=" + packageName + ";" +
        "end";

    alert(intent);

    window.location.href = intent;
}
