
function loadXMLDoc() {
	var volts;
	var freq;
	var current;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      myFunction(xmlhttp);
    }
  };
  xmlhttp.open("GET", "http://192.168.0.100/data_freq.xml", true);
  console.log("Data connection open");
  xmlhttp.send();
}

function myFunction(xml) {
  var xmlDoc = xml.responseXML;
  
   document.getElementById("volts").innerHTML = xmlDoc.getElementsByTagName("volts")[0].childNodes[0].nodeValue;
   document.getElementById("freq").innerHTML = xmlDoc.getElementsByTagName("freq")[0].childNodes[0].nodeValue; // it will return the value from xml file
   document.getElementById("current").innerHTML = xmlDoc.getElementsByTagName("current")[0].childNodes[0].nodeValue;

}
