var acc = document.getElementsByClassName("accordion");
var i;

//alert(acc.length);

for(i=0; i<acc.length; i++){
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");

        var panel = this.nextElementSibling;
        panel.classList.toggle("panel-active");

        // if (panel.style.display === "block"){
        //     panel.style.display = "none";
        // } else {
        //     panel.style.display = "block";
        // }
    });

}
