window.addEventListener("load", function () {
    let clientId =
        document.querySelector("[data-banerad-client-id]").dataset.baneradClientId || null;
    if (!clientId) {
        console.error("data-banerad-client-id custom data set should have an ID");
        return;
    }
    function css(el, styles) {
        for (let [key, value] of Object.entries(styles)) {
            el.style[key] = value;
        }
    }
    let body = document.body;
    css(body, {
        marginBottom: "50px",
    });
    let wrapper = document.createElement("div");
    css(wrapper, {
        display: "block",
        width: "100%",
        height: "50px",
        position: "fixed",
        bottom: "0",
        left: "0",
        right: "0",
        zIndex: "99999999999",
        overflowed: "hidden",
        backgroundImage: "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
        fontFamily: "Inter, sans-serif",
        fontSize: "17px",
        lineHeight: "1.3",
        textAlign: "center",
        color: "white",
        padding: "10px",
    });

    wrapper.innerText = `Hello world!`;

    body.prepend(wrapper);
});
