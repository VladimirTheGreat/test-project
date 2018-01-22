var xmlHttp = createXmlHttpRequestObject();

//create object

function createXmlHttpRequestObject(){
	var xmlHttp;
	if (window.XMLHttpRequest){
		xmlHttp = new XMLHttpRequest();
	}else{
		xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	return xmlHttp;
}

//called onload

function process(){
	if(xmlHttp){
		try{
			xmlHttp.open("GET", "http://localhost:8000/tuna.xml", true);
			xmlHttp.onreadystatechange = handleStateChange;
			xmlHttp.send(null)
		}catch(e){
			alert("Problem in process function");
		}	
}
}

// when state changes

function handleStateChange(){
	if(xmlHttp.readyState == 4){
		if(xmlHttp.status == 200){
			try{
				handleResponse();
			}catch(e){
				alert(e.toString());
			}
		}else{
			alert("problem in handle function");
		}

}
}

//handle the response from the server

function handleResponse(){
	var xmlResponse = xmlHttp.responseXML;
	root = xmlResponse.documentElement;
	names = root.getElementByTagName("name");
	ssns = root.getElementsByTagName("ssn");
	
	
	var stuff = "";
	for (var  i=0; i<names.lenghth; i++){
		stuff += names.item(i).firstChild.data + "-" + ssns.item(i).firstChild.data + "<br/>"; 
	}
	
	theD =  document.getElementById("theD");
	theD.innerHTML = stuff;
}



