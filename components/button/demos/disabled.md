---
title: 
    zh-CN: 禁用状态
    en-US: Disabled
order: 5
---

## zh-CN

添加`disabled`属性，可以禁用按钮

## en-US

Add a `disabled` property to disable the button.

```vdt
import Button from 'kpc/components/button';

<div>
    <Button disabled>disabled</Button>
    <Button disabled type="none">disabled text</Button>
    <Button disabled icon circle><i class="k-icon ion-ios-search"></i></Button>
    <Button disabled type="link">link</Button>
</div>
```
