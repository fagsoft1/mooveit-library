A Simple Select Input.

```jsx
import SelectInput from "./SelectInput";
const options = [{value:1,text:'Select One'},{value:2,text:'Select Two'}];
<SelectInput options={options} label={'Select Input'} name='opciones' value={2} disabled={true} />
```
A Multiple Select Input.

```jsx
import SelectInput from "./SelectInput";
const options = [{value:1,text:'Select One'},{value:2,text:'Select Two'}];
<SelectInput options={options} label={'Select Input'} name='opciones' multiple={true} value={[2]}/>
