
    let color=document.getElementById("colorSelect");
    function SR() {
        let selectedOption=color.value;
        color.removeChild(document.getElementById(selectedOption));
    }
