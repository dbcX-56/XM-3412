(function() {
  const pageName = window.location.pathname.split("/").pop().replace(".html","");

  console.log("PAGE:", pageName); // 👈 thêm dòng này

  fetch("https://script.google.com/macros/s/AKfycbxyvafuSgZQv4Ah-DsC9Du3uvM6g1nc9qtonwM15MhWpxGpSLN7AcibsOG55ON_G6GUNw/exec", {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify({
      page: pageName,
      time: new Date().toLocaleString()
    })
  });
})();
