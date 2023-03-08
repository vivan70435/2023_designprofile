/* for tab */

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}


/* for smooth scrolling */
//為了解決跨瀏覽器問題
// $(document).ready(function() {
//     // Add smooth scrolling to all links
//     $("a").on('click', function(event) {

//         // Make sure this.hash has a value before overriding default behavior
//         if (this.hash !== "") {
//             // Prevent default anchor click behavior
//             event.preventDefault();

//             // Store hash
//             var hash = this.hash;

//             // Using jQuery's animate() method to add smooth page scroll
//             // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//             $('html, body').animate({
//                 scrollTop: $(hash).offset().top
//             }, 800, function() {

//                 // Add hash (#) to URL when done scrolling (default click behavior)
//                 window.location.hash = hash;
//             });
//         } // End if
//     });
// });


var applyScrolling = function(arr, cb) {
    for (var i = 0; i < arr.length; i++) {
        cb.call(null, i, arr[i])
    }
}

// 解決smooth scrolling問題
var anchors = document.querySelectorAll("a[href^='#work']")
if (window.scrollTo) {
    applyScrolling(anchors, function(index, el) {
        var target = document.getElementById(el.getAttribute('href').substring(1))

        el.addEventListener('click', function(e) {
            console.log(target)
            e.preventDefault()
            window.scrollTo(0, target.offsetTop)
        })
    })
}


/* https://andyyou.github.io/2016/06/01/smooth-page-scroll/*/



/* for menu */
/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}