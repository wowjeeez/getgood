  
function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
}

ready(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const shouldGoogle = urlSearchParams.get("google") === "1"
    const shouldDestroy = urlSearchParams.get("destroy") == "1"
    const destroy = document.getElementById("dumbfuck")
    const google = document.getElementById("usegoogle")

    destroy.innerHTML = shouldDestroy ? "u dumb fuck" : ""
    google.innerHTML = shouldGoogle ? "&#10024; GETTING GOOD &#10024; and using fucking <a href=\"https://google.com\">google</a> to answer your miserable shit question" : "&#10024; GETTING GOOD &#10024;"

})