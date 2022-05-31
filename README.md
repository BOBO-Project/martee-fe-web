### Add package

- If you want to add a new package to the project please use yarn instead npm

### Naming folder and files

- React UI component’s names should be PascalCase. e.g `DashboardPage.js`
- All other helper files should be camelCase. e.g `commonUtils.js`
- All the folder names should be camelCase. e.g `components`, `routes`, `context`
- CSS in JS files should be named the same as the component PascalCase and add underscore in the front of the name, e.g `_CoreLayout.ts` or `_HeaderStyle.ts`
- Test files should be named the same as the component or non-component file and in folder `__tests__`. e.g `fetcher.test.ts` the regex is `**/__tests__/**/*.spec.ts`


### Naming in file some common basic rules to be kept in mind to write clean code

- Please use the DRY principle (_Don't repeat yourself_).
- Create multiple files instead of writing a big file. (Componentization of code: fix to small functionality for each file).
- Place all common styles files in one common folder. e.g in src create folder `styles`.
- Avoid Inline CSS as and when possible (a CSS class should be created when there are more than 2 CSS attributes).
- Please follow linting rules. This in turn helps us write clean, consistent code.
- Review code before creating a pull request.
- Create many utility files that can help you remove duplicate code from multiple files or if utilities used in many service create in package cosmos-utils
- Destructuring props is a good way to help make code cleaner and more maintainable.
- Using naming interface start with `I` for examle `IProps` or `IState`
- If string variable used in multiple files and code, create a constants for readable and reusable
- No magic number
- Putting imports in an order
  - React import
  - Library imports
  - Absolute imports from the project
  - Relative imports
