interface DadosDoUsuario {
  id: string;
  nome: string;
  email: string;
}

function cadastrarUsuario({ email, id, nome }: DadosDoUsuario) {
  console.log(id, nome, email);
}

class CadastrarAdministrador {
  cadastro() {
    cadastrarUsuario({ id: '234234jshhs', nome: 'Dani', email: 'daniele@rocketseat.team' });
  }
}

class CadastrarVendedor {
  cadastro() {
    cadastrarUsuario({ id: '123423425', nome: 'Danilo', email: 'danilo@rocketseat.team' });
  }
}
