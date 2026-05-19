<div align="center">
<p>
<img src="https://raw.githubusercontent.com/Sharmaz/create-enchilada/refs/heads/main/media/enchilada-js-logo.svg" width="250" alt="enchiladajs logo"/>
</p>

# Building apps with JavaScript — as if they were enchiladas!
</div>

<p align="center">
<a href="https://www.npmjs.com/package/create-enchilada"><img src="https://img.shields.io/npm/v/create-enchilada?logo=npm&color=blue" alt="version"></a>
<a href="https://github.com/Sharmaz/create-enchilada/actions/workflows/unit_tests.yml"><img src="https://img.shields.io/github/actions/workflow/status/Sharmaz/create-enchilada/unit_tests.yml?logo=jest&label=Tests" alt="tests"></a>
<a href="https://github.com/Sharmaz/create-enchilada/blob/main/LICENSE"><img src="https://img.shields.io/github/license/Sharmaz/create-enchilada" alt="license"></a>
</p>

`create-enchilada` is a CLI scaffold tool to quickly create web app projects from templates. Run a single command and follow the interactive prompts to pick a template and name your project. Supports React, Vanilla JS, Node/Express and more.

## Usage
### With npm
```
npm create enchilada@latest
```

### With pnpm
```
pnpm create enchilada@latest
```

### With yarn
```
yarn create enchilada
```

<img src="https://raw.githubusercontent.com/Sharmaz/create-enchilada/refs/heads/main/media/enchiladajs@latest.gif"  width="100%"  alt="enchiladajs logo"/>
</p>

## CLI Options
### Help:
```
npm create enchilada --help
```
or
```
npm create enchilada -h
```

### List available templates:
```
npm create enchilada --list
```
or
```
npm create enchilada -l
```

### Template:
```
npm create enchilada -- --with [template-name] [app-name]
```
or
```
npm create enchilada -- -t [template-name] [app-name]
```
E.g:
```
npm create enchilada -- --with vanilla-js my-app
```

### Scaffold into current directory:
Use `.` as the app name to scaffold into the current directory instead of creating a new one:
```
npm create enchilada -- --with vanilla-js .
```
Or via interactive prompts, enter `.` when asked for the app name.

### Template List
| TEMPLATE | DESCRIPTION |
| :------- | :---------- |
| **vanilla-js**            | Vanilla JS + Vite |
| **react**                 | React + Vite |
| **react-webpack**         | React + Webpack |
| **react-typescript**      | React + Vite + TypeScript + ESlint |
| **react-dev**             | React + Vite + Tailwind CSS + ESlint + React Testing Library |
| **react-dev-typescript**  | React + Typescript + Vite + Tailwind CSS + ESlint + React Testing Library |
| **react-dev-webpack**     | React + Webpack + Tailwind CSS + ESlint + React Testing Library |
| **react-rspack**          | React + Rspack |
| **node-express**          | NodeJS + Express + Sequelize + ESlint + Jest |
