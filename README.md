# Star Citizen Trade Market - Frontend

## Api

- <a href="https://github.com/Shinigami92/star-citizen-trade-market-api" target="_blank">Api</a>

## Discord

[![Discord Chat](https://img.shields.io/discord/522792182256500766.svg)](https://discord.gg/FxJmUYT)

## Why dont you use <a href="https://www.versemate.com" target="_blank">VerseMate</a>?

I really like VerseMate!
However, there are a few things that VerseMate (currently) does not support

This API and the associated frontend has the following advantages:

- Community-based _the data is not read from the game_
- API _frontend is completely decoupled from the API_
- Open Source _everyone can contribute_
- You can provide item prices to your main organization or make them available to all your organizations

## Project setup

```
yarn
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Run your tests

```
yarn test
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config).

## Local setup with docker

```bash
$ docker build --build-arg VUE_APP_GRAPHQL_HTTP=http://localhost:3000/graphql --build-arg VUE_APP_GRAPHQL_WS=ws://localhost:3000/graphql -t sctm-frontend .
$ docker run -it -p 8080:80 --rm --name SCTM_Frontend sctm-frontend
```

Now you can connect the frontend via http://localhost:8080

### Docker Cleanup

```bash
$ docker rmi sctm-frontend
```

## License

[MIT licensed](LICENSE)
