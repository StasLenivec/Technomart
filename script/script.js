      var IndexBuy = document.querySelectorAll(".buy");
      var popupIndexBuy = document.querySelector(".write-us-buy");

      var linkIndex = document.querySelector(".btn-email");
      var popupIndex = document.querySelector(".write-us");
      var close = document.querySelectorAll(".modal-content-close");
      var loginName = popupIndex.querySelector(".your-name");
      var form = popupIndex.querySelector("form");
      var loginName = popupIndex.querySelector(".your-name");
      var yourEmail = popupIndex.querySelector(".your-email");

      var mapOpen = document.querySelector(".map");
      var mapPopup = document.querySelector(".pop-up-map");
      
      var tabs = document.querySelectorAll(".tabs dt");
      var firstTab = tabs.item(0);
      var secondTab = tabs.item(1);
      var thirdTab = tabs.item(2);

      var tabSlides = document.querySelectorAll(".tab-first, .tab-second, .tab-third");
      var firstSlide = tabSlides.item(0);
      var secondSlide = tabSlides.item(1);
      var thirdSlide = tabSlides.item(2);

      for (var i = 0; i < IndexBuy.length; i++) {
      IndexBuy[i].addEventListener('click', function (event) {
        event.preventDefault();
        popupIndexBuy.classList.add("write-us-show");
      });
      };
      for (var i = 0; i < close.length; i++) {
      close[i].addEventListener('click', function (event) {
        event.preventDefault();
        popupIndexBuy.classList.remove("write-us-show");
      })
      };

      linkIndex.addEventListener("click", function (event) {
        event.preventDefault();
        popupIndex.classList.add("write-us-show");
        loginName.focus();
      });
      for (var i = 0; i < close.length; i++) {
      close[i].addEventListener('click', function (event) {
        event.preventDefault();
        popupIndex.classList.remove("write-us-show");
        popupIndex.classList.remove("write-error");
      })
      };
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Send");
      });
      form.addEventListener("submit", function (event) {
        if (!loginName.value || !yourEmail.value) {
        event.preventDefault();
        popupIndex.classList.add("write-error");
        } else {
          localStorage.setItem("your-name", loginName.value);
        }
      });
     //map
      mapOpen.addEventListener("click", function (event) {
        event.preventDefault();
        mapPopup.classList.add("write-us-show");
      });
      for (var i = 0; i < close.length; i++) {
      close[i].addEventListener('click', function (event) {
        event.preventDefault();
        mapPopup.classList.remove("write-us-show");
      })
      }; 
      //services-tab
      firstTab.addEventListener("click", function(event) {
        event.preventDefault();
          if (!firstTab.classList.contains("active-tab")) {
            firstTab.classList.add("active-tab");
            firstSlide.classList.add("active-tab-slide");
          if (secondTab.classList.contains("active-tab")) {
              secondTab.classList.remove("active-tab");
              secondSlide.classList.remove("active-tab-slide");
            } 
          else {
              thirdTab.classList.remove("active-tab");
              thirdSlide.classList.remove("active-tab-slide");
            }
          }
        });
       
        secondTab.addEventListener("click", function(event) {
          event.preventDefault();
          if (!secondTab.classList.contains("active-tab")) {
            secondTab.classList.add("active-tab");
            secondSlide.classList.add("active-tab-slide");
          if (firstTab.classList.contains("active-tab")) {
              firstTab.classList.remove("active-tab");
              firstSlide.classList.remove("active-tab-slide");
            } 
          else {
              thirdTab.classList.remove("active-tab");
              thirdSlide.classList.remove("active-tab-slide");
            }
          }
        });

        thirdTab.addEventListener("click", function(event) {
          event.preventDefault();
          if (!thirdTab.classList.contains("active-tab")) {
            thirdTab.classList.add("active-tab");
            thirdSlide.classList.add("active-tab-slide");
          if (secondTab.classList.contains("active-tab")) {
              secondTab.classList.remove("active-tab");
              secondSlide.classList.remove("active-tab-slide");
            } 
          else {
              firstTab.classList.remove("active-tab");
              firstSlide.classList.remove("active-tab-slide");
            }
          }
        });