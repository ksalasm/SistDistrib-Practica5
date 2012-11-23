var parser = new X2JS();
function ProfesorList($) {
  xhr('http://localhost:8080/axis2/services/UniversidadService',function (data) {
	//alert(data);
    var xml = parser.xml_str2json(data);
	//alert(JSON.stringify(xml));	
    $.profesores = xml.Envelope.Body.findAllProfesorResponse.return;
	alert($.profesores[0].nombre);
    framux.render();
  }, 'POST', '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><findAllProfesor xmlns="http://service/"></findAllProfesor></soap:Body></soap:Envelope>');
};

/*
function ProfesorList($) {
  xhr('http://localhost:8080/axis2/services/UniversidadService',function (data) {
	alert(data);
    var xml = parser.xml_str2json(data);
    $.profesores = xml.profesores.profesor;
    framux.render();
  },'POST','<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><findAllProfesor xmlns="http://service/"></findAllProfesor></soap:Body></soap:Envelope>');
};
*/


function ProfesorDetail($, params) {
  xhr('data/profesor' + params[0] + '.xml',function(data) {
    var xml = parser.xml_str2json(data);
    $global.profesor = xml.profesor;
    $.prof = $global.profesor;
    framux.render();
  });
};