const helpMessage = `
Usage: create-enchilada [OPTION]... [DIRECTORY]

Create a new app. With no arguments,
starting the CLI in interactive mode.

Options:
  directory                 The project's name in the current directory,
                            e.g., my-app, would be like ./my-app/
                            the directory should not exist.
  -t, --with NAME           Use a specific template.
  -l, --list                List all available templates with full stack details, and exit.
  -h, --help                Display a help message, and exit.

Available templates:
  vanilla-js                Vanilla JS + Vite
  react                     React + Vite.
  react-dev                 Tailwind + Linter + Tests
  react-webpack             React + Webpack.
  react-dev-webpack         Tailwind + Linter + Tests
  react-typescript          React + Vite + TypeScript
  react-dev-typescript      Tailwind + Linter + Tests
  react-rspack              React + Rspack
  node-express              Express + Sequelize + Linter + Tests
`;
export default helpMessage;
