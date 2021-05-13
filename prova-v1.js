class CreaItem{
  constructor(nome,qnt=1,prz=0){
	this.nome=nome;
	this.qnt=qnt;
	this.prz=prz;
  }
  add(n){this.qnt=Number(this.qnt)+Number(n);}
  rem(n){
	if(Number(n)>Number(this.qnt)){ this.qnt=Number(0);}
	else
	{this.qnt=Number(this.qnt)-Number(n);}
	}
  /*oss(){
  	//prendo il nome dell'oggetto, lo cerco tra le immagini precaricate e
	//la mostro a video nella console 
  }*/
}

document.getElementById("aggiunta").addEventListener("change", puoiinviare)
function puoiinviare(){
	var bottoneV=document.getElementById("aggiunta");
	if(bottoneV.value!=""){
		document.getElementById("accendiamo").onclick=aggiungiitem
	}	
}


/*1) tasto "aggiungi oggetto"
//una funzione che mi chiede attraverso un prompt il nome dell'item desiderato
//e la richiederà al server che mi invierà l'oggetto aggiungendolo all'inventario e //l'immagine nei file precaricati dalla pagina e farà un nuovo salvataggio server-//side  
*/

var spada=new CreaItem("spada",3,300);
spada.rem(2);
alert(spada.nome+spada.qnt.toString()+spada.prz.toString());

/*2) tasto +*/
function add(id,nome,qnt){
	do{
	var n=Number(prompt("quanti ne prendi?"));
	}
	while(!(n>=0))
	var item=new CreaItem(nome,qnt)
	item.add(n);
	var target=document.getElementById(id);
	target.innerHTML=item.qnt;
}

function rem(id,nome,qnt){
	do{
	var n=Number(prompt("quanti ne vuoi gettare?"));
	}
	while(!(n>=0))
	var item=new CreaItem(nome,qnt)
	item.rem(n);
	var target=document.getElementById(id);
	target.innerHTML=item.qnt;
	if(item.qnt==0){
		var dimenticato=prompt("vuoi dimenticarti di tale oggetto?");
		if(dimenticato=="si"){
			var parent=target.parentNode;
			parent.parentNode.removeChild(parent);
		}
	}
}

function aggiungiitem(){
	var nom=document.getElementById("aggiunta")
	do{
	var qnt=Number(prompt("quantità?"));
	}
	while(!(qnt>=0))
	do{
	var prz=Number(prompt("prezzo?"));
	}
	while(!(prz>=0))
	var item= new CreaItem(nom.value.toString(),qnt,prz)
	var padre=document.getElementById("tabitem");
	var n=padre.getElementsByTagName("tr").length;
	var nodino=document.createElement("tr");
	nodino.id=n.toString();
	var riga=`<td id="n${n.toString()}">${item.nome}</td><td id="q${n.toString()}">${item.qnt}</td><td id="p${n.toString()}">	${item.prz}</td><td><input type='button' value='+' onclick='add("q${n.toString()}","${item.nome}",document.getElementById("q${n.toString()}").innerHTML)'></button></td><td><input type='button' 	value='-' onclick='rem("q${n.toString()}","${item.nome}",document.getElementById("q${n.toString()}").innerHTML)'></button></td><td><input type='button' value='O_O' 	onclick='oss()'></button></td></tr>`
	padre.appendChild(nodino).innerHTML=riga
	nom.value="";
	document.getElementById("accendiamo").onclick="";
}
	
