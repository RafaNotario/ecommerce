
/*CABEZOTE MAMALON*/
$("#btnCategorias").click(function(){

	if(window.matchMedia("(max-width:767px)").matches){
		$("#btnCategorias").after($("#categorias").slideToggle("fast"))
	}else{//sino esta en pantalla movil
		$("#cabezote").after($("#categorias").slideToggle("fast"))

	}
})

