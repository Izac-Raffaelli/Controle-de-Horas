class Registro {

    constructor() {
        this.id = 1;
        this.arrayRegistros = [];
        this.editId = null;
    }

    registrar() {
       let adicionar = this.lerDados();
        if(this.validaCampos(adicionar)) {
            if(this.editId == null){
                this.inserir(adicionar)
            }else{
                this.atualizar(this.editId,adicionar)
            }                
        };
       this.listaTabela();
       this.limpar();       
    }


    listaTabela(){
        let tbody = document.getElementById("tbody");
        tbody.innerText = " ";

        for(let i = 0;i<this.arrayRegistros.length;i++){
            let tr = tbody.insertRow();

            let td_colaborador = tr.insertCell();
            let td_chamado = tr.insertCell();
            let td_datainicio = tr.insertCell();           
            let td_datafim = tr.insertCell();
            let td_horainicio = tr.insertCell();
            let td_horafim = tr.insertCell();
            let td_justificativa = tr.insertCell();
            let td_acao = tr.insertCell();
                                    

            td_colaborador.innerText = this.arrayRegistros[i].colaborador;
            td_chamado.innerText = this.arrayRegistros[i].chamado;
            td_datainicio.innerText = this.arrayRegistros[i].datainicio;            
            td_datafim.innerText = this.arrayRegistros[i].datafim;
            td_horainicio.innerText = this.arrayRegistros[i].horainicio;
            td_horafim.innerText = this.arrayRegistros[i].horafim;
            td_justificativa.innerText = this.arrayRegistros[i].justificativa;                                  
            
            td_colaborador.classList.add("center");
            td_chamado.classList.add("center");
            td_datainicio.classList.add("center");            
            td_datafim.classList.add("center");
            td_horainicio.classList.add("center");
            td_horafim.classList.add("center");
            td_justificativa.classList.add("center");
            td_acao.classList.add("center");
                       
            
            let imgEdit = document.createElement("img");
            imgEdit.src = "img/editar-arquivo.png";
            imgEdit.setAttribute("onclick","registro.editar("+ JSON.stringify(this.arrayRegistros[i]) +")");

            let imgDelete = document.createElement("img");
            imgDelete.src = "img/apagar.png";
            imgDelete.setAttribute("onclick","registro.deletar("+ this.arrayRegistros[i].id +")"); 

            td_acao.appendChild(imgEdit);
            td_acao.appendChild(imgDelete);
        }
    }

    inserir(adicionar){
        this.arrayRegistros.push(adicionar);
        this.id++
    }

    atualizar(id,adicionar){
        for(let i = 0; i<this.arrayRegistros.length;i++){
            if(this.arrayRegistros[i].id == id){

                this.arrayRegistros[i].colaborador = adicionar.colaborador;
                this.arrayRegistros[i].chamado = adicionar.chamado;
                this.arrayRegistros[i].datainicio = adicionar.datainicio;                
                this.arrayRegistros[i].datafim = adicionar.datafim;
                this.arrayRegistros[i].horainicio = adicionar.horainicio;
                this.arrayRegistros[i].horafim = adicionar.horafim;
                this.arrayRegistros[i].justificativa = adicionar.justificativa;                              
            }
        }
    }

    lerDados() {
        let adicionar = {};

        adicionar.id = this.id;
        adicionar.colaborador = document.getElementById("colaborador").value;        
        adicionar.chamado = document.getElementById("chamado").value;       
        adicionar.datainicio = document.getElementById("datainit").value;       
        adicionar.datafim = document.getElementById("datafim").value;
        adicionar.horainicio = document.getElementById("horainit").value;
        adicionar.horafim = document.getElementById("horafim").value;
        adicionar.justificativa = document.getElementById("justificativa").value;                               

        return adicionar;
    }

    validaCampos(adicionar) {

        let msg = "";

        if(adicionar.colaborador == "") {
            msg += "Informe o Colaborador \n";
        }

        if(adicionar.chamado == "") {
            msg += "Informe o Tipo do Chamado \n";
        }

        if(adicionar.datainicio == "") {
            msg += "Informe a Data Inicial \n";
        }       

        if(adicionar.datafim == "") {
            msg += "Informe a Data Final \n";
        }
        if(adicionar.horainicio == "") {
            msg += "Insira uma Justificativa \n";
        }

        if(adicionar.horafim == "") {
            msg += "Insira uma Justificativa \n";
        }

        if(adicionar.justificativa == "") {
            msg += "Insira uma Justificativa \n";
        }

        if(msg != ""){
            alert(msg);
            return false;
        }
        return true;
    }

    limpar() {
        document.getElementById("colaborador").value = "";        
        document.getElementById("chamado").value = "";
        document.getElementById("datainit").value = "";        
        document.getElementById("datafim").value = "";
        document.getElementById("horainit").value = "";
        document.getElementById("horafim").value = "";
        document.getElementById("justificativa").value = "";

        document.getElementById("btn1").innerText = "Registrar"
    }

    editar(dados){

        this.editId = dados.id

        document.getElementById("colaborador").value = dados.colaborador;        
        document.getElementById("chamado").value = dados.chamado;
        document.getElementById("datainit").value = dados.datainicio;        
        document.getElementById("datafim").value = dados.datafim;
        document.getElementById("horainit").value = dados.horainicio;
        document.getElementById("horafim").value = dados.horafim;
        document.getElementById("justificativa").value = dados.justificativa;

        document.getElementById("btn1").innerText = "Atualizar"
    }

    deletar(id){
        if(confirm("Deseja Realmente deletar o Registro ?")){
            let tbody = document.getElementById("tbody");

        for(let i = 0;i < this.arrayRegistros.length;i++){
            if(this.arrayRegistros[i].id == id){
                this.arrayRegistros.splice(i,1);
                tbody.deleteRow(i)                
            }
        }        
    }
  }
        
}

var registro = new Registro();
