
	/**
	 * @author Isabel Aguilar Augustín
	 * @brief En caso de que se permita hacer la transicion se ejecuta esta seccion para realizar una query
	 * **/
	function success_info() {
		db.transaction(query_info, error_default);
	}
	
	/**
	 * @author Isabel Aguilar Augustín
	 * @brief Creamos la query que deseamos y la ejecutamos
	 * 
	 * **/
	function query_info(t2) {
		q = "SELECT Informacion FROM Congresos WHERE Nombre = \'" + chcon + "\';";
		t2.executeSql(q, [], querysuccess_info, error_default);
	}
	
	/**
	 * @author Isabel Aguilar Augustín
	 * @brief Rellena la "Info" de la aplicacion en función del congreso seleccionado
	 * 
	 * **/
	function querysuccess_info(t2, result2) {
		//Rellena la ventana con la información
		$('#info').empty();
		$.each(result2.rows, function(index) {
			var row = result2.rows.item(index);
			$('#info').append(
					'<h1>' + row['Informacion'] + '</h1>');
		});
		$('#info').listview();		
	}