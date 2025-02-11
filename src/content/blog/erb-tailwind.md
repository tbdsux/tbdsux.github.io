---
title: Electron React Boilerplate with Tailwind
pubDate: 2023-06-01
description: Let's add Tailwind with Electron React Boilerplate to use for our main styling...
author: Joshue Abance
tags:
  - tutorial
---

## About

A Foundation for Scalable Cross-Platform Apps

### Features

- Faster Iteration: Hot Reloading

  Make changes to your app and preview the changes without having to refresh your app. Changes are made so that the state of your app is not lost.

- Scalable: Incremental Typing

  Bulding scalable apps without types can only go so far. Get type errors while developing your app. Errors are thrown during compile-time and runtime.

- Performance: Build Optimizations

  Optimization and minification of code with webpack comes out of the box. This avoids running into performance bottlenecks associated with traditional electron apps

**Official Website: [https://electron-react-boilerplate.js.org/](https://electron-react-boilerplate.js.org/)**

# Setup

- Clone the `electron-react-boilerplate` repository.

  ```sh
  git clone --depth=1 \
  https://github.com/electron-react-boilerplate/electron-react-boilerplate \
  your-project-name # replace with your project name
  ```

- Swith to your project and install dependencies

  ```sh
  cd your-project-name

  npm install
  ```

### Using different package manager

You might want to use a different package manager

## Install Tailwind and Dependencies and Setup

```sh
npm install -D tailwindcss autoprefixer postcss postcss-loader
```

- Create initial tailwind config

  ```sh
  npx tailwindcss init -p
  ```

- Move `postcss.config.js` to `.erb/configs/`

  ```sh
  # bash
  mv postcss.config.js .erb/configs
  ```

## Update erb configs

- `.erb/configs/webpack.config.renderer.dev.ts`

  ```ts
  // webpack.config.renderer.dev.ts
    // ...
      {
        test: /\.s?(c|a)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 1,
            },
          },
          'sass-loader',
        ],
        include: /\.module\.s?(c|a)ss$/,
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          // add the codes below
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('tailwindcss'), require('autoprefixer')],
              },
            },
          },
          // to here
        ],
        exclude: /\.module\.s?(c|a)ss$/,
      },
      // Fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    // ...
  ```

- `.erb/configs/webpack.config.renderer.prod.ts`

  ```ts
      {
        test: /\.s?(a|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 1,
            },
          },
          'sass-loader',
        ],
        include: /\.module\.s?(c|a)ss$/,
      },
      {
        test: /\.s?(a|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          // add the codes below
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('tailwindcss'), require('autoprefixer')],
              },
            },
          },
          // to here
        ],
        exclude: /\.module\.s?(c|a)ss$/,
      },
      // Fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
  ```

- Update Tailwind config (`tailwind.config.js` / `tailwind.config.cjs`)

  ```js
  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: ["./src/renderer/**/*.{ts,tsx,js,jsx,ejs}"], // update content to have styles
    theme: {
      extend: {},
    },
    plugins: [],
  };
  ```

- Modify `App.css` (`src/renderer/App.css`)

  Add tailwind directives.

  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

- Happy hacking!

## More Features

### Adding Google Fonts

To be able to have google fonts along with our application, we will need to install the fonts we need with `@fontsource` ([https://fontsource.org/](https://fontsource.org/))

- Pick a font from FontSource and install it. For this example, we will use `Inter` font (https://fontsource.org/fonts/inter)

  _For some reason, installing the variable version of the font `@fontsource-variable/inter` doesn't work when imported to our app._

  ```
  npm install @fontsource/inter
  ```

- Import the fonts to your `src/renderer/index.tsx`

  ```tsx
  // index.tsx
  import { createRoot } from "react-dom/client";
  import App from "./App";

  // import the font weights you only need
  import "@fontsource/inter/200.css";
  import "@fontsource/inter/300.css";
  import "@fontsource/inter/400.css";
  import "@fontsource/inter/500.css";
  import "@fontsource/inter/600.css";
  import "@fontsource/inter/700.css";
  import "@fontsource/inter/800.css";

  const container = document.getElementById("root") as HTMLElement;
  const root = createRoot(container);
  root.render(<App />);

  // calling IPC exposed from preload script
  window.electron.ipcRenderer.once("ipc-example", (arg) => {
    // eslint-disable-next-line no-console
    console.log(arg);
  });
  window.electron.ipcRenderer.sendMessage("ipc-example", ["ping"]);
  ```

- Add our font to the tailwind config

  ```js
  // tailwind.config.js

  // we want to extend with the default fontfamilies
  const { fontFamily } = require("tailwindcss/defaultTheme");

  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: ["./src/renderer/**/*.{ts,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          sans: ["Inter", ...fontFamily.sans], // add our font, sans is the default font used by tailwind in all texts
        },
      },
    },
    plugins: [],
  };
  ```

## More References

- https://electron-react-boilerplate.js.org/docs/styling
- https://github.com/tbdsux/erb-tailwind (my own copy of erb with tailwind added already but is not up to date with the original project)

##

Enjoy coding!
