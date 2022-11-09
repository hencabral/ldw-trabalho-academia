# Trabalho - Laboratório de desenvolvimento web

## Objetivo

Criar uma API para realização de CRUD seguindo os mesmos padrões do roteiro apresentado em aula. Para fins de padronização, as rotas dessa API devem ser:

/api/alunos
/api/instrutores
/api/gruposmusculares
/api/tiposexercicios
/api/fichas

## Configuração projeto
Para que a API funcione utilizando o mongodb é necessario que exista um arquivo .env na raiz do projeto. Basta renomear o arquivo .env.exemplo adicionando a URL de acesso ao mongo seja local ou remoto.
```
MONGODB_URL=url_de_acesso_ao_mongodb
```