document.getElementById("btn").onclick = function multiplicationTable() {

  var table;
  table = '<table id="mtable">';
  var num = document.getElementById("val1").value;

  if (num == null || num == "") num = 5;
  for (i = 1; i <= 10; i++) {
    table += "<tr><td>" + num + "*" + i + "=" + num * i + "</td></tr>";
  }
  table += "</table>";
  document.getElementById("res").innerHTML = table;
};
