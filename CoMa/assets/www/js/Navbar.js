	/**
	 * @author Isabel Aguilar Augustín
	 * @brief En caso de que se permita hacer la transicion se ejecuta esta seccion para realizar una query
	 * **/
	function success_dias() {
		db.transaction(query_dias, error_default);
	}
	
	/**
	 * @author Isabel Aguilar Augustín
	 * @brief Creamos la query que deseamos y la ejecutamos
	 * 
	 * **/
	function query_dias(t3) {
		q = "SELECT DISTINCT strftime('%d', Fecha) as Dia FROM Actividades WHERE NombreCon = \'" + chcon + "\';";
		t3.executeSql(q, [], querysuccess_dias, error_default);
	}
	
	/**
	 * @author Isabel Aguilar Augustín
	 * @brief Rellena las actividades del congreso seleccionado en funcion de los dias de este
	 * 
	 * **/
	// Rellena las actividades del congreso actual
	function querysuccess_dias(t3, result3) {
		 $('#timetable').empty(); 
		var html = '<div data-role="content"><div data-role="tabs" id="tabs" data-position="fixed"><div data-role="navbar"><ul>';
		var html_aux = '';
		
		delete num_dias;
		num_dias = new Array ();
		var i = 0;
		
 		$.each(result3.rows, function(index) {
			var row = result3.rows.item(index);
			html = html + '<li><a href="#dia' +row['Dia']		//IDENTIFICADOR DE LA LISTA
			+'">Dia '
			+row['Dia']
			+'</a></li>';
			
			html_aux = html_aux + '<div id="dia' +row['Dia']+ '">'+ row['Dia'] +'</div>';
			
			num_dias [i] = "dia" + row['Dia'];
			i++;
		}); 
		
 		html = html + '</ul></div>';
 		html = html + html_aux + '</div></div>';
 		
 		$('#timetable').append(html).trigger( "create" ); 
	} 