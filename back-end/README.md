# AINDA NÃO TESTADO

### Baixe o MongoDB Community Server versão 4.4.2
[MongoDB 4.4.2](https://www.mongodb.com/try/download/community)


1. Instale como Serviço e com a opção "Network Service User" marcada.
2. Instale o Compass (ele costuma demorar, vá fazer um café)

### Baixe o MongoDB Database Tools versao 100.2.1 
[MongoDB Database Tools 100.2.1](https://www.mongodb.com/try/download/database-tools?tck=docs_databasetools) **ESCOLHA O PACKAGE DO TIPO MSI**

1. Instale normalmente
2. Adicione o DB Tools ao PATH (Copiei do site)
    1. Open the Control Panel.
    2. In the System and Security category, click System.
    3. Click Advanced system settings. The System Properties modal displays.
    4. Click Environment Variables.
    5. In the System variables section, select Path and click Edit. The Edit environment variable modal displays.
    6. Click New and add the filepath to the location where you installed the Database Tools.
    (default C:\Program Files\MongoDB\Tools\100\bin)
    7. Click OK to confirm your changes. On each other modal, click OK to confirm your changes.


### Importando o Banco de Dados para sua instalação do Mongo

1. Abra um terminal com permissoes admnistrativas,
2. cd para /back-end
3. rode o comando ```mongorestore /dump```