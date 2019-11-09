<template>
  <div class="main">
    <div class="left">
      <div class="main_v">
        WINTER
        <br />FASHION
      </div>
      <left />
    </div>
    <div class="right">
      <div class="top">
        <img src="img/title2.jpg" />
      </div>
      <div class="buttom">
        <Right />
      </div>
    </div>
  </div>
</template>
<style type="text/css">
* {
  padding: 0;
  margin: 0;
}
.main_v {
  font-size: 20px;
  font-family: "Poiret One", cursive;
  text-align: center;
  margin-bottom: 20px;
  background: #fff;
}
.left {
  width: 100px;
  float: left;
  margin-right: 10px;
}
.right {
  width: 1000px;
  float: left;
  margin-left: 10px;
}
.main {
  width: 1200px;
  margin: 20px auto;
}
.top img {
  width: 1000px;
}
.left,
.right {
  height: 500px;
}
</style>


<script type="text/javascript">
import Left from "../components/left.vue";
import Right from "../components/right.vue";

export default {
  components: {
    Left,
    Right
  }
};
</script>