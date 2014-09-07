
function rellena_favoritos (){
	db.transaction(populate_void, error_default, success_listfav);
}

function success_listfav() {
	db.transaction(query_listfav, error_default);
}

function query_listfav (t){
	q = "SELECT NombreAct, Informacion, strftime('%H', Hora_ini) as Hora,strftime('%M', Hora_ini) as Minuto, NombreCon, strftime('%d', Fecha) as Dia FROM Actividades WHERE Favorito == 1";
	t.executeSql(q, [], querysuccess_listfav, error_default);
}

//Función que devuelve error SQL por defecto
function error_fav(err) {
	alert("Error processing SQL: " + err.code);
}

function querysuccess_listfav (t, result){
	
	var row ;
	var html;
	$('#listafavoritos').empty();
	if (result.rows.length > 0 ){	
		var nombrecongreso = "";
		html = '<div data-role="collapsible" data-collapsed="false">';	
		var entra = 0;
		$.each(result.rows, function(index) {
			var row = result.rows.item(index);
			if (nombrecongreso != row['NombreCon']){
				nombrecongreso = row ['NombreCon'];
				html = html + '<h3>' + nombrecongreso +' </h3><hr>';
			}
			html = html+ '<h3><font color="blue">'+ row['NombreAct'] 
			+ '</font>   Inicio: '
			+ row['Hora'] + ':' + row['Minuto']	
			+ '</h3>'
			+ '<p>'+ row['Informacion'] + '</p>';
			html = html + '</div>';
		} );
		html = html + '</div>';
	}
	else {
		html = "<h4>No hay ninguna actividad agregada a favoritos :( </h4>"
	}
	
	$('#listafavoritos').append(html).trigger( "create" ); 
}

//Populate vacio, cuando no tenemos que hacer nada
function populate_void(t) {}