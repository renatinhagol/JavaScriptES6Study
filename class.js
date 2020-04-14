// trabalhando com a classes 
class List{
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}

class ToDo extends List{
  constructor(){
      super();
      this.usuario = 'Renata';
  }
  mostraUsuario(){
      console.log(this.usuario);
  }
}

var Mylist = new ToDo();
document.getElementById('novoTodo').onclick = function(){
    Mylist.add("Novo Todo");
}
Mylist.mostraUsuario();