 window.onload = function() {
  
      // Try to read from local storage, otherwise set to default
      let currentTheme = localStorage.getItem("mytheme") || "Default";

      setTheme("Default", currentTheme);

      const themeSelector = document.getElementById("theme-selector");
      themeSelector.value = currentTheme;

      themeSelector.addEventListener("change", function(e) {
        const newTheme = e.currentTarget.value;
        setTheme(currentTheme, newTheme);
      });

      function setTheme(oldTheme, newTheme) {
        const body = document.getElementsByTagName("body")[0];

        body.classList.remove(oldTheme);
        body.classList.add(newTheme);

        currentTheme = newTheme;

        // Store the new theme in local storage
        localStorage.setItem("mytheme", newTheme);
      }
    };