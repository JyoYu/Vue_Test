<template>
  <div>
    <div class="title">Hot</div>
    <ul class="menu">
      <li @click="menu1">Woman</li>
      <li @click="menu2">Men</li>
      <li @click="menu3">Divided</li>
      <li>Kids</li>
      <li>Shoes</li>
      <li>Accessories</li>
      <li>Underwear</li>
      <li>Nightwear</li>
      <li>Swimwear</li>
      <li>Magazine</li>
    </ul>
  </div>
</template>
<script>
import Msg from "./msg.js";
export default {
  methods: {
    menu1: function() {
      Msg.$emit("val", "1");
    },
    menu2: function() {
      Msg.$emit("val", "2");
    },
    menu3: function() {
      Msg.$emit("val", "3");
    }
  }
};
</script>
<style type="text/css">
.title {
  font-weight: bold;
  color: rgb(0, 0, 0);
  background: #fff;
}

.menu li {
  list-style: none;
  height: 50px;
  color: rgb(92, 92, 92);
  margin-bottom: 2px;
  background-color: white;
  line-height: 50px;
  font-family: "Poiret One", cursive;
}
.menu li:hover {
  color: rgb(71, 71, 71);
}
</style>

