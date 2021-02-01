# Run the project

In the project directory, you can run:

## `yarn start`

Runs the app in the development mode.\
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

## Technologies and such
* React
* RecoilJS
* SCSS
* TypeScript
* eslint-config-airbnb-typescript-prettier
### Limitations and explanations
* Table is not that reusable, could easily be solved by using a npm package. Table was in this case created to show some kind of logic
* Pagination is not optimal. It can be hard to extend the table with sorting, different offset, filtering etc
* Styling limitations, for instance create mixin for media queries or for frequently used classes
* CORS error when fetching data, so a workaround was to add the proxy in tsconfig. Could be solved with express server or something else.
* Hardcoded strings could be taken out to a constants or JSON file. Could open up for i18n and different language settings