var acc = document.querySelectorAll(".faq button.accordion");
var panels = document.querySelectorAll(".faq div.pannel");

acc.forEach(function (button) {
    button.addEventListener("click", function () {
        var isActive = this.classList.contains("active");

        // Close all panels and remove active class from all buttons
        panels.forEach(function (panel) {
            panel.style.display = "none";
        });
        acc.forEach(function (btn) {
            btn.classList.remove("active");
            btn.parentElement.classList.remove("active");
        });

        if (!isActive) {
            // Open the clicked panel and mark the button as active
            this.classList.add("active");
            this.parentElement.classList.add("active");
            this.nextElementSibling.style.display = "block";
        }
    });
});
