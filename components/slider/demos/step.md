---
title: 
    zh-CN: 设置步长
    en-US: Set step size
order: 1
---
## zh-CN

通过`step`可以设置步长，默认步长为`1`，当该属性值为`0`时，不限制步长

## en-US

The step size can be set by `step`, the default step size is `1`

```vdt
import Slider from 'kpc/components/slider';

<div>
    <Slider v-model="value1" step={{ 5 }} isShowEnd={{ false }} />
    <Slider v-model="value2" min={{ 50 }} max={{ 500 }} step={{ 0.1 }} />
    <Slider value={{ 0.234234 }} max={{ 1 }} step={{ 0 }} />
</div>
```

```styl
.k-slider
    margin-bottom 20px
```
