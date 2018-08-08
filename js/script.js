$(window).scroll(function()
{	
	//estilos nosotros
	if($(window).scrollTop()>=$("#nosotros").position().top && $(window).scrollTop()<$("#men").position().top)
	{	
		//estilos del navbar
		$(".menu").css({"border-bottom":"white solid"});	
		$(".menu__logo").css({"display":"inline"});	
		$(".menu__logo2").css({"display":"none"});
		$("a").css({"color":"white"});

		//para el activo
		$("#menu2").addClass("menu__contactoNosotros-activo");
		$("#menu3").removeClass("menu__ropa");
		$("#menu4").removeClass("menu__ropa");
		$("#menu5").removeClass("menu__ropa");
		$("#menu7").removeClass("menu__contactoNosotros-activo");
	}	
	else if ($(window).scrollTop()>=$("#men").position().top && $(window).scrollTop()<$("#contacto").position().top)
	{	//estilos para men women y kids
		$(".menu").css({"border-bottom":"gray solid"});
		$(".menu__logo2").css({"display":"inline"});
		$(".menu__logo").css({"display":"none"});
		$("a").css({"color":"black"});
		$("#menu__navegacionMovil").css({"z-index":"200"});
		//estilos solo para men
		if($(window).scrollTop()>=$("#men").position().top && $(window).scrollTop()<$("#women").position().top)
		{
			$("#menu3").addClass("menu__ropa");
			$("#menu2").removeClass("menu__contactoNosotros-activo");
			$("#menu4").removeClass("menu__ropa");
			$("#menu5").removeClass("menu__ropa");
			$("#menu7").removeClass("menu__contactoNosotros-activo");
			$("#menuBlanco").attr("src","img/menu_movil2.png");
		}
		

		else if($(window).scrollTop()>=$("#women").position().top && $(window).scrollTop()<$("#kids").position().top)
		{	//estilos solo para women
			$("#menu4").addClass("menu__ropa");
			$("#menu3").removeClass("menu__ropa");
			$("#menu2").removeClass("menu__contactoNosotros-activo");
			$("#menu5").removeClass("menu__ropa");
			$("#menu7").removeClass("menu__contactoNosotros-activo");
			$("#menuBlanco").attr("src","img/menu_movil2.png");
		}
			//estilos para niños
		else if($(window).scrollTop()>=$("#kids").position().top && $(window).scrollTop()<$("#contacto").position().top)
		{
			$("#menu5").addClass("menu__ropa");
			$("#menu3").removeClass("menu__ropa");
			$("#menu2").removeClass("menu__contactoNosotros-activo");
			$("#menu4").removeClass("menu__ropa");
			$("#menu7").removeClass("menu__contactoNosotros-activo");
			$("#menuBlanco").attr("src","img/menu_movil2.png");

			// $("").removeId("menuBlanco");
		}

	}
	
	else if ($(window).scrollTop()>=$("#inicio").position().top && $(window).scrollTop()<$("#nosotros").position().top)
	{
		$(".menu__logo").css({"display":"none"});
		$(".menu__logo2").css({"display":"none"});
		$(".menu").css({"border-bottom":"none"});
		$("a").css({"color":"white"});

		//estilos para on click y asi

			$("#menu5").removeClass("menu__ropa");
			$("#menu3").removeClass("menu__ropa");
			$("#menu2").removeClass("menu__contactoNosotros-activo");
			$("#menu4").removeClass("menu__ropa");
			$("#menu7").removeClass("menu__contactoNosotros-activo");	
			$("#menuBlanco").attr("src","img/menu_movil.png");
		
	}

	else
	{
		$(".menu").css({"border-bottom":"white solid"});	
		$(".menu__logo").css({"display":"inline"});	
		$(".menu__logo2").css({"display":"none"});
		$("li a").css({"color":"white"});

		//estilos para click y asi

		$("#menu2").removeClass("menu__contactoNosotros-activo");
		$("#menu7").addClass("menu__contactoNosotros-activo");
		$("#menu3").removeClass("menu__ropa");
		$("#menu4").removeClass("menu__ropa");
		$("#menu5").removeClass("menu__ropa");
		$("#menuBlanco").attr("src","img/menu_movil.png");

	}
});


// animaciones 
function menu(num)
{
	
	if(num==2)
	{

		var seccion='#nosotros';
		$("#menu2").addClass("menu__contactoNosotros-activo");
		$("#menu3").removeClass("menu__ropa");
		$("#menu4").removeClass("menu__ropa");
		$("#menu5").removeClass("menu__ropa");
		$("#menu7").removeClass("menu__contactoNosotros-activo");
	}

	else if(num==3)
	{

		var seccion='#men';
		$("#menu3").addClass("menu__ropa");
		$("#menu2").removeClass("menu__contactoNosotros-activo");
		$("#menu4").removeClass("menu__ropa");
		$("#menu5").removeClass("menu__ropa");
		$("#menu7").removeClass("menu__contactoNosotros-activo");
		$("#menuAzul").addClass("menu__hamburguesa");
	}

	else if(num==4)
	{	
		var seccion='#women';
		$("#menu4").addClass("menu__ropa");
		$("#menu3").removeClass("menu__ropa");
		$("#menu2").removeClass("menu__contactoNosotros-activo");
		$("#menu5").removeClass("menu__ropa");
		$("#menu7").removeClass("menu__contactoNosotros-activo");
		$("#menuAzul").addClass("menu__hamburguesa");
	}
	else if(num==5)
	{	

		var seccion='#kids';
		$("#menu5").addClass("menu__ropa");
		$("#menu3").removeClass("menu__ropa");
		$("#menu2").removeClass("menu__contactoNosotros-activo");
		$("#menu4").removeClass("menu__ropa");
		$("#menu7").removeClass("menu__contactoNosotros-activo");
		$("#menuAzul").addClass("menu__hamburguesa");
	}

	else if(num==6)
	{

		$("#menu5").removeClass("menu__ropa");
		$("#menu3").removeClass("menu__ropa");
		$("#menu2").removeClass("menu__contactoNosotros-activo");
		$("#menu4").removeClass("menu__ropa");
		$("#menu7").removeClass("menu__contactoNosotros-activo");
		$("#menuAzul").removeClass("menu__hamburguesa");	
	}

	else if(num==7)
	{	
		var seccion='#contacto';
		$("#menu2").removeClass("menu__contactoNosotros-activo");
		$("#menu7").addClass("menu__contactoNosotros-activo");
		$("#menu3").removeClass("menu__ropa");
		$("#menu4").removeClass("menu__ropa");
		$("#menu5").removeClass("menu__ropa");
		$("#menuAzul").removeClass("menu__hamburguesa");

		

	}
	//para que anime bonito con el click
	$("html, body").animate({scrollTop: $(seccion).offset().top}, 1000);
}

// Menú móvil

function muestra_menu()
{	//para que el menu se abra y cierre bonito en celulares
	$(".menu__navegacion").slideToggle();
}


