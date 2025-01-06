# Joias Lux - Site Institucional


**Joias Lux** é um site institucional que apresenta uma coleção de joias exclusivas. O projeto tem como objetivo oferecer uma experiência de navegação fluida entre as páginas, sem recarregar o conteúdo principal através de iframes ou JavaScript, mantendo o cabeçalho fixo e consistente em todas as páginas.

## 📂 Estrutura do Projeto
```
/LOJA-DE-JOIAS
  /src
    /assets
    /components
    /scripts
    /styles
  index.html
  README.md
```

---

## 🛠️ Tecnologias Utilizadas
- **HTML5**  
- **CSS3**  
- **JAVASCRIPT** 

---

## 🚀 Funcionalidades
- **Persistência de página** após o refresh.
- **Cabeçalho fixo** e responsivo em todas as páginas.
- **Grid de coleções com 3 colunas** para melhor apresentação dos produtos.

---

## ⚙️ Como Funciona
Cada página do site é independente e possui um `header` fixo que permite a navegação com iframe. Ao clicar em um link do menu, o usuário é redirecionado para outra página completa (ex: `home.html`, `colecoes.html`), mantendo o cabeçalho fixo e o conteúdo atualizado.

A seção de coleções utiliza um grid CSS que organiza os itens em **3 colunas por linha**, proporcionando uma visualização limpa e organizada dos produtos.

---

## ▶️ Como Rodar o Projeto
1. Clone este repositório:  
   ```bash
   git clone https://github.com/macedoflp/loja-de-joias.git
   ```
2. Navegue até o diretório:  
   ```bash
   cd loja-de-joias
   ```
3. Abra o arquivo `index.html` diretamente no navegador.

---

## 🧩 Personalização e Expansão
- Edite o conteúdo do `section` para cada sessão.
- Adicione links para novas páginas no `nav` do cabeçalho.
- Para modificar o layout de coleções, edite a seção `.container-colecoes` no arquivo CSS principal.

---

## 🤝 Contribuição
Contribuições são sempre bem-vindas! Se você tiver alguma sugestão ou melhoria, sinta-se à vontade para abrir uma issue ou enviar um pull request.

---

## 📜 Licença
Este projeto está sob a licença MIT. Você é livre para usá-lo e modificá-lo conforme necessário.
