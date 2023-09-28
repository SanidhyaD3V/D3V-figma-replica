$(function () {
    const responseModal = "#response-modal";
    const responseDiv = "#response-div";
    const footerSubscribeForm = "#subscribe-footer-form";
    const modalSubscribeForm = "#subscribe_popup-form";
    const footerSubscribeButton = "#subscribe-footer-button";
    const modalSubscribeButton = "#subscribe_popup-button";
    const subscribeModal = "#subscribe_popup";
    const formFromModal = "#subscribe-modal";
    const formFromFooter = "#subscribe-footer";

    const value = readCookienewsletter("subscribed");
    if (!value) {
        setTimeout(function () {
            if (sessionStorage["PopupShown"] != "yes") {
                $(subscribeModal).modal("show");
            }
        }, 30000);
    }

    $(footerSubscribeButton).click(function (e) {
        e.preventDefault();
        subscribeAPI(
            footerSubscribeForm,
            footerSubscribeButton,
            formFromFooter
        );
    });

    $(modalSubscribeButton).click(function (e) {
        e.preventDefault();
        subscribeAPI(modalSubscribeForm, modalSubscribeButton, formFromModal);
    });

    function subscribeAPI(form, button, formFrom) {
        $(button).prop("disabled", true).html("Sending...");
        $(responseDiv).html("");

        $.ajax({
            url: "/subscribe",
            method: "post",
            data: $(form).serialize(),
            success: function (response) {
                if (formFrom == "#subscribe-modal") {
                    setCookiesnewsletter("subscribed", true, "6000000000");
                    $(subscribeModal).modal("hide");
                }
                let htmlRes =
                    '<div class="alert alert-success"><h4 class="alert-heading">Success</h4>' +
                    response.success +
                    "</div>";
                $(responseDiv).html(htmlRes);
                $(responseModal).modal("show");

                $(formFrom + "name").val("");
                $(formFrom + "email").val("");
                $(button).prop("disabled", false).html("Subscribe");
            },
            error: function (err) {
                let errors = err.responseJSON.errors;
                let listErr = "";
                errors.forEach(function (error) {
                    listErr += "<li>" + error + "</li>";
                });

                let htmlRes =
                    '<div class="alert alert-danger"><h4 class="alert-heading">Error</h4><ul class="mb-0">' +
                    listErr +
                    "</ul></div>";
                $(responseDiv).html(htmlRes);
                $(responseModal).modal("show");

                $(button).prop("disabled", false).html("Subscribe");
            },
        });

        setTimeout(function () {
            $(responseModal).modal("hide");
            $(responseDiv).html("");
        }, 9000);
    }

    function setCookiesnewsletter(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function readCookienewsletter(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(";");
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == " ") c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0)
                return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
    $(subscribeModal).on("hidden.bs.modal", function (e) {
        e.preventDefault();
        sessionStorage["PopupShown"] = "yes"; //Save in the sessionStorage if the modal has been shown
    });
}); // end ready

$(".dropdown-menu a.dropdown-toggle").on("click", function (e) {
    if (!$(this).next().hasClass("show")) {
        $(this)
            .parents(".dropdown-menu")
            .first()
            .find(".show")
            .removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass("show");

    $(this)
        .parents("li.nav-item.dropdown.show")
        .on("hidden.bs.dropdown", function (e) {
            $(".dropdown-submenu .show").removeClass("show");
        });

    return false;
});
