
# Boas Vindas a Máquina do Tempo

Neste projeto vamos desenvolver uma máquina do tempo, isso mesmo!

Este projeto consiste em um formulário onde é possível pesquisar um site específico em um determinado momento no passado e visualizar como este site era naquele momento.

Então neste projeto serão duas partes específicas, um formulário para pesquisar sites e a visualização do site logo abaixo.

---
## Documentação da API Web Archive

Sua página _web_ irá consumir os dados da API do _Web Archive API_ para buscar e exibir o estado de sites no passado. Para realizar essas buscas, vocês precisarão consultar o seguinte _endpoint_:

- https://archive.org/wayback/available?url={URL}&timestamp={Timestamp}

Onde {URL} é a URL do site em que se deseja pesquisar no passado.
E {Timestamp} é o momento no seguinte formato, uma string com ano, mês, dia, hora, minutos e segundos todos concatenados juntos e sempre números. Então por exemplo para a seguinte data e hora: 11/09/2001 ás 20:53 e 40 segundos o {Timestamp} ficaria assim: _20010911205340_

O retorno desse endpoint será algo no formato:
```json
{
  "url": "cnn.com",
  "archived_snapshots": {
    "closest": {
      "status": "200",
      "available": true,
      "url": "http://web.archive.org/web/20010911204733/http://www2.cnn.com:80/",
      "timestamp": "20010911204733"
    }
  },
  "timestamp": "20010911205340"
}
```

Dentro da chave archived_snapshots temos os resultados para a busca, e iremos utilizar o conteúdo de da chave _closest_ que contém o status mais próximo encontrado de nossa pesquisa.

---

## Descrição do projeto

Este projeto contém um formulário com os seguintes campos:
  - Endereço do site
  - Ano da busca
  - Mês da busca
  - Dia da busca
  - Hora da busca

E ao clicar no botão `Procurar` um feedback de carregando deve ser exibido e caso a resposta da API seja correta, deve ser utilizada a resposta da API para setar o estado global da aplicação redux no reducer chamado `time_machine`. Este valor será utilizado então para exibir um `iframe`* do site encontrado pela pesquisa.

Porém este projeto contém bugs que precisam ser corrigidos, então o seu objetivo será descobrir e corrigir todos estes bugs. 🚫 🦟 🚫

**`*`**: Iframe é uma tag html que permite a exibição de um outro site dentro de um site específico, para isso basta inserir o endereço do site que se quer exibir no atributo `src` da tag `iframe` da seguinte forma:

```html
<iframe src="http://site.com.br" />
```
