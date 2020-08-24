An Input Text.

```jsx
const theme = {
    palette: {
        primary: {main:'blue', contrast:'white'},
        secondary: {main:'green', contrast:'black'},
    },
};
import InputText from "./InputText";
import ThemeContext from "../Themes/ThemeContext";
<ThemeContext.Provider value={theme}>
    <InputText name={'text_input_text'} label={'The Input Text'} placeholder={'The placeholder'}/>
</ThemeContext.Provider>
```