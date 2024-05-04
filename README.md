# Alef application based on NestJS, PostgreSQL, Prisma

### Versions
> PostgreSQL database version `16.2 alpine 3.18`
> 
> NodeJS `v18.20.2`
> 
> npm version `10.5.2`


### Запуск приложения
1. Запуск контейнеров `docker-compose up -d --build`
2. В терминале контейнера `alef_node` запускаем команду `npx prisma db push` чтобы создать таблицы User, Child в БД
3. Открываем API документацию в браузере http://localhost:3000/swagger
4. Наслаждаемся!

### Stack
> Docker, NodeJS, NestJS, TypeScript, PostgreSQL, Prisma ORM, Swagger, class-validator 