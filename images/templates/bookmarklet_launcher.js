(function () {
  if (window.myBookmarklet !== undefined) {
    myBookmarklet();
    bookmarklet();
  } else {
    let script = document.createElement('script');
    script.setAttribute(
      'src',
      'https://127.0.0.1:8000/static/js/bookmarklet.js?r=' +
        Math.floor(Math.random() * Date.now()),
    );

    document.body.appendChild(script);
  }
})();
