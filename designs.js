

function makeGrid(){
    var inputHeight = document.getElementById("inputHeight").value;
    var inputWidth = document.getElementById("inputWidth").value;
    var tbl = document.getElementById("pixelCanvas");
    tbl.innerHTML = "";
    for(i = 0; i < inputHeight; i++){
        var row = tbl.insertRow(i);
        for(j = 0; j < inputWidth; j++){
            var cell = row.insertCell(j);
            cell.addEventListener("click", function(elem){
                elem.currentTarget.style.backgroundColor = document.getElementById("colorPicker").value;
            });
        }
    }

}