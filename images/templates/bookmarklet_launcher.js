(function () {
  if (window.myBookmarklet !== undefined) {
    myBookmarklet();
    bookmarklet();
  } else {
    let script = document.createElement('script');
    script.setAttribute(
      'src',
      'https://mysite.com:8000/static/js/bookmarklet.js?r=' +
        Math.floor(Math.random() * Date.now()),
    );

    document.body.appendChild(script);
  }
})();
