<div align="center">

  <h1>Wallet App 👛</h1>

### Wallet app made with Tauri

---

<div align="left">

## ▶️ ️Overview

-  Wallet Creation Screen with 12-word mnemonic phrase
-  Wallet Dashboard 
-  Show the Ethereum (ETH) balance associated with the wallet
-  Balance updates in real-time with refresh option
-  Due to security reasons 12-word mnemonic phrase & private key stored on Rust-side
-  User-friendly interface, intuitive, and visually appealing

## ⚡ Available Scripts

In the project directory, you can run:

-   ### Install dependencies
    Before first start this script should be executed.
    #### `pnpm install`

-   ### DEV mode Tauri
    Run app in dev mode
    #### `pnpm run tauri-dev`
    [Tauri desktop app](https://tauri.app/v1/guides/) will be shown. \
    Also you can open [http://localhost:3000](http://localhost:3000) to view it in the browser.
-   ### Build Tauri Production
    #### `pnpm run tauri-build`
    Build .exe application with Tauri. \
    Currently have issue with styles inside desktop app. \
    For more info, see Issues block

-   ### ES LINT

    #### `pnpm run lint`

    Runs eslint & prettier checks

-   ### Update dependencies
    #### `pnpm run post-update`
    Update all outdated dependencies to latest from CDN.
    But it's tricky. \
    Better solution do it manually: \
    Firstly run script
    #### `pnpm outdated`
    And then pick outdated dependencies that you want to update.

## 💡 Known Issues
1. It's demo project with test environment. <span style="color:#EE8282FF">DO NOT PROVIDE</span> your ETH_URL to anybody.
2. <i style="color:#EE8282FF">Emotion breaks styles during production builds for dektop apps.</i>

## 📋 Can be improved
-   [ ] Next static --> Vite to avoid problems with styles hydration
-   [ ] Transfer between accounts
-   [ ] Add wallet import
-   [ ] Add multi wallets

## 📃 Technical Info

-   <a href="https://nextjs.org/">NextJS static template</a> as main engine ⚙️‍
-   <a href="https://www.typescriptlang.org/"> Typescript</a> for code writing 🖤
-   <a href="https://eslint.org/">Eslint</a> & <a href="https://prettier.io/">Prettier</a> for code styling 🖌️
-   <a href="https://mui.com/">MUI</a> for styling (powered by <a href="https://emotion.sh/docs/introduction">Emotion</a>) 💅
