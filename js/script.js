window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    document.querySelector("header").style.top = "0";
  } else {
    document.querySelector("header").style.top = "-200px";
  }
}
