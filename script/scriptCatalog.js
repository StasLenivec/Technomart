var link = document.querySelectorAll(".buy");
var popup = document.querySelector(".write-us");
var close = document.querySelector(".modal-content-close");

      for (var i = 0; i < link.length; i++) {
      link[i].addEventListener('click', function (event) {
        event.preventDefault();
        popup.classList.add("write-us-show");
      });
      }
        close.addEventListener('click', function (event) {
        event.preventDefault();
        popup.classList.remove("write-us-show");
      });