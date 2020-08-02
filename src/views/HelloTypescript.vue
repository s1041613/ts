<template>
  <div>{{ msg }}</div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onMounted,
  onUpdated,
  onUnmounted,
} from "@vue/composition-api";

export default defineComponent({
  name: "HelloTypescript",
  setup() {
    let msg:string = "hi my name is jenny";
    function showMsg(msg:string):void {
      console.log("msg", msg);
    };
    showMsg(msg);
    return {
      msg
    };
  }
})
</script>