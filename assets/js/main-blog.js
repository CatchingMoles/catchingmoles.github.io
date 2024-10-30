(function($) {

    var $window = $(window),
        $body = $('body'),
        $header = $('#header'),
        $footer = $('#footer');

    // Breakpoints voor responsive gedrag.
    breakpoints({
        xlarge:   [ '1281px',  '1680px' ],
        large:    [ '981px',   '1280px' ],
        medium:   [ '737px',   '980px'  ],
        small:    [ '481px',   '736px'  ],
        xsmall:   [ '361px',   '480px'  ],
        xxsmall:  [ null,      '360px'  ]
    });

    // Start animaties bij het laden van de pagina.
    $window.on('load', function() {
        window.setTimeout(function() {
            $body.removeClass('is-preload');
        }, 100);
    });

    // Fix voor Flexbox min-height bug in Internet Explorer.
    if (browser.name == 'ie') {
        var flexboxFixTimeoutId;
        $window.on('resize.flexbox-fix', function() {
            clearTimeout(flexboxFixTimeoutId);
            flexboxFixTimeoutId = setTimeout(function() {
                if ($wrapper.prop('scrollHeight') > $window.height())
                    $wrapper.css('height', 'auto');
                else
                    $wrapper.css('height', '100vh');
            }, 250);
        }).triggerHandler('resize.flexbox-fix');
    }

    // Navigatie bij middenuitlijning (indien van toepassing).
    var $nav = $header.children('nav'),
        $nav_li = $nav.find('li');
    if ($nav_li.length % 2 == 0) {
        $nav.addClass('use-middle');
        $nav_li.eq($nav_li.length / 2).addClass('is-middle');
    }

	// JavaScript for filtering blog posts on Enter key press
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");
    const posts = document.querySelectorAll(".post");
    const noResultsMessage = document.getElementById("no-results");

    // Listen for keydown event on the search input
    searchInput.addEventListener("keydown", function (e) {
        if (e.keyCode === 13) { // 13 is the Enter key
            e.preventDefault(); // Prevent default form submission or behavior

            const searchText = e.target.value.toLowerCase();
            let matchFound = false;

            posts.forEach(post => {
                const title = post.querySelector("h3").innerText.toLowerCase();
                const content = post.querySelector("p").innerText.toLowerCase();

                // Check if the search text is in the title or content
                if (title.includes(searchText) || content.includes(searchText)) {
                    post.style.display = "block"; // Show the post if it matches
                    matchFound = true;
                } else {
                    post.style.display = "none"; // Hide the post if it doesn't match
                }
            });

            // Show or hide the "No results" message
            noResultsMessage.style.display = matchFound ? "none" : "block";
        }
    });
});

})(jQuery);