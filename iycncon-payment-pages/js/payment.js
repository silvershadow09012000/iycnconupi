function launch() {

    const params = new URLSearchParams({
        pa: "apps290@oksbi",
        pn: "APOORVA DODDAMANI",
        am: "5",
        cu: "INR",
        tn: "Faculty Registration - IYCNCON 2026",
        tr: "FAC" + Date.now(),
        mc: "0000"
    });

    const uri = "upi://pay?" + params.toString();

    alert(uri);

    window.location.href = uri;

}
