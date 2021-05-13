var arraytemp=[];

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
}

document.getElementById("aggiunta").addEventListener("change", puoiinviare)
function puoiinviare(){
	var bottoneV=document.getElementById("aggiunta");
	if(bottoneV.value!=""){
		document.getElementById("accendiamo").onclick=aggiungiitem
	}	
}
/*attivatore di tasto riordina, per ora non serve
document.getElementById("tabitem").addEventListener("change", puoiriordinare)
function puoiriordinare(){
	document.getElementById("accendiamo1").onclick=riordina		
}*/

function add(id,nome,qnt){
	do{
	var n=Number(prompt("quanti ne 	prendi?"));
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
			arraytemp.push(id.match(/[0-9]+/g)[0]);
			var parent=target.parentNode;
			parent.parentNode.removeChild(parent);
		}
	}
}

function oss(imm){
	var cod=imm;
	var url= `<img src="cards/${imm.toString()}.png" alt="Devi aver dimenticato cosa stavi cercando" height="280px" width="195px">`
	var target=document.getElementById("display");
	target.innerHTML=url
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
	var n;
	if(arraytemp==0)
		 n=padre.getElementsByTagName("tr").length;
	else
		{
			n=arraytemp[0];
			arraytemp.shift();
		}
	var nodino=document.createElement("tr");
	nodino.style.display="table-row";
	nodino.id=n.toString()
	var riga=`<td id="n${n.toString()}" onclick='oss("${item.nome}")'><div class="col4">${item.nome}</div></td><td id="q${n.toString()}">${item.qnt}</td><td id="p${n.toString()}">${item.prz}</td><td><input type='button' value='+' onclick='add("q${n.toString()}","${item.nome}",document.getElementById("q${n.toString()}").innerHTML)'></button></td><td><input type='button' 	value='-' onclick='rem("q${n.toString()}","${item.nome}",document.getElementById("q${n.toString()}").innerHTML)'></button></td><td><select name="Categoria" id="categ${n.toString()}"><option value="All" selected="selected">All</option><option value="Armi">Armi</option><option value="Scudi">Scudi</option><option value="Elmi">Elmi</option><option value="Armor">Armor</option><option value="Oggetti">Oggetti</option><option value="Altro">Altro</option></select></td></tr>`
	padre.appendChild(nodino).innerHTML=riga
	nom.value="";
	document.getElementById("accendiamo").onclick="";
	//alert(padre.getElementsByTagName("tr")[0].innerHTML.match(/[\w +-]+(?=<)/g)[0])
}

function riordina(){
	var padre=document.getElementById("tabitem");
	var n=padre.getElementsByTagName("tr").length;
	if(n==0)return;
	var arr2=padre.getElementsByTagName("tr");
	var arr1=[];
	//var temp;
	for(var i=0;i<n;i++){
   		arr1.push([padre.getElementsByTagName("tr")[i].innerHTML.match(/[\w +-]+(?=<)/g)[0],padre.getElementsByTagName("tr")[i].innerHTML.match(/[0-9]+/g)[0]]);
	}
	//fin qui ok
	arr1.sort();
	//alert("in fase di lavorazione"+arr1.toString());
	for(var j=0;j<n;j++){
	  padre.insertBefore(document.getElementById(arr1[j][1].toString()),arr2[j]);
	}
}
	
function vis(parametro){
	var padre=document.getElementById("tabitem");
	var arr=padre.getElementsByTagName("tr");
	var n=arr.length;
	var ident;
	var categ;
	for(var i=0;i<n;i++){
	 ident=arr[i].id;
	 categ="categ"+ident
	 //alert(ident+categ+parametro+arr[i].toString());
	 if(parametro=="All") document.getElementById(ident).style.display="table-row";
	 else{
	    document.getElementById(ident).style.display="table-row";
	    if(document.getElementById(categ).value!=parametro) document.getElementById(ident).style.display="none";
	  }
	}
}

