# About

This React hook returns the current Bootstrap 5 breakpoint (xs, sm, md, lg, xl or xxl) based on the window width.

## Install

```bash
npm i bootstrap-5-breakpoint-react-hook
```

Or

```bash
yarn add bootstrap-5-breakpoint-react-hook
```

## Usage

1. Include the hook:

   ```javascript
   import useBreakpoint from 'bootstrap-5-breakpoint-react-hook';
   ```

2. Use it where is needed:

   ```jsx
   function App() {
    return (
      <div>
        Current breakpoint: {useBreakpoint()}
      </div>
    );
   }
   ```

### License

Licensed under the MIT License, Copyright © 2021 AlexWebLab
