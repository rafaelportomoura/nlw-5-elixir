# Aula 02 - Maximum Speed

---

## Iniciando com o banco de dados

No nlw5 iremos utilizar um banco de dados relacional.

---

## DER

![der](../.readme-folder/projeto_nlw/der.png)

**PK (Primary Key)**: Chave primária que serve como identificador do registro  
**N**: Este atributo pode ter o valor nulo  
**FK (Primary Key)**: Chave estrangeira, que é todo identificador que vem de outra tabela

---

## Instalando o TypeORM e o Banco de dados

[link](https://typeorm.io/#/)

Instalação do pacote:

```bash
yarn add typeorm --save
```

Tem que instalar o `reflect-metadata` também:

```bash
yarn add reflect-metadata --save
```

E por fim o **banco de dados** que será usado:

```bash
yarn add sqlite3 --save
```

---

## Configurando o TypeORM

Na pasta src, crie uma **nova pasta chamada database** e dentro dela um arquivo `index.ts`

`index.ts`:

```ts
import { createConnection } from 'typeorm';

createConnection();
```

No arquivo principal do projeto import o createConnection:

```ts
import './database';
```

No arquivo `package.json`, adicione o seguinte script:

```json
"scripts": {
  ...
  "typeorm": "ts-node-dev node_modules/typeorm/cli.js"
}
```

Na raiz do projeto criar o arquivo de configuração `ormconfig.json`.

`ormconfig.json`:

```json
{
  "type": "sqlite",
  "database": "./src/database/database.sqlite",
  "migrations": ["./src/database/migrations/**.ts"],
  "entities": ["./src/entities/**.ts"],
  "cli": {
    "migrationsDir": "./src/database/migrations"
  }
}
```

No arquivo `tsconfig.json`, descomentar as seguintes linhas:

```json
  "experimentalDecorators": true,
  "emitDecoratorMetadata": true,
```

---

## Migrations

As migrations servem para registrar as tabelas criadas no banco de dados. Na pasta `./src/database` crie uma nova pasta chamada `migrations`

Para criar uma migration usa a seguinte linha de comando:  
_um exemplo de NomeDaMigration é CreateSettings_

```bash
yarn typeorm migration:create -n NomeDaMigration
```

Exemplo de migration:

`1618925136487-CreateSettings.ts`

```ts
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateSettings1618925136487 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'settings',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'username',
            type: 'varchar',
          },
          {
            name: 'chat',
            type: 'boolean',
            default: true,
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('settings');
  }
}
```

Para executar a migration criada é preciso rodar elas.  
Quando rodamos as migrations, é executado a função up das classes de migration  
Para rodar as migrations, execute a seguinte linha de comando:

```bash
yarn typeorm migration:run
```

Caso a execução da migration dê errado, é preciso reverter.  
Quando revertemos as migrations, é executado a função down das classes de migration.  
Para reverter as migrations, execute a seguinte linha de comando:

```bash
yarn typeorm migration:revert
```

## Verificar migrations

Pode verificar usando a extensão SQLite ou o Beekeeper Studio

### **SQLite**:

`ctrl + shift + p`

Clicar em `Open Database` e selecionar o arquivo

### **Beekeeper Studio**:

[link para dowload](https://www.beekeeperstudio.io/)

---

## UUID

Uuid é um número em hexadecimal gerado para ser um identificador universal. No projeto iremos trazer a responsabilidade de criar um uuid para o projeto e não o banco de dados. Para isso é necessário importar a biblioteca uuid.

```bash
yarn add uuid
```

```bash
yarn add @types/uuid -D
```

---

## Entidades

Na pasta `src` crie a pasta `entities` em que cada arquivo .ts dentro dessa pasta é uma entidade.

Exemplo de entidade:

`settings.ts`:

```ts
import { Entity, Column, CreateDateColumn, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('settings')
class Setting {
  @PrimaryColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  chat: boolean;

  @UpdateDateColumn()
  updated_at: Date;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Setting };
```

---

## Repositórios

Estrutura de uma classe responsável pela manipulação de dados da aplicação. Eles vão ser responsáveis entre fazer a comunicação entre a entidade e a tabela do banco de dados.

Na pasta `src` crie uma pasta chamada `repositories` onde dentro dela ficará todos os repositórios

Exemplo de repositório:

`SettingsRepository.ts`:

```ts
import { EntityRepository, Repository } from 'typeorm';
import { Setting } from '../entities/Setting';

@EntityRepository(Setting)
class SettingsRepository extends Repository<Setting> {}

export { SettingsRepository };
```
