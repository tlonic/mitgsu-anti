jQuery(document).ready(function($) {
    var position_top = 0;
    var position_left = 0;
    var hovering_out = true;
    var container = null;
    var pointer = null;
    var params = window.blog_templates_params || {};
    var paramsType = typeof params.type === 'string' ? params.type : '';

    function normalizeSafeUrl(rawUrl) {
        if (typeof rawUrl !== 'string' || rawUrl.trim() === '') {
            return null;
        }

        try {
            var parsed = new URL(rawUrl, window.location.href);
            if (parsed.protocol === 'http:' || parsed.protocol === 'https:') {
                return parsed.href;
            }
        } catch (err) {
            return null;
        }

        return null;
    }

    function openSafeUrl(rawUrl) {
        var safeUrl = normalizeSafeUrl(rawUrl);
        if (!safeUrl) {
            return;
        }

        var newWindow = window.open(safeUrl, '_blank', 'noopener,noreferrer');
        if (newWindow) {
            newWindow.opener = null;
        }
    }

    function redirectSafeUrl(rawUrl) {
        var safeUrl = normalizeSafeUrl(rawUrl);
        if (safeUrl) {
            window.location.href = safeUrl;
        }
    }

    $('.nbt-desc-pointer').appendTo($('body'));
    $(document).mousemove(function(e) {
        position_top = e.pageY;
        position_left = e.pageX;
    });
    $('.template-signup-item').hover(
        function(e) {
            hovering_out = false;
            container = $(this);
            var tkey = container.data('tkey');

            pointer = $('#nbt-desc-pointer-' + tkey);
            setTimeout(function() {
                if ( hovering_out )
                    return;
                var margin_top = position_top;
                var margin_left = position_left;
                pointer.css({
                    left: margin_left - 15 + 'px',
                    top: margin_top + 25,
                    width: container.outerWidth() / 2 + 'px'
                }).stop(true,true).fadeIn()
            }, 200);
        },
        function(e) {
            hovering_out = true;

            var tkey = container.data('tkey');

            pointer = $('#nbt-desc-pointer-' + tkey).stop().fadeOut();
        }
    );

    if (paramsType === 'previewer') {

        $(document).on('click', '.view-demo-button, .select-theme-button', function (e) {
            e.preventDefault();
            var theme_key = $(this).data('theme-key');

            var wrap = $('#theme-previewer-wrap-' + theme_key);
            $('.theme-previewer-wrap').removeClass('blog_template-default_item');
            wrap.addClass('blog_template-default_item');

            $('input[name=blog_template]').prop('checked', false);
            $('#blog-template-radio-' + theme_key).prop('checked', true);
        });
        $(document).on('click', '.view-demo-button', function (e) {
            e.preventDefault();
            openSafeUrl($(this).data('blog-url'));
        });
    } else if (paramsType === 'page_showcase') {

        $(document).on( 'click', '.select-theme-button', function(e) {
            e.preventDefault();
            var signup_url = $(this).data('signup-url');
            redirectSafeUrl(signup_url);
        });
        $(document).on('click', '.view-demo-button', function(e) {
            e.preventDefault();
            openSafeUrl($(this).data('blog-url'));
        });
    } else if (
        paramsType === 'screenshot' ||
        paramsType === 'screenshot_plus'
    ) {
        $(document).on('click', '.blog_template-item_selector', function (e) {
            e.preventDefault();
            var theme_key = $(this).data('theme-key');
            var wrap = $('#theme-screenshot-wrap-' + theme_key);
            $('.theme-screenshot-wrap').removeClass('blog_template-default_item');
            wrap.addClass('blog_template-default_item');

            $('input[name=blog_template]').prop('checked', false);
            $('#blog-template-radio-' + theme_key).prop('checked', true);
        });
    }
});