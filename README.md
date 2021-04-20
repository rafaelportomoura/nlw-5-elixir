# NLW 5 - Trilha Node

Repositório destinado a guardar as anotações e códigos do evento NLW5 trilha Elixir

![ELIXIR](/.readme-folder/root/1-NLW05-2560x1080.jpg)

## Configurações de ambiente

### Extensões usadas no VsCode

1. Name: **ESLint**  
   Id: dbaeumer.vscode-eslint  
   Description: Integrates ESLint JavaScript into VS Code.  
   Version: 2.1.20  
   Publisher: Dirk Baeumer  
   VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

2. Name: **Bracket Pair Colorizer 2**  
   Id: coenraads.bracket-pair-colorizer-2  
   Description: A customizable extension for colorizing matching brackets  
   Version: 0.2.0  
   Publisher: CoenraadS  
   VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2

3. Name: **Fluent Icons**  
   Id: miguelsolorio.fluent-icons  
   Description: Fluent product icons for Visual Studio Code  
   Version: 0.0.7  
   Publisher: Miguel Solorio  
   VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=miguelsolorio.fluent-icons

4. Name: **Prettier - Code formatter**  
   Id: esbenp.prettier-vscode  
   Description: Code formatter using prettier  
   Version: 6.3.2  
   Publisher: Prettier  
   VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

5. Name: **Split HTML Attributes (Vue, React, Angular)**  
   Id: dannyconnell.split-html-attributes  
   Description: Split your Vue, React & Angular directives & props (and HTML attributes) onto new lines, instantly!  
   Version: 1.0.10  
   Publisher: Danny Connell  
   VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=dannyconnell.split-html-attributes

6. Name: **Dracula Official**  
   Id: dracula-theme.theme-dracula  
   Description: Official Dracula Theme. A dark theme for many editors, shells, and more.  
   Version: 2.22.3  
   Publisher: Dracula Theme  
   VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula

7. Name: **Color Highlight**  
   Id: naumovs.color-highlight  
   Description: Highlight web colors in your editor  
   Version: 2.3.0  
   Publisher: Sergii Naumov  
   VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight

8. Name: **Code Spell Checker**  
   Id: streetsidesoftware.code-spell-checker  
   Description: Spelling checker for source code  
   Version: 1.10.2  
   Publisher: Street Side Software  
   VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker

9. Name: **Portuguese - Code Spell Checker**  
   Id: streetsidesoftware.code-spell-checker-portuguese  
   Description: Portuguese dictionary extension for VS Code.  
   Version: 0.1.6  
   Publisher: Street Side Software  
   VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker-portuguese

10. Name: **JavaScript (ES6) code snippets**  
    Id: xabikos.javascriptsnippets  
    Description: Code snippets for JavaScript in ES6 syntax  
    Version: 1.8.0  
    Publisher: charalampos karypidis  
    VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets

### Settings.json VsCode

```js
{
  "terminal.integrated.fontSize": 14,

  "editor.tabSize": 2,
  "editor.fontSize": 16,
  "editor.lineHeight": 26,
  "editor.semanticHighlighting.enabled": false,

  "debug.console.fontFamily": "Fira Code Retina",
  "editor.fontFamily": "'Fira Code Retina','Fira Code', Consolas, 'Courier New', monospace",
  "editor.fontLigatures": true,

  "editor.rulers": [80, 120],

  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },

  "files.associations": {
    ".sequelizerc": "javascript",
    ".stylelintrc": "json",
    ".prettierrc": "json",
    "*.tsx": "typescriptreact"
  },

  "typescript.tsserver.log": "verbose",
  "material-icon-theme.activeIconPack": "nest",

  "material-icon-theme.folders.associations": {
    "infra": "app",
    "entities": "class",
    "domain": "class",
    "schemas": "class",
    "typeorm": "database",
    "repositories": "mappings",
    "http": "container",
    "migrations": "tools",
    "modules": "components",
    "implementations": "core",
    "dtos": "typescript",
    "fakes": "mock",
    "websockets": "pipe",
    "protos": "pipe",
    "grpc": "pipe",
    "providers": "include",
    "subscribers": "messages",
    "useCases": "controller",
    "kafka": "scripts",
    "mappers": "meta",
    "_shared": "shared",
    "eslint-config": "tools",
    "kube": "kubernetes"
  },

  "material-icon-theme.files.associations": {
    "ormconfig.json": "database",
    "tsconfig.json": "tune",
    "*.proto": "3d",
    "*.webpack.js": "webpack"
  },
  "cSpell.enableFiletypes": ["!asciidoc", "!c", "!cpp", "!csharp", "!go", "!handlebars", "!haskell", "!jade", "!java", "!latex", "!php", "!pug", "!python", "!restructuredtext", "!rust", "!scala", "!scss"],
  "cSpell.language": "en,pt",
  "editor.suggestSelection": "first",
  "cSpell.userWords": ["chakra", "middlewares", "prefetch", "rocketseat"],
  "terminal.integrated.showExitAlert": false,

  "splitHTMLAttributes.closingBracketOnNewLine": true,
  "window.zoomLevel": 1,
  "workbench.iconTheme": "material-icon-theme",
  "workbench.productIconTheme": "fluent-icons",
  "workbench.colorTheme": "Dracula",

  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "editor.multiCursorModifier": "ctrlCmd",

  "prettier.enable": true,
  "prettier.singleQuote": true,
  "prettier.semi": true,
  "prettier.tabWidth": 2,
  "prettier.trailingComma": "es5",
  "prettier.arrowParens": "always",
  "prettier.jsxBracketSameLine": false,
  "prettier.jsxSingleQuote": false,
  "editor.minimap.enabled": false,
  "prettier.printWidth": 300
}
```
