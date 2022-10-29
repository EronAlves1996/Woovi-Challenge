# Como o login é feito

O login pode ser descrito como um flow bidirecional muito simples, onde mandamos algumas informações para que o sistema primeiro autentique o usuário, e, após isso, dê as devidas autorizações ao mesmo.

Sendo assim, a informação sobre quem é o usuário deve ser única e uma delas apenas o usuário deve saber, sendo que nem o sistema deve ter esse privilégio.

## Informações necessárias

* e-mail;
* senha.

## Flow

1. O usuário digita o seu e-mail e senha e envia a informação;
2. Após isso, no front-end, a informação da senha é codificada. O esquema de validação será Basic, encaminhando uma requisição com o Header "Authorization" para o back-end;
3. O back-end valida esta informação e retorna com o status de autorização e um token único de persistência de sessão (JWT);
4. O usuário é logado ou lhe é negado o login.