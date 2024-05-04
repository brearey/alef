# Alef application based on NestJS, PostgreSQL, Prisma

### Versions
> PostgreSQL database version `16.2 alpine 3.18`
> 
> NodeJS `v18.20.2`
> 
> npm version `10.5.2`


### Запуск приложение
1. Запуск контейнеров `docker-compose up -d --build`
2. В контейнере `alef_node` запускаем инициализацию таблиц для БД командой `npx prisma db push`
3. Открываем API документацию в браузере http://localhost:3000/swagger
4. Наслаждаемся!

### Stack
> Docker, NodeJS, NestJS, TypeScript, PostgreSQL, Prisma ORM, Swagger, class-validator 