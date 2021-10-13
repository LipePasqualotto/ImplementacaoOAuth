# Implementação OAuth2

O seguinte projeto implementa uma autenticação usando o OAuth, possuíndo opção de Login e Logout.

Ao clicar em login, aparecerá para escolher qual conta do google será utilizada, e então deve-se inserir as informações dessa conta (login e senha).

Após realizar o login, a página exibirá as informações da conta utilizada no login (nome e e-mail), juntamente com um botão para realizar logout.

Caso o usuário clicar em Logout, o programa irá realizar os procedimentos e deslogar da conta, voltando para a tela inicial com o botão de Login.

# Funcionamento

O programa funciona utilizando o pacote npm 'react-google-login', que disponíbiliza um componente de login e um de logout.

O uníco paramêtro obrigatório nos dois, é o clientID, que foi gerado através da API do google. Outros paramêtros servem para configurações para lidar com eventos (sucesso no login/logout), e também para modificações na aparência desses componentes. 

## Scripts disponíveis

No diretório do projeto, rodar:

### `npm start`

Roda a aplicação em modo de desenvolvimento.\
Abrir [http://localhost:3000](http://localhost:3000) para visualizar no navegador.
