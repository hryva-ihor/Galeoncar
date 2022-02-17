@@include('js_parts/variables.js')
@@include('js_parts/burger.js')
@@include('js_parts/slicksettings.js')
@@include('js_parts/accordeon.js')
@@include('js_parts/popap.js')
@@include('js_parts/rent_car_hover.js')
@@include('js_parts/autopark_carousel_hover.js')
@@include('js_parts/to_top_button.js')

@@include('js_parts/google_maps.js')



// slow csroll ankor link
let slowAnker = $('html, body');
$('a[href*="#"]').click(function() {
    slowAnker.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});

