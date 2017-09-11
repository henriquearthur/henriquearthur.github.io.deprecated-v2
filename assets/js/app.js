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
});

//# sourceMappingURL=app.js.map
