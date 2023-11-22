var matrix1Rows = 3;
var matrix1Cols = 3;

var matrix2Rows = 3;
var matrix2Cols = 3;


document.getElementById("multiplyABButton").onclick = function()
{
    document.getElementById("outputMessage").innerHTML = "";
    if (matrix1Cols != matrix2Rows)
    {
        document.getElementById("outputMessage").innerHTML = "Incompatible Matrix Dimensions";
        return;
    }

    var o;
    //we don't use 0, for better readability
    var a = new Array(matrix1Cols+1);
    var b = new Array(matrix2Rows+1);

    for (var row = 1; row <= matrix1Rows; row++)
    {
        for (var col = 1; col <= matrix2Cols; col++)
        {
            o = document.getElementById("o" + row + col);

            for (var i = 1; i <= matrix1Cols; i++)
            {
                a[i] = parseInt(document.getElementById("a" + row + i).value);
            }

            for (var i = 1; i <= matrix2Rows; i++)
            {
                b[i] = parseInt(document.getElementById("b" + i + col).value);
            }

            var oValue = 0;
            for (var i = 1; i <= matrix1Cols; i++)
            {
                oValue += a[i] * b[i];
            }
            o.value = oValue;
        }
    }
}

document.getElementById("incRow1").onclick = function()
{
    matrix1Rows++;

    var newRow = document.createElement('div');
    newRow.id = 'matrix1Row' + matrix1Rows;
    
    for (var i = 1; i <= matrix1Cols; i++) 
    {
        var input = document.createElement('input');
        input.type = 'text';
        input.id = 'a' + matrix1Rows  + i;
        input.size = '1';
        newRow.appendChild(input);
    }
    
    document.getElementById('matrix1').appendChild(newRow);
}

document.getElementById("decRow1").onclick = function()
{
    var targetID = 'matrix1Row' + matrix1Rows;
    var targetChild = document.getElementById(targetID);
    document.getElementById('matrix1').removeChild(targetChild);
 matrix1Rows--;
}

document.getElementById("incCol1").onclick = function()
{
    matrix1Cols++;
    for (var i = 1; i <= matrix1Rows; i++) 
    {
        var input = document.createElement('input');
        input.type = 'text';
        input.id = 'a' + i  + matrix1Cols;
        input.size = '1';
        document.getElementById('matrix1Row' + i).appendChild(input);
    }
}

document.getElementById("decCol1").onclick = function()
{
    for (var i = 1; i <= matrix1Rows; i++) 
    {
        var target = document.getElementById('a' + i + matrix1Cols);
        document.getElementById('matrix1Row' + i).removeChild(target);
    }
    matrix1Cols--;
}


document.getElementById("incRow2").onclick = function()
{
    matrix2Rows++;

    var newRow = document.createElement('div');
    newRow.id = 'matrix2Row' + matrix2Rows;
    
    for (var i = 1; i <= matrix2Cols; i++) 
    {
        var input = document.createElement('input');
        input.type = 'text';
        input.id = 'b' + matrix2Rows  + i;
        input.size = '1';
        newRow.appendChild(input);
    }
    
    document.getElementById('matrix2').appendChild(newRow);
}

document.getElementById("decRow2").onclick = function()
{
    var targetID = 'matrix2Row' + matrix2Rows;
    var targetChild = document.getElementById(targetID);
    document.getElementById('matrix2').removeChild(targetChild);
    matrix2Rows--;
}

document.getElementById("incCol2").onclick = function()
{
    matrix2Cols++;
    for (var i = 1; i <= matrix2Rows; i++) 
    {
        var input = document.createElement('input');
        input.type = 'text';
        input.id = 'b' + i  + matrix2Cols;
        input.size = '1';
        document.getElementById('matrix2Row' + i).appendChild(input);
    }
}

document.getElementById("decCol2").onclick = function()
{
    for (var i = 1; i <= matrix2Rows; i++) {
        var target = document.getElementById('b' + i + matrix2Cols);
        document.getElementById('matrix2Row' + i).removeChild(target);
    }
    matrix2Cols--;
}