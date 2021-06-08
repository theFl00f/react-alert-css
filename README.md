# React Alert CSS
<div>
   <a href="https://react-alert-css.netlify.app/">
     <img alt="Live link" src="https://svgshare.com/i/XgN.svg" >
   </a>
   <img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
   <img alt="TypeScript" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"/>
   <img alt="TailwindCSS" src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"/>
</div>

#### Generate custom HTML and styles for modals on the fly

## To run locally...

1. Clone this repo
2. Add backend API base path to .env as `REACT_APP_BASE_URL` located in the root of the project -- this can be hardcoded to the production database as shown below, or can be set to `localhost:3000` to work with [the development backend](https://github.com/theFl00f/react-alert-css-backend).
```env
#.env
REACT_APP_BASE_URL=https://react-alert-css-backend.herokuapp.com
```
3. Run `yarn install`
4. Run `yarn start` to run craco development server

## How to Use In-Browser

### Selecting your palette
<img alt="Palette selection screen" src="https://user-images.githubusercontent.com/53948525/120115156-69b5d200-c150-11eb-932e-8124e7832b0e.png" align="right" width="40%" >

On your first time coming to the site, you will land on a randomly generated analogous theme from [TinyColor](https://github.com/bgrins/TinyColor). You can click generate to generate another palette with the same color theme.

Click different themes to generate new palettes for your alert, or just click/navigate and to the swatch and open an accessible color picker from [React Color](https://casesandberg.github.io/react-color/).

### Editing the alert
<img src="https://user-images.githubusercontent.com/53948525/120089710-c8d10380-c0ca-11eb-9562-12a51a6a4ece.png" width="40%" align="right" >

With your selected palette in hand, you can drag and drop colors to any of the visible elements: `alertBorderColor`, `alertBackgroundColor`, `buttonBorderColor`, `buttonBackgroundColor`, `textColor` and `buttonTextColor`.

You can also use the slider form to alter the size, padding, border and border-radius of the alert and button, as well as edit the text of each inline by clicking on the text.

When you're done having fun, click the `Export to code` button to reap your reward.

### Exporting your code
<img alt="Generated HTML + CSS for your custom alert" src="https://user-images.githubusercontent.com/53948525/120116508-83f2ae80-c156-11eb-83c2-08536a3de2a4.png"  width="40%" align="right" >

Your code has been generated! Click the clipboard to copy the HTML and CSS into your project.

To save it for later, `press Publish`.
   
<br />
<br />
<br />
<br />

### Publishing your Alert
<img alt="Publish Alert modal" src="https://user-images.githubusercontent.com/53948525/120934130-13560f80-c6cb-11eb-85c9-e03e9f144d1a.png"  width="40%" align="right" >

You can enter your name and the name of the alert inline, or you can leave it untitled by anonymous, up to you!
After you're done editing, click the button to submit your alert. When the alert has been added to the database, you will be redirected to the alerts page.
   
<br />
<br />
<br />
<br />
<br />
<br />

### Viewing saved user-created alerts
| All user alerts | Alert details|
|---|---|
|![View all alerts that users have submitted](https://user-images.githubusercontent.com/53948525/120121488-c83f7800-c171-11eb-9d48-dabf6a688ef4.png) | ![Copy the code from the details page](https://user-images.githubusercontent.com/53948525/120930945-79d43100-c6bd-11eb-9553-f87374486545.png) |

A gallery of user alerts. Click any alert to navigate to its template page where you can view the generated code!
