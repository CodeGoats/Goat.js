// goat.js

const Goat = {
  konami: function(konamiCode, message) {
    let progress = 0;

    document.addEventListener('keydown', function(event) {
      if (event.key === konamiCode[progress]) {
        progress++;
        if (progress === konamiCode.length) {
          alert(message);
          progress = 0;
        }
      } else {
        progress = 0;
      }
    });
  },
  
  popup: function(txt) {
    window.alert(txt);
    console.log(txt);
  },

  getscreenwidth: function() {
    return screen.availWidth;
  },

  getscreenheight: function() {
    return screen.availHeight;
  },

  setcookie: function(name, info) {
    document.cookie = `${name}=${info}`;
  },

  getCookie: function(cookieName) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(cookieName + '=')) {
        const cookieValue = cookie.substring(cookieName.length + 1);
        return cookieValue;
      }
    }
    return null; // Return null if cookie not found
  },

  deleteCookie: function(cookieName) {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }
};

// Export the Goat object for use in other files
export default Goat;
