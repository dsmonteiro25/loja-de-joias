# Joias Lux - Site Institucional


**Joias Lux** é um site institucional que apresenta uma coleção de joias exclusivas. O projeto tem como objetivo oferecer uma experiência de navegação fluida entre as páginas, sem recarregar o conteúdo principal através de iframes ou JavaScript, mantendo o cabeçalho fixo e consistente em todas as páginas.

## 📂 Estrutura do Projeto
```
/LOJA-DE-JOIAS
  /src
    /assets
    /pages
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
- **Navegação fluida entre páginas** sem iframe ou JavaScript.
- **Persistência de página** após o refresh.
- **Cabeçalho fixo** e responsivo em todas as páginas.

---

## ⚙️ Como Funciona
Cada página do site é independente e possui um `header` fixo que permite a navegação com iframe. Ao clicar em um link do menu, o usuário é redirecionado para outra página completa (ex: `home.html`, `colecoes.html`), mantendo o cabeçalho fixo e o conteúdo atualizado.


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
3. Abra o arquivo `index.html` ou `src/pages/home.html` diretamente no navegador.

---

## 🧩 Personalização e Expansão
- Para adicionar novas páginas, crie um novo arquivo HTML em `src/pages`.
- Edite o conteúdo do `main` para cada página.
- Adicione links para novas páginas no `nav` do cabeçalho.

---

## 📄 Exemplo de Código (base.html)
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Joias Lux - Home</title>
    <link rel="stylesheet" href="./src/styles/estilo.css">
</head>
<body>
    <header class="header">
        <div class="container">
            <div class="logo">
                <a href="./src/pages/home.html" target="content-frame">Joias Lux</a>
            </div>
            <nav class="nav">
                <a href="./src/pages/home.html" target="content-frame">Home</a>
                <a href="./src/pages/colecoes.html" target="content-frame">Coleções</a>
                <a href="./src/pages/sobre.html" target="content-frame">Sobre</a>
                <a href="./src/pages/contato.html" target="content-frame">Contato</a>
            </nav>
            <div class="icons">
                <a href="" class="cart-icon">🛒</a>
                <a href="" class="user-icon">👤</a>
            </div>
        </div>
    </header>
    <main class="main">
        <iframe name="content-frame" src="./src/pages/home.html" frameborder="0" width="100%" ></iframe>
    </main>
</body>
</html>
```

---

## 🤝 Contribuição
Contribuições são sempre bem-vindas! Se você tiver alguma sugestão ou melhoria, sinta-se à vontade para abrir uma issue ou enviar um pull request.

---

## 📜 Licença
Este projeto está sob a licença MIT. Você é livre para usá-lo e modificá-lo conforme necessário.

