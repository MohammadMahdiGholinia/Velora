const loader = document.getElementById("preloader");

    document.body.style.overflow = "hidden";
    
    window.addEventListener("load", () => { 
      loader.classList.add("hidden");
      document.body.style.overflow = "auto";
    });

