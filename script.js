//your JS code here. If required.
let color=document.getElementById("colorSelect");
    function SR() {
        let selectedOption=color.selectedIndex+1;
        color.removeChild(document.getElementById(selectedOption));
    }