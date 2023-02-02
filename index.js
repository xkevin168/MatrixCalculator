// Action of multiplying AB
document.getElementById("calcButton").onclick = function()
{
    //var nc = document.getElementById("test");
    //nc.innerHTML = "<input type=\"text\" id=\"e34\" size=\"1\"></input>";

    var o;
    var a1, a2, a3, b1, b2, b3;

    for (var row = 1; row <= 3; row++)
    {
        for (var col = 1; col <= 3; col++)
        {
            o = document.getElementById("o" + row + col);

            a1 = parseInt(document.getElementById("e" + row + 1).value);
            a2 = parseInt(document.getElementById("e" + row + 2).value);
            a3 = parseInt(document.getElementById("e" + row + 3).value);

            b1 = parseInt(document.getElementById("b" + 1 + col).value);
            b2 = parseInt(document.getElementById("b" + 2 + col).value);
            b3 = parseInt(document.getElementById("b" + 3 + col).value);

            o.innerHTML = (a1 * b1 + a2 * b2 + a3 * b3);
        }
    }
}

document.getElementById("incRowA").onclick = function()
{
    var mat1 = document.getElementById("matrix1");
    mat1.innerHTML += "\<p id=\"matrix1row3\"\> \<input type=\"text\" id=\"e31\" size=\"1\"\> \<input type=\"text\" id=\"e32\" size=\"1\"\> \<input type=\"text\" id=\"e33\" size=\"1\"\> \</p\>";
}