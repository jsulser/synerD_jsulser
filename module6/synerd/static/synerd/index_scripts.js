/* Slideshow script from wc3schools */
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  var captionText = document.getElementById("caption");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = slides[slideIndex-1].id;
}

/* Hover tabs script from wc3shools */
function openTab(evt, tabName) {
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

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}


/* Google Maps script
// Initialize and add the map
function initMap() {
     // The location of Uluru
     const uluru = { lat: -25.344, lng: 131.036 };
     // The map, centered at Uluru
     const map = new google.maps.Map(document.getElementById("map"), {
       zoom: 4,
       center: uluru,
     });
     // The marker, positioned at Uluru
     const marker = new google.maps.Marker({
       position: uluru,
       map: map,
     });
   }
*/

/* Google Maps script

src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAVXOapNsxQ4NPXX4q-_1W1OhszUkCUuFQ&callback=initMap&libraries=&v=weekly"
   async 
   */