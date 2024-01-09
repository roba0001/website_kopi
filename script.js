// // INDHOLDSFORTEGNELSE FOR PORTFOLIO
// // fået af ChatGPT

document.addEventListener("DOMContentLoaded", function () {
  var tocContainers = document.querySelectorAll(".toc-container");

  tocContainers.forEach(function (toc) {
    var headings = toc.nextElementSibling.querySelectorAll("h2");
    if (headings.length > 0) {
      var ul = document.createElement("ul");

      headings.forEach(function (heading) {
        var li = document.createElement("li");
        var link = document.createElement("a");
        link.textContent = heading.textContent;
        link.setAttribute("href", "#" + heading.id);

        link.addEventListener("click", function (e) {
          e.preventDefault();
          var targetId = this.getAttribute("href").substring(1);
          var targetElement = document.getElementById(targetId);

          if (targetElement) {
            var headerHeight = document.querySelector("header").offsetHeight || 0;
            window.scrollTo({
              top: targetElement.offsetTop - headerHeight,
              behavior: "smooth",
            });
          }
        });

        li.appendChild(link);
        ul.appendChild(li);
      });

      toc.appendChild(ul);
    }
  });
});
