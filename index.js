var matrix1Rows = 3;
var matrix1Cols = 3;

var matrix2Rows = 3;
var matrix2Cols = 3;


document.getElementById("multiplyABButton").onclick = function()
{
    document.getElementById("outputMessage").innerHTML = "";
    document.getElementById("outputMatrix").innerHTML = "";

    if (matrix1Cols != matrix2Rows)
    {
        document.getElementById("outputMessage").innerHTML = "Incompatible Matrix Dimensions";
        return;
    }


    addColumn('outputMatrix', 'outputMatrixRow', 'o', 0, 0);

    for (var outputCols = 2; outputCols <= matrix2Cols; outputCols++)
    {
        addColumn('outputMatrix', 'outputMatrixRow', 'o', outputCols, 1);
    }

    for (var outputRows = 2; outputRows <= matrix1Rows; outputRows++)
    {
        addRow('outputMatrix', 'outputMatrixRow', 'o', matrix2Cols, outputRows);
    }

    for (var x = 1; x <= matrix2Cols; x++)
    {
        for (var y = 1; y <= matrix1Rows; y++)
        {
            document.getElementById('o' + x + y).readOnly = true;
        }
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

function addRow(matrix_name, row_name, element_name, colsize, rowNumber)
{
    if (colsize == 0 && rowNumber == 0)
    {
        var firstElement = document.createElement('div');
        firstElement.id = row_name + 1;
        var input = document.createElement('input');
        input.type = 'text';
        input.id = element_name + 1  + 1;
        input.size = '1';
        firstElement.appendChild(input);
        firstElement.insertAdjacentText('beforeend', ` `);
        document.getElementById(matrix_name).appendChild(firstElement);
        return;
    }

    var newRow = document.createElement('div');
    newRow.id = row_name + rowNumber;

    for (var i = 1; i <= colsize; i++) 
    {
        var input = document.createElement('input');
        input.type = 'text';
        input.id = element_name + rowNumber  + i;
        input.size = '1';
        newRow.appendChild(input);
        newRow.insertAdjacentText('beforeend', ` `);
    }

    document.getElementById(matrix_name).appendChild(newRow);
}

function removeRow(matrix_name, row_name, rowNumber)
{
    var targetID = row_name + rowNumber;
    var targetChild = document.getElementById(targetID);
    document.getElementById(matrix_name).removeChild(targetChild);
}

function addColumn(matrix_name, row_name, element_name, colsize, rowNumber)
{
    if (colsize == 0 && rowNumber == 0)
    {
        var firstElement = document.createElement('div');
        firstElement.id = row_name + 1;
        var input = document.createElement('input');
        input.type = 'text';
        input.id = element_name + 1  + 1;
        input.size = '1';
        firstElement.appendChild(input);
        firstElement.insertAdjacentText('beforeend', ` `);
        document.getElementById(matrix_name).appendChild(firstElement);
        return;
    }

    for (var i = 1; i <= rowNumber; i++) 
    {
        var input = document.createElement('input');
        input.type = 'text';
        input.id = element_name + i  + colsize;
        input.size = '1';
        document.getElementById(row_name + i).appendChild(input);
        document.getElementById(row_name + i).insertAdjacentText('beforeend', ` `);
    }
}

function removeColumn(row_name, element_name, colsize, rowNumber)
{
    for (var i = 1; i <= rowNumber; i++) 
    {
        var target = document.getElementById(element_name + i + colsize);
        document.getElementById(row_name + i).removeChild(target);
    }
}

document.getElementById("incRow1").onclick = function()
{
    matrix1Rows++;
    addRow('matrix1', 'matrix1Row', 'a', matrix1Cols, matrix1Rows);
}

document.getElementById("decRow1").onclick = function()
{
    if (matrix1Rows > 0)
    {
        removeRow('matrix1', 'matrix1Row', matrix1Rows);
        matrix1Rows--;
    }
}

document.getElementById("incCol1").onclick = function()
{
    matrix1Cols++;
    addColumn('matrix1', 'matrix1Row', 'a', matrix1Cols, matrix1Rows);
}

document.getElementById("decCol1").onclick = function()
{
    removeColumn('matrix1Row', 'a', matrix1Cols, matrix1Rows);
    matrix1Cols--;
}


document.getElementById("incRow2").onclick = function()
{
    matrix2Rows++;
    addRow('matrix2', 'matrix2Row', 'b', matrix2Cols, matrix2Rows);
}

document.getElementById("decRow2").onclick = function()
{
    if (matrix2Rows > 0)
    {
        removeRow('matrix2', 'matrix2Row', matrix2Rows);
        matrix2Rows--;
    }
}

document.getElementById("incCol2").onclick = function()
{
    matrix2Cols++;
    addColumn('matrix2', 'matrix2Row', 'b', matrix2Cols, matrix2Rows);
}

document.getElementById("decCol2").onclick = function()
{
    removeColumn('matrix2Row', 'b', matrix2Cols, matrix2Rows);
    matrix2Cols--;
}