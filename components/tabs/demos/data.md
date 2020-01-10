---
title: 
    zh-CN: data传值形式
    en-US: Data value form
order: 1
---

## zh-CN

还可以使用`data`，定义`Tab`内容

## en-US

You can use the `data` property to define the content of the `Tab`.

```vdt
import {Tabs, Tab} from 'kpc/components/tabs';

<div>
    <Tabs 
        data={{ [
            {
                text: '入站规则',
                value: 'rulein'
            },
            {
                text: '出站规则',
                value: 'ruleout'
            },
            {
                text: '关联云主机',
                value: 'relatedVM'
            }
        ] }} 
        v-model="tab"  
    />

    <div class="content">
        <div v-if={{ self.get('tab') === 'rulein' }}>入站规则</div>
        <div v-else-if={{ self.get('tab') === 'ruleout' }}>出站规则</div>
        <div v-else>关联云主机</div> 
    </div>
</div>

```

```styl
.content
    margin 20px
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            tab: 'ruleout',
        }
    }
}
```
