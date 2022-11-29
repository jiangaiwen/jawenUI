# 快速开始

#### 安装组件库

```bash
npm i jawen-ui
```


#### 使用组件库
> 在main.js 中引用组件库

```javascript
// 全部引入
import 'jawen-ui/dist/css/index.css';
import JUI from 'jawen-ui';
Vue.use(JUI)

// 按需引入
import 'jawen-ui/dist/css/demo.css';
import { Demo } from 'jawen-ui';
Vue.use(Demo)
```