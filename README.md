
# Assignment Backend 

This repository is for the backend assignment to create a CRUD system using Express and MySQL.

## Migration

Here, I'm using Prisma as the ORM to create the database schema.

```bash
  npm install prisma -D
  npx prisma init
```

### Connect Database

```bash
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}
```
To map your data model to the database schema, you need to use the prisma migrate

```bash
npx prisma migrate dev
```
## Starting Server

To deploy this project run

```bash
  npm run start
```

