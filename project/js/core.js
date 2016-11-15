
var time_to_load = 30;


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

$(document).ready(function(){


    /*
        comandos genéricos - inicio
    */

    $('[data-toggle="tooltip"]').tooltip();

    $('ul.bs-glyphicons-list > li').addClass("pointer");

    $('.code-actived2').addClass("hidden");
    $('.code-active1').click(function(){

        $('.code-active2').parent().removeClass("active");
        $('.code-active1').parent().addClass("active");

        $('.code-actived1').removeClass("hidden");
        $('.code-actived2').addClass("hidden");
    });
    $('.code-active2').click(function(){

        $('.code-active1').parent().removeClass("active");
        $('.code-active2').parent().addClass("active");

        $('.code-actived2').removeClass("hidden");
        $('.code-actived1').addClass("hidden");
    });

    /*
        comandos genéricos - fim
    */



    /*
        comandos necessarios para o Bubblesort - inicio
    */
    $(".btn-teoria-bubble").click(
        function(){
            window.location="bubblesort.htm";
        });
    $(".btn-exemplos-bubble").click(
        function(){
            window.location="bubblesort-ex.htm";
        });
    $(".btn-outras-midias-bubble").click(
        function(){
            window.location="bubblesort-om.htm";
        });
    /*
        comandos necessarios para o Bubblesort - fim
    */

    /*
        comandos necessarios para o Shellsort - inicio
    */
    $(".btn-teoria-shell").click(
        function(){
            window.location="shellsort.htm";
        });
    $(".btn-exemplos-shell").click(
        function(){
            window.location="shellsort-ex.htm";
        });
    $(".btn-outras-midias-shell").click(
        function(){
            window.location="shellsort-om.htm";
        });
    /*
        comandos necessarios para o Shellsort - fim
    */

    /*
        comandos necessarios para o Mergesort - inicio
    */
    $(".btn-teoria-merge").click(
        function(){
            window.location="mergesort.htm";
        });
    $(".btn-exemplos-merge").click(
        function(){
            window.location="mergesort-ex.htm";
        });
    $(".btn-outras-midias-merge").click(
        function(){
            window.location="mergesort-om.htm";
        });
    /*
        comandos necessarios para o Mergesort - fim
    */

    /*
        comandos necessarios para o selectionsort - inicio
    */
    $(".btn-teoria-selection").click(
        function(){
            window.location="selectionsort.htm";
        });
    $(".btn-exemplos-selection").click(
        function(){
            window.location="selectionsort-ex.htm";
        });
    $(".btn-outras-midias-selection").click(
        function(){
            window.location="selectionsort-om.htm";
        });
    /*
        comandos necessarios para o selectionsort - fim
    */

    /*
        comandos necessarios para o quicksort - inicio
    */
    $(".btn-teoria-quick").click(
        function(){
            window.location="quicksort.htm";
        });
    $(".btn-exemplos-quick").click(
        function(){
            window.location="quicksort-ex.htm";
        });
    $(".btn-outras-midias-quick").click(
        function(){
            window.location="quicksort-om.htm";
        });
    /*
        comandos necessarios para o quicksort - fim
    */

    /*
        Parâmetros do roteiro indexado - inicio

    */

    var roteiro = getCookie("roteiro");

    if(roteiro=="Y"){

        $(".roteiro-play").addClass("hidden");

        setTimeout(function(){

            var roteiro = getCookie("roteiro");

            if(roteiro=="Y"){
                //var path      = window.location.pathname;
                //var page      = path.split("/").pop();

                var next_page = $('body').attr("next");

                window.location = next_page;
            }
        }, time_to_load*1000);
    }
    else{
        $(".roteiro-stop").addClass("hidden");
    }

    $(".roteiro-play").click(function(){

            setCookie("roteiro", "Y", 2);
            $(".roteiro-stop").removeClass("hidden");
            $(".roteiro-play").addClass("hidden");

            setTimeout(function(){

                var roteiro = getCookie("roteiro");

                if(roteiro=="Y"){
                    //var path      = window.location.pathname;
                    //var page      = path.split("/").pop();

                    var next_page = $('body').attr("next");

                    window.location = next_page;
                }
            }, time_to_load*1000);
        });
    $(".roteiro-stop").click(function(){

            setCookie("roteiro", "N", 2);
            $(".roteiro-play").removeClass("hidden");
            $(".roteiro-stop").addClass("hidden");
        });



    /*
        Parâmetros do roteiro indexado - fim
    */
});
