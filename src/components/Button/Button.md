A very simple button.

```jsx
import Button from "./Button";
import ThemeContextProvider from "../Themes/ThemeContextProvider";
const theme = {
    palette: {
        primary: {main:'red', contrast:'white'},
        secondary: {main:'yellow', contrast:'black'},
    },
};
<>
<ThemeContextProvider theme={theme}>
    <Button text="Hello Moove It!" onClick={()=>alert('You have clicked on me!')} palette='primary' />
    <Button text="Hello Moove It!"  onClick={()=>alert('You have clicked on me!')} palette='secondary' />
</ThemeContextProvider>
<Button text="Hello Moove It!"  onClick={()=>alert('You have clicked on me!')} palette='primary' />

</>
```