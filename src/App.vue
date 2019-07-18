<template>
  <div id="app">
    <router-view></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<style lang="scss">
@import "@/lib/reset.scss";
* {
  touch-action: pan-y;
}
html,
body,
#app,
.box {
  @include rect(100%, 100%);
}
#app, .box {
  @include flexbox();
  @include flex-direction(column);
  .container {
    @include flexbox();
    @include flex-direction(column);
    @include flex();
    @include rect(100%, auto);
    .header {
      @include rect(100%, 0.44rem);
      background: #f66;
    }
    .content {
      overflow: auto;
      @include flex();
      @include rect(100%, auto);
    }
  }
  .footer {
    @include rect(100%, 0.5rem);
    background: #ccc;
    ul {
      @include rect(100%, 100%);
      @include flexbox();
      @include justify-content(space-around);
      @include align-items();
      li {
        @include rect(auto, 100%);
        @include flexbox();
        @include justify-content(center);
        @include align-items(center);
        @include flex-direction(column);
        span {
          font-size: 0.24rem;
        }
        p {
          font-size: 0.12rem;
        }
        &.router-link-active {
          color: #f66;
        }
      }
    }
  }
}
</style>
