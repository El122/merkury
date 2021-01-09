const showModal = (modal) => {
    switch (modal) {
        case "login": $(".loginOverlay").css("display", "flex"); break;
        case "reg": $(".regOverlay").css("display", "flex"); break;
        case "manage": $(".manageOverlay").css("display", "flex"); break;
        case "analytics": $(".analyticsOverlay").css("display", "flex"); break;
        case "organize": $(".organizeOverlay").css("display", "flex"); break;
    }
}

$(".close").click(function (e) {
    $(".loginOverlay").css("display", "none");
    $(".regOverlay").css("display", "none");
    $(".manageOverlay").css("display", "none");
    $(".analyticsOverlay").css("display", "none");
    $(".organizeOverlay").css("display", "none");
    e.stopPropagation();
});

$(".loginOverlay .container").click(function (e) {
    $(".loginOverlay").css("display", "flex");
    e.stopPropagation();
});

$(".regOverlay .container").click(function (e) {
    $(".regOverlay").css("display", "flex");
    e.stopPropagation();
});

$(".manageOverlay .container").click(function (e) {
    $(".manageOverlay").css("display", "flex");
    e.stopPropagation();
});

$(".analyticsOverlay .container").click(function (e) {
    $(".analyticsOverlay").css("display", "flex");
    e.stopPropagation();
});

$(".organizeOverlay .container").click(function (e) {
    $(".organizeOverlay").css("display", "flex");
    e.stopPropagation();
});

let hideModal = () => {
    $(".loginOverlay").css("display", "none");
    $(".regOverlay").css("display", "none");
    $(".manageOverlay").css("display", "none");
    $(".analyticsOverlay").css("display", "none");
    $(".organizeOverlay").css("display", "none");
};