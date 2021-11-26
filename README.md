## Pré requisitos
- Node maior que a V12
- Ter npm instalado
- Ter o Chromedriver baixado em sua máquina e com a variável de ambiente configurada(https://chromedriver.chromium.org/downloads)

## Como rodar este projeto

Rodar estes comandos no console dentro da pasta raiz do projeto

-  npm install
-  Pegar o link do dynatrace já com a data e hora corretos e colocar na const siteDyna
-  node teste_selenium.ts

O JSON formatado vai sair no console dentro de 1 minuto, pegar o retorno e formatar pelo site: https://www.convertcsv.com/json-to-csv.htm.
Ele cuidará da conversão para excel, restando apenas formatar a tabela com as cores e indentação.
