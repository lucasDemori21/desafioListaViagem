const listaPais = new Array();
function cadastrarPais() {
    var pais = document.getElementById("cadastro").value;
    listaPais.push(pais);
    alert("País '"+pais+"' cadastrado.");
    //document.getElementById("#tabela").classList=listaPais;
    tabelaDePaises();


}

function tabelaDePaises() {
    div = document.getElementById("tabela");
    div.innerHTML="";
    //esvaziar a div que contém a tabela

    var tabela = document.createElement("table");
    tabela.setAttribute("class", "bordaTabela")
    tabela.setAttribute("border", "2");
    //<table></table>
    var thead = document.createElement("thead");
    thead.setAttribute("class", "bordaTabela")
    //<thead></thead>
    var tbody = document.createElement("tbody");
    tbody.setAttribute("class", "bordaTabela")
    //<tbody></tbody>
    var tr = document.createElement("tr");
    //<tr></tr>
    var th = document.createElement("th");
    th.setAttribute("class", "bordaTabela")
    //<th></th>
    var texto = document.createTextNode("Lista de países");
    //Lista de Países
    th.appendChild(texto);
    //<th>Lista de Países</th>
    tr.appendChild(th);
    //<tr> <th> Lista de Países </th> <tr>
    thead.appendChild(tr);
    //<thead> <tr> <th> Lista de paises </th> </tr> </thead>
    tabela.appendChild(thead);

    for (var i = 0; i < listaPais.length; i++) {
        var trinfo = document.createElement("tr");
        //<tr></tr>
        var texto = document.createTextNode(listaPais[i]);
        //Texto do elemento
        var btn = document.createElement("button");
        //<button></button>
        btn.setAttribute("class", "botaoLista");
        btn.setAttribute("type", "button");        
        btn.setAttribute("value", listaPais[i]);
        btn.setAttribute("onclick", "removePais(this.value)");   
        btn.appendChild(texto);
        //<button type="button" value="Alemanha" onclick="removerPais(this.value)">Alemanha</button>
        trinfo.appendChild(btn);
        //<tr><button type="button" value="Alemanha" onclick="removerPais(this.value)">Alemanha</button></tr>
        tbody.appendChild(trinfo);
        //<tbody> <tr></tr> </tbody>
    }
    tabela.appendChild(tbody);
    div.appendChild(tabela);
}

function removePais(remover) {
    if(remover==""){
        var btnremover = document.getElementById("remover").value;
        remover = btnremover;
    }
    for (var i = 0; i < listaPais.length; i++) {
        if (remover == listaPais[i]) {
            alert(listaPais[i] + " Removido com sucesso!");
            listaPais.splice(i, 1);
            tabelaDePaises();
            return true;
        }
    }
    alert("País não encontrado!");

}

