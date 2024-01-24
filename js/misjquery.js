
$(document).ready(function(){

    $("#francia").click(function(){
        $("#1").show();
        $("#1").addClass("normal")
        $("#2").hide();
        $("#3").hide();

    });

    $("#colombia").click(function(){
        $("#2").show();
        $("#2").addClass("normal")
        $("#1").hide();
        $("#3").hide();
    });

    $("#china").click(function(){
        $("#3").show();
        $("#3").addClass("normal")
        $("#1").hide();
        $("#2").hide();
    });

    $("#Grande").click(function(){

        $("img").removeClass("pequeño normal");
        $("img").addClass("grande");
    });

    $("#pequeño").click(function(){
        $("img").removeClass("grande normal");
        $("img").addClass("pequeño");

    });

    $("#rosa").click(function(){
        $("body").addClass("rosa");
        $("body").removeClass(" azul morado blanco");

    });

    $("#azul").click(function(){
        $("body").addClass("azul");
        $("body").removeClass("rosa morado blanco");

    });
    $("#mora").click(function(){
        $("body").removeClass("rosa azul blanco");
        $("body").addClass("morado");
        

    });
    $("#blanco").click(function(){
        $("body").addClass("blanco");
        $("body").removeClass("rosa azul morado");

    });

  

    $("#borrar").click(function(){
        $("img").removeClass("grande normal pequeño ");
        $("body").removeClass("rosa azul morado");
        
    });


    $("h1").click(function(){
        $("h1").css("color", "black").slideUp(2000).slideDown(2000);
    });

    $("h2").click(function(){
        $("h2").css("color", "black").slideUp(2000).slideDown(2000);
    });


   

    
  
});

function consultar(){
    $.ajax({
        url:"https://jsonplaceholder.typicode.com/posts",
        type:"GET",
        datatype:"json",
        success: function (respuesta){
            console.log(respuesta);


        }
    });


}

function consultar(){
    $.ajax({
        url:"https://jsonplaceholder.typicode.com/posts",
        type:"GET",
        datatype:"json",
        success: function (objetoRespuesta){
            console.log(objetoRespuesta);


        }
    });
}

/*document.getElementById("miBoton").addEventListener("click",(event)=>{
   
    $.ajax({
        url:"https://jsonplaceholder.typicode.com/posts",
        type:"GET",
        datatype:"json",
        success: function (respuesta){
            console.log(respuesta);


        }
    });

})*/



/*function prueba(){
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        type: 'POST',
        data: JSON.stringify({
          title: "nesciunt quas odio",
          body:  "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
          userId: 1
        }),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (data) {
          console.log('Éxito: ', data);
        },
        error: function (error) {
          console.log('Error: ', error);
        }
    });
}*/


$(document).ready(function() {
    // Crear un objeto de datos que se enviará en la solicitud
    var postData = {
      title: 'nesciunt quas odio',
      body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
      userId: 1
    };
  
    // Realizar la solicitud POST
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/posts',
      type: 'POST',
      data: JSON.stringify(postData),
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      success: function (data) {
        console.log('Éxito: ', data);
      },
      error: function (error) {
        console.log('Error: ', error);
      }
    });
  });


  //post profe
  function agregar(){
    //extraer la informacion 
    const objeto = {
        name:document.getElementById("entradaNombre").value,
        job:document.getElementById("entradaTrabajo").value

    }
    $.ajax({
        url:"https://reqres.in/api/users",
        type:"POST",
        data:"jsn",
        success:function(objetoRespuesta){
            alert ("Empleado agregado exitosamente ");
            console.log(objetoRespuesta);
        },
        error: function(res){
            alert ("error");
        }
    });
  }