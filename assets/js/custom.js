



/*Magnafic popup*/

$('.gallerys').magnificPopup({
    type: 'image',
    delegate: 'a',
    gallery: {
        enabled: true
    }
});






/*owl carousel new*/
/*responsive*/
$('.client_say_active').owlCarousel({
    loop: true,
    margin: 20,
    navText: ['<i class="fa-solid fa-arrow-left-long"></i>', '<i class="fa-solid fa-arrow-right-long"></i>'],
    nav: true,
    dots: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1,
        }
    }
})





/*hide and show Search*/
function toggleElement() {
    var element = document.getElementById("hideandshow");
    if (element.style.display === "none") {
        element.style.display = "block"; // Show the element
    } else {
        element.style.display = "none"; // Hide the element
    }
}

/*mobail device navbar show and hide*/
function toggleElementnavber() {
    var element = document.getElementById('myElement');
    if (element.style.display === 'none') {
        element.style.display = 'block'; // Show the element
    } else {
        element.style.display = 'none'; // Hide the element
    }
}


function closeMenu() {
    var x = document.getElementById("Menu_container");
    if (x.style.display === "block") {
        x.style.display = "none";
    }
}



function openMenu() {
    var x = document.getElementById("Menu_container");
    if (x.style.display === "none") {
        x.style.display = "block";
    }
}
