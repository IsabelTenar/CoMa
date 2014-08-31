

/**
	 * @author Isabel Aguilar Augustín
	 * @brief En caso de que se permita hacer la transicion se ejecuta esta seccion para realizar una query
	 * **/
  	function success_acti() {
		db.transaction(query_acti, error_default);
	}
	
  	/**
	 * @author Isabel Aguilar Augustín
	 * @brief Creamos la query que deseamos y la ejecutamos
	 * 
	 * **/
	function query_acti(t3) {
		q = "SELECT NombreAct, Informacion, strftime('%H', Hora_ini) as Hora,strftime('%M', Hora_ini) as Minuto, NombreCon, strftime('%d', Fecha) as Dia, Favorito FROM Actividades WHERE NombreCon = \'" + chcon + "\';";
		t3.executeSql(q, [], querysuccess_acti, error_default);
	}
	
	// Rellena las actividades del congreso actual
	function querysuccess_acti(t3, result3) {

		var j;
		//Limpiamos lo que hata dentro de esa etiqueta
 		for (j = 0; j < num_dias.length ; j++){
 			$('#' + num_dias[j]).empty(); 
 		}
		
		//Guardamos memoria para los html que vamos a generar
		var html = new Array(num_dias.length);
		
		//Les ponemos a todos la cabecera
 		for (j = 0; j < num_dias.length ; j++){
 			html[j] = '<div data-role="collapsible-set">';
 		}

		
		//Rellenar dentro de cada navbar sus correspondientes actividades
 		$.each(result3.rows, function(index) {
			var row = result3.rows.item(index);
			var aux = "dia" + row['Dia'];
			var id = "";
			var actSinEspa = "";
			var congSinEspa = "";
			
			for (j = 0; j < num_dias.length ; j++){
				if (aux == num_dias[j]){
					
					actSinEspa = row['NombreAct'].replace(" ","");
					congSinEspa = row['NombreCon'].replace(" ","");
					id = actSinEspa + congSinEspa;
					
					html[j] = html[j] + '<div data-role="collapsible" data-collapsed="false">'
					  + '<h3><font color="blue">'+ row['NombreAct'] 
					  + '</font>   Inicio: '
					  + row['Hora'] + ':' + row['Minuto']	
					  + '</h3>'
					  + '<p>'+ row['Informacion']
					  +'<div id="button-set">'
                      +'<input type="button"';
					
					if (row['Favorito'] == 0|| row['Favorito'] == null || row['Favorito'] == undefined){
						html[j] = html[j] + 'value = "Agregar a Favoritos"';
                    }
					else {
						html[j] = html[j] +'value = "Agregar a Favoritos"';
					}
					html[j] = html[j] + ' data-mini="true" data-inline="true" data-icon="star"' 
                      + 'data-icon-pos="top" id="'+id+ 'add' + '"'
                      + 'onclick="saveFave(\''+row['NombreAct']+'\',\''+row['NombreCon']+'\')"'
                      + '/>'
                      +'</div>'
					  +'</p>'
					  + '</div>';
				}
			}
		}); 
		  
 		for (j = 0; j < num_dias.length ; j++){
 			html[j] = html[j] + '</div>';
 			$('#' + num_dias[j]).append(html[j]).trigger( "create" );
 		}
	} 