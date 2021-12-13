const clearButton = document.getElementById('clear');
clearButton.addEventListener('click',clear);

var lastClicked;
var grid = clickGrid(20,20,function(elem,row,col,i){

    switch (elem.className){
        case (''):
            elem.className = 'clicked';
            break;
        }

        lastClicked = elem;
});

document.body.appendChild(grid);
     
function clickGrid(rows,cols,callback){
    var i = 0;
    var grid = document.createElement('table');
    grid.className = 'grid';
    for (var r = 0;r < rows;++r){
        var tr = grid.appendChild(document.createElement('tr'));
        for (var c = 0;c < cols;++c){
            var cell = tr.appendChild(document.createElement('td'));
            cell.addEventListener('click',(function(elem,r,c,i){
                return function(){
                    callback(elem,r,c,i);
                }
            })(cell,r,c,i),false);
        }
    }
    return grid;
}


 function clear() {
    elem.className = 'clear';
 }

 $('.carousel').carousel()
