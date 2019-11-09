<template>
  <div>=={{kk}}==</div>
</template>
<script type="text/javascript">
import Msg from "./msg.js";
export default {
  data() {
    return {
      kk: "default"
    };
  },
  mounted: function() {
    var _this = this;
    Msg.$on("val", function(m) {
      _this.kk = m;
    });
  }
};
</script>