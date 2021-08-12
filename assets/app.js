$(document).ready(function(){
	$("h1").fadeIn(3000);
    $("#anim1").slideDown(2000);
    $("#anim3").delay(1000);
    $("#anim3").slideDown(2000);
    $("#anim8").delay(3000);
    $("#anim8").slideDown(2000);
    $("footer").delay(4000);
    $("footer").fadeIn(2000);
})

const calendario = () => {
    $("#anim4").fadeIn(2000)
        .delay(2000)
        .fadeOut(2000)
}

const checkmark = () => {
    $("#anim5").fadeIn(2000)
        .delay(2000)
        .fadeOut(2000)
}

const editar = () => {
    $("#anim6").fadeIn(2000)
        .delay(2000)
        .fadeOut(2000)
}

const paquete = () => {
    $("#anim7").fadeIn(2000)
        .delay(2000)
        .fadeOut(2000)
}

$("#btnCalendario").click(calendario);
$("#btnCheckmark").click(checkmark);
$("#btnEditar").click(editar);
$("#btnPaquete").click(paquete);
