/*************************** AGREGAR FAVORITO *******************************/

/**
 * @author Isabel Aguilar Augustín
 * @brief Esta funcion se encarga de añadir una actividad a favoritos
 * @param actividad Nombre de la actividad que queremos guardar en favoritos
 * @param congeso Nombre del congreso al que pertenece dicha actividad
 * 
 * @postcondition Tras esta funcion, el valor del parametro Favorito dentro de la BD sera 1
 * **/
function saveFave(actividad, congreso) {
	   	//alert("Pulse favorito : "+ actividad +" del congreso: "+congreso+"!");
	   	chact = actividad;
	   	chcon = congreso;
	   	db.transaction(populate_void5, error_default, success_confav);
	   	
	   	rellena_favoritos ();
	   	
	}

/*************************** CONSULTAR FAVORITO *******************************/

function success_confav() {
	db.transaction(query_confav, error_default);
}

function query_confav(t5) {
	q = "SELECT Favorito FROM Actividades WHERE NombreCon = \'" + chcon + "\' and  NombreAct = \'" + chact + "\' ";
	t5.executeSql(q, [], querysuccess_confav, error_default);
}

function querysuccess_confav(t5, result5) {
	$.each(result5.rows, function(index) {
		var row = result5.rows.item(index);
		if (row['Favorito'] == 0 || row['Favorito'] == null || row['Favorito'] == undefined){
   			db.transaction(populate_void4, error_default, success_fav);
   		}
   		else
   			db.transaction(populate_void, error_default, success_disfav);
	});
}

/*************************** AGREGAR FAVORITO *******************************/

/**
 * @author Isabel Aguilar Augustín
 * @brief En caso de que se permita hacer la transicion para pasar una actividada favoritos
 * realizamos una query
 * **/
function success_fav() {
	db.transaction(query_fav, error_default);
}
/**
 * @author Isabel Aguilar Augustín
 * @brief Creamos la query que deseamos y la ejecutamos
 * 
 * **/
function query_fav(t4) {
	q = "UPDATE Actividades SET Favorito=1 WHERE NombreCon = \'" + chcon + "\' and  NombreAct = \'" + chact + "\' ";
	t4.executeSql(q, [], querysuccess_fav, error_default);
}

/**
 * @author Isabel Aguilar Augustín
 * @brief En caso de que la query se realice con exito, recargamos la pagina
 * 
 * **/
function querysuccess_fav(t4, result4) {
	var actSinEspa = chact.replace(" ","");
	var congSinEspa = chcon.replace(" ","");
	var id = actSinEspa + congSinEspa + 'add';
	$("#"+id).attr("value","Quitar Favorito").button('refresh');
	//alert ("Agregamos Favoritos!");
}

/*************************** QUITAR FAVORITO *******************************/

/**
 * @author Isabel Aguilar Augustín
 * @brief En caso de que se permita hacer la transicion para pasar una actividada favoritos
 * realizamos una query
 * **/
function success_disfav() {
	db.transaction(query_disfav, error_default);
}
/**
 * @author Isabel Aguilar Augustín
 * @brief Creamos la query que deseamos y la ejecutamos
 * 
 * **/
function query_disfav(t) {
	q = "UPDATE Actividades SET Favorito=0 WHERE NombreCon = \'" + chcon + "\' and  NombreAct = \'" + chact + "\' ";
	t.executeSql(q, [], querysuccess_disfav, error_default);
}

/**
 * @author Isabel Aguilar Augustín
 * @brief En caso de que la query se realice con exito, recargamos la pagina
 * 
 * **/
function querysuccess_disfav(t, result) {
	var actSinEspa = chact.replace(" ","");
	var congSinEspa = chcon.replace(" ","");
	var id = actSinEspa + congSinEspa + 'add';
	$("#"+id).attr("value","Agregar Favorito").button('refresh');
}


//Populate vacio, cuando no tenemos que hacer nada
function populate_void(t) {}
//Populate vacio, cuando no tenemos que hacer nada
function populate_void4(t4) {}
//Populate vacio, cuando no tenemos que hacer nada
function populate_void5(t5) {}



