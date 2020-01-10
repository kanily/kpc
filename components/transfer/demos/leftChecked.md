---
title: 
    zh-CN: 控制选择项
    en-US: Control selection
order: 2
---

## zh-CN

通过`leftChecked`属性，我们可以控制左侧已选项，`rightChecked`同理

> `leftChecked`数组为`data`中每一项的同一引用

## en-US

We can control the options on the left by `leftChecked` property, and the `rightChecked` property is same.

> `leftChecked` array is same reference in each item of `data`

```vdt
import Transfer from 'kpc/components/transfer';

<div>
    <Transfer data={{ self.get('data') }} 
        v-model:leftChecked="checked"
    />
    <p>You checked left side: {{ JSON.stringify(self.get('checked')) }}</p>
</div>
```

```js
const data = [
    {label: '主机名0', key: 0},
    {label: '主机名1', key: 1, disabled: true},
    {label: '主机名2', key: 2},
    {label: '主机名3', key: 3, disabled: true},
    {label: '主机名4', key: 4},
];
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            data: data,
            checked: [data[0], data[2]]
        }
    }
}
```

```vue-data
data() {
    return {
        data: data,
        checked: [data[0], data[2]]
    }
},
```

```react-methods
constructor(props) {
    super(props);
    this.state = {
        data: data,
        checked: [data[0], data[2]]
    };
}
```

```angular-properties
private data = data;
private checked = [data[0], data[2]];
```
