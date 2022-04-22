/*=============================================
    =    		Isotope	Active  	      =
=============================================*/
const $grid = $('.movie-filter').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
        columnWidth: '.grid-sizer',
    }
})
$('.movie-button').on('click', 'button', function () {
    const filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
});
//for menu active class
$('.movie-button button').on('click', function (event) {
    event.preventDefault();


    $(this).siblings('.active').removeClass("active");
    $(this).addClass("active")
});
