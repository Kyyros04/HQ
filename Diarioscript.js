var arraytemp=[];

class CreaItem{
  constructor(nome){
	this.nome=nome;
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

function rem(id){
	var target=document.getElementById(id);
		var dimenticato=prompt("vuoi strappare queste pagine?");
		if(dimenticato=="si"){
			arraytemp.push(id.match(/[0-9]+/g)[0]);
			var parent=target.parentNode;
			parent.parentNode.removeChild(parent);
		}
}

function aggiungiitem(){
	var nom=document.getElementById("aggiunta")
	var item= new CreaItem(nom.value.toString())
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
	nodino.id=n.toString()
	var riga=`<td id="n${n.toString()}"><div class="coldiario">-${item.nome}</div></td><td><input type='button' value='-' onclick='rem("n${n.toString()}")'></button></td></tr>`
	padre.appendChild(nodino).innerHTML=riga
	nom.value="";
	document.getElementById("accendiamo").onclick="";
	//alert(padre.getElementsByTagName("tr")[0].innerHTML.match(/[\w +-]+(?=<)/g)[0])
}