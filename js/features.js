
/*
** Projeto de IHC
** Visualização de dados agrícolas
** @author: Carolina Melo @colmelo, Luan Rafael @lrpinheiroo , Roberta Abreu @robyabreu
** @Date: 29-11-2013
*/


$(document).ready(function () {
	
	$('.carousel').carousel({
  		interval: 50000
	});
    
    var elements = document.getElementsByClassName('item');
    carregaItens(elements);

});

var desc;
function showDesc (id) {
	var element = document.getElementById(id);
	var label = element.getAttribute("data-label");
	var atual = element.getAttribute("data-atual");
	var projecao = element.getAttribute("data-projecao");
	var unidade = element.getAttribute("data-unidade");

	var dados = label + "\n2011/2012 - " + atual + "\n2021/2022 - " + projecao + "\n" + unidade; 
	desc = document.getElementById("descricao");	
	desc.innerText = dados;

}	

function cleanDesc (argument) {
	desc = document.getElementById("descricao");	
	desc.innerText = "";
}


function googleSearch(element){
	var arg = element.getAttribute("data-label");
	arg = arg.replace(" ","+");
	var url = 'https://www.google.com.br/#q=' + arg;
	window.location.assign(url)
}



function carregaItens(elements) {
    for (var i = elements.length - 1; i >= 0; i--) {
        Hammer(elements[i]).on("swipeleft", function () {
            $('.carousel').carousel('pause');
            $('.carousel').carousel('next');
        });

        Hammer(elements[i]).on("swiperight", function () {
            $('.carousel').carousel('pause');
            $('.carousel').carousel('prev');
        });
    }
}