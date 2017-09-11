/**
 * by Henrique Arthur <eu@henriquearthur.me>
 */

 document.addEventListener('DOMContentLoaded', function () {
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    if ($navbarBurgers.length > 0) {
        $navbarBurgers.forEach(function ($el) {
            $el.addEventListener('click', function () {

                var target = $el.dataset.target;
                var $target = document.getElementById(target);

                $el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        });
    }
});

 $(document).ready(function() {
    $(".tabs .tabs-header li.item").on('click', function() {
        var wrapper = $(this).parent().parent().parent();
        var tabsHeader = wrapper.find('.tabs-header');
        var tabsContainer = wrapper.find('.tabs-container');

        var number = $(this).data('option');

        tabsHeader.find('li.item').removeClass('is-active');
        $(this).addClass('is-active');

        tabsContainer.find('.tab-container').removeClass('is-active');
        tabsContainer.find('.tab-container[data-item="' + number + '"]').addClass('is-active');
    });

    $(".menu-link").click(function(e) {
        e.preventDefault();

        var id = $(this).data('id');
        var el = $("#" + id);

        $("html, body").animate({
            scrollTop: el.offset().top
        }, 1000);

        $(".navbar-burger").click();
    });

    $("#contact-form").on('submit', function(e) {
        e.preventDefault();

        var form = $(this);

        if (form.hasClass('disabled')) {
            return false;
        }

        form.addClass('disabled').animate({'opacity': 0.5}, 'fast');

        var name = $("#cf-name").val();
        var email = $("#cf-email").val();
        var message = $("#cf-message").val();

        $.ajax({
            url: "https://docs.google.com/forms/d/e/1FAIpQLSc0FMxUpg-wgMf-FoDZ0HePSwg0yD9YTaRIzNoNiP5rpLSnNg/formResponse",
            data: {"entry.414585514" : name, "entry.1416397509" : email, "entry.1272364480": message},
            type: "POST",
            dataType: "xml",
            statusCode: {
                0: function (){
                    form.removeClass('disabled').animate({'opacity': 1}, 'fast');

                    $("#contact-form-message").html('<article class="message is-success"><div class="message-header"><p>Enviado!</p></div><div class="message-body">Mensagem enviada. Responderei você assim que possível :)</div></article><br>');

                    $("#cf-name, #cf-email, #cf-message").val('');
                },
                200: function (){
                    form.removeClass('disabled').animate({'opacity': 1}, 'fast');

                    $("#contact-form-message").html('<article class="message is-success"><div class="message-header"><p>Enviado!</p></div><div class="message-body">Mensagem enviada. Responderei você assim que possível :)</div></article><br>');

                    $("#cf-name, #cf-email, #cf-message").val('');
                }
            }
        });
    });
});

//# sourceMappingURL=app.js.map
