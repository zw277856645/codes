#### 标准盒模型与怪异盒模型？

##### 标准盒模型：

- width = content width
- 总宽度 = width + padding(left/right) + border(left/right) + margin(left/right)

##### 怪异盒模型：

- width = content width + padding(left/right) + border(left/right)
- 总宽度 = width + margin(left/right)

---

#### 纯 css 设置 div 高度为宽度的一半？

- **原理：** padding 设置百分比时，总是相对于父元素的宽度
- **实现：** padding: 25% 0; height: 0;

---

#### 两侧宽度固定，中间宽度自适应的三栏布局实现方式？

##### 圣杯布局 

```html
<div id="header"></div>
<div id="container">
  <div id="center" class="column"></div>
  <div id="left" class="column"></div>
  <div id="right" class="column"></div>
</div>
<div id="footer"></div>
```

```css
body {
  min-width: 550px;
}

#container {
  padding-left: 200px; 
  padding-right: 150px;
}

#container .column {
  float: left;
}

#center {
  width: 100%;
}

#left {
  width: 200px; 
  margin-left: -100%;
  position: relative;
  right: 200px;
}

#right {
  width: 150px; 
  margin-right: -150px; 
}

#footer {
  clear: both;
}
```

##### 双飞翼布局

```html
<div id="header"></div>
<div id="container" class="column">
  <div id="center"></div>
</div>
<div id="left" class="column"></div>
<div id="right" class="column"></div>
<div id="footer"></div>
```

```css
body {
  min-width: 350px;
}

#container {
  width: 100%;
}

.column {
  float: left;
}
        
#center {
  margin-left: 200px;
  margin-right: 150px;
}
        
#left {
  width: 200px; 
  margin-left: -100%;
}
        
#right {
  width: 150px; 
  margin-left: -150px;
}
        
#footer {
  clear: both;
}
```

##### flex 布局

```html
<div id="header"></div>
<div id="container">
  <div id="center" class="column"></div>
  <div id="left" class="column"></div>
  <div id="right" class="column"></div>
</div>
<div id="footer"></div>
```

```css
#container {
  display: flex;
}

#center {
  flex: 1;
}

#left {
  flex: 0 0 200px;
  order: -1;
}

#right {
  flex: 0 0 150px;
}
```

##### grid 布局

```html
<div id="header"></div>
<div id="container">
  <div id="center" class="column"></div>
  <div id="left" class="column"></div>
  <div id="right" class="column"></div>
</div>
<div id="footer"></div>
```

```css
#container {
  display: grid;
  grid-template-columns: 200px auto 150px;
}
```

---

#### stick footer 实现？

##### 容器负 margin-bottom

```html
<div class="wrapper">
  <div class="push"></div>
</div>
<div class="footer"></div>
```

```css
html, body {
  height: 100%;
}

.wrapper {
  height: auto;
  min-height: 100%;
  margin-bottom: -60px;
  overflow: auto;
}

.footer,
.push {
  height: 60px;
}
```

##### footer 负 margin-top

```html
<div class="wrapper"></div>
<div class="footer"></div>
```

```css
html, body {
  height: 100%;
}

.wrapper {
  height: auto;
  min-height: 100%;
  padding-bottom: 60px;
  overflow: auto;
}

.footer {
  height: 60px;
  margin-top: -60px;
}
```

##### calc

```html
<div class="wrapper"></div>
<div class="footer"></div>
```

```css
.wrap {
  height: auto;
  min-height: calc(100vh - 60px);
  overflow: auto;
}

.footer {
  height: 60px;
}
```

---

#### BFC 是什么？

- 块级格式化上下文，他是一个独立的渲染区域，与外部毫不相干

#### 什么时候出现？

- 根元素
- float 属性不为 none
- position 为 absolute 或者 fixed
- overflow 不为 visible
- display 为 inline-block、table-cell、table-caption、flex、inline-flex