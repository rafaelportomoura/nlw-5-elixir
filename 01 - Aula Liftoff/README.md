# Aula 01 - Liftoff

## Tecnologias

As tecnologias usadas serão a linguagem typescript junto com o NodeJs, usando o framework express

---

## Configurando a pasta do projeto

Para configurar a pasta do projeto execute o comando:

```bash
yarn init -y
```

---

## Instalando TypeScript

```bash
yarn add typescript -D
```

### Criando arquivo de configuração do TypeScript

```bash
yarn tsc --init
```

### Configurando arquivo de configuração do TypeScript

Definir strict como falso no arquivo `./tsconfig.json`

```json
"strict": false
```

---

## Instalando Ts Node Dev

Biblioteca para o node reconhecer os imports

```bash
yarn add ts-node-dev -D
```

### Configurando Ts Node Dev

Criar script no arquivo `./package.json`

```json
"scripts": {
  "dev": "ts-node-dev src/server.ts"
}
```

---

## Instalando o express

Para instalar o express execute o comando:

```bash
yarn add express
```

### Instalando tipos do express

Para instalar os tipos do express execute o comando:

```bash
yarn add @types/express -D
```

---

## Rodando o projeto

```bash
yarn dev
```
