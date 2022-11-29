<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <Demo />

    <j-card 
      imgSrc="react.jpg" 
      summary="基于实例的 React16 傻瓜课程基于实例的 React16 傻瓜课程" 
    />

    <j-card 
      imgSrc="react.jpg" 
      summary="基于实例的 React16 傻瓜课程基于实例的 React16 傻瓜课程" 
    >
      <template v-slot:footer>
          <div class="footer">
            <div class="level">中级 · 528人报名</div>
            <div class="price">￥299.00</div>
          </div>
      </template>
    </j-card>

    <j-card 
      imgSrc="react.jpg" 
      :width="370"
      :imgHeight="90"
    >
      基于实例的 React16 傻瓜课程基于实例的 React16 傻瓜课程
      <template v-slot:footer>
          <div class="footer">
            <div class="level">中级 · 528人报名</div>
            <div class="level">￥299.00</div>
          </div>
      </template>
    </j-card>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.level {
  color: #9199A1;
  margin-bottom: 8px;
}

.price {
  color: #F01414;
}

.footer {
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  font-size: 12px;
}
</style>
