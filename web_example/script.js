
function loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      myFunction(xmlhttp);
    }
  };
  xmlhttp.open("GET", "http://localhost:8000/data_freq.xml", true);
  console.log("Data connection open");
  xmlhttp.send();
}

function myFunction(xml) {
  var xmlDoc = xml.responseXML;
  
  var volts = document.getElementById("volts").innerHTML = xmlDoc.getElementsByTagName("volts")[0].childNodes[0].nodeValue;
  var freq = document.getElementById("freq").innerHTML = xmlDoc.getElementsByTagName("freq")[0].childNodes[0].nodeValue; // it will return the value from xml file
  var current = document.getElementById("current").innerHTML = xmlDoc.getElementsByTagName("current")[0].childNodes[0].nodeValue;

}
