# React Alert CSS
<div>
   <a href="https://react-alert-css.netlify.app/">
    <img alt="Live link" src="https://svgshare.com/i/XgN.svg" >
  </a>
  <img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
  <img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
  <img alt="TailwindCSS" src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"/>
</div>

#### Generate custom HTML and styles for modals on the fly

## Selecting your palette
![Palette selection screen](https://user-images.githubusercontent.com/53948525/120115156-69b5d200-c150-11eb-932e-8124e7832b0e.png)

On your first time coming to the site, you will land on a randomly generated analogous theme from [TinyColor](https://github.com/bgrins/TinyColor). You can click generate to generate another palette with the same color theme.

Click different themes to generate new palettes for your alert, or just click/navigate and to the swatch and open an accessible color picker from [React Color](https://casesandberg.github.io/react-color/).

## Editing the alert
![Edit alert screen](https://user-images.githubusercontent.com/53948525/120089710-c8d10380-c0ca-11eb-9562-12a51a6a4ece.png)

With your selected palette in hand, you can drag and drop colors to any of the visible elements: `alertBorderColor`, `alertBackgroundColor`, `buttonBorderColor`, `buttonBackgroundColor`, `textColor` and `buttonTextColor`.

You can also use the slider form to alter the size, padding, border and border-radius of the alert and button, as well as edit the text of each inline by clicking on the text.

When you're done having fun, click the `Export to code` button to reap your reward.

## Exporting your code
![Generated HTML + CSS for your custom alert](https://user-images.githubusercontent.com/53948525/120116508-83f2ae80-c156-11eb-83c2-08536a3de2a4.png)

Your code has been generated! Click the clipboard to copy the HTML and CSS into your project.

To save it for later, `press Publish`.

## Viewing saved user-created alerts
![react-alert-css netlify app_alerts](https://user-images.githubusercontent.com/53948525/120121488-c83f7800-c171-11eb-9d48-dabf6a688ef4.png)

For now, a gallery of user alerts. Click any alert to navigate to its template page where you can view the generated code!

## To run locally...

1. Clone this repo
2. Add backend API base path to .env as `REACT_APP_BASE_URL` located in the root of the project -- this can be hardcoded to the production database as shown below, or can be set to `localhost:3000` to work with [the development backend](https://github.com/theFl00f/react-alert-css-backend).
```env
#.env
REACT_APP_BASE_URL=https://react-alert-css-backend.herokuapp.com
```
3. Run `yarn install`
4. Run `yarn start` to run craco development server
