$(document).ready(function () {
    $(".menu-click").click(() => {
        $(".menu-click").toggleClass("close");
        $(".kanan").toggleClass("none");
    })

    $(".switch-mas").click(function (e) {
        e.preventDefault();
        $(".daftar").addClass("hide");
        $(".masuk").removeClass("hide");
    });

    $(".switch-daf").click(function (e) {
        e.preventDefault();
        $(".masuk").addClass("hide");
        $(".daftar").removeClass("hide");
    });

    $(".bx-x").click(function (e) {
        e.preventDefault();
        $(".dafmas-bungkus").addClass("hide");
        $(".masuk").addClass("hide");
        $(".daftar").removeClass("hide");
        $(".inp-user").val("");
    });

    $(".dafmas").click(function (e) {
        e.preventDefault();
        $(".dafmas-bungkus").removeClass("hide");
    });

    $(".profil-icon").click(function (e) {
        e.preventDefault();
        if ($(".dafmas").hasClass("hide")) {
            window.open("../profil.html")
        }
    });

    let ka = $(".kertas-artikel");

    $(".data-pencarian").on("keyup", (event) => {
        let val = $(".data-pencarian").val().toLowerCase();

        for (let i = 0; i < ka.length; i++) {
            const ak = ka[i];
            let aka = $(ak).find(".judul-artikel").text().toLowerCase();
            if (val != "") {
                if (aka.includes(val)) {
                    if (event.key === "Enter") {
                        $(".hasil-cari").removeClass("hide");
                        $(".hasil-cari").append('<a href=""><div class="kertas-hasil"><div class="img-hasil"><img src="' + $(ak).find(".img-artikel img").attr("src") + '" alt=""></div><div class="teks-hasil"><h2 class="judul-hasil">' + $(ak).find(".judul-artikel").text() + '</h2><p class="prev-hasil">' + $(ak).find(".prev-artikel").text() + '</p></div></div></a>')
                    }
                }
            } else {
                $(".hasil-cari").addClass("hide");
                $(".hasil-cari").empty();
            }
        }
    });
});