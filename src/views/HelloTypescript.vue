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
    //hw2:2020/07/24 題目 基礎型別
    let a:number = 10
    let b:string = '10'
    let c:boolean = true
    let d:undefined = undefined
    let e:null = null
    let f:any
    let g:number[]= [1, 2]
    //Tuple:用來表示一個已知元素數量和型別的陣列 
    //notes: 宣告成["1", 2]會錯
    let h:[number, string] = [1, '2']
    //ans:let h:Array<number||string> = [1, '2']
    let i:{x:number, y:string} = {x : 5, y : "6"}
    //Enum:表示被限定在一定範圍集合的系列元素 ex:紅綠燈(限定顏色紅、黃、綠)
    enum twoD {x = 5, y = "6"}
    let j: twoD = twoD.x;


    //hw1:2020/07/17 題目 初識 typescript
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