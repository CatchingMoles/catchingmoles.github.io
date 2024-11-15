// Load the Google Analytics script
(function() {
    var gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-MLW49NFZVV";
    document.head.appendChild(gtagScript);
  
    // Initialize dataLayer and gtag function
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
  
    // Initialize Google Analytics with your tracking ID
    gtag('js', new Date());
    gtag('config', 'G-MLW49NFZVV');
  })();