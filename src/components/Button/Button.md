A very simple button.

```jsx
import Button from "./Button";
import ThemeContext from "../Themes/ThemeContext";
const theme = {
    palette: {
        primary: {main:'blue', contrast:'white'},
        secondary: {main:'yellow', contrast:'black'},
    },
};
<ThemeContext.Provider value={theme}>
    <Button text="Hello Moove It!"  onClick={()=>alert('You have clicked on me!')}/>
</ThemeContext.Provider>
```