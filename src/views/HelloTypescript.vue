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
    //hw3:2020/07/31 題目 interface
    interface K {
      x: number,
      y: string
    }
    let k:K = { x: 5, y: '6'}

    interface L {
      x: number,
      y: string,
      z?:boolean
    }
    let l:L = { x: 5, y: '6'}
    l.z = true

    interface C {
      [index: number]: number | string
    } 
    let cc:C = [1, '2'] // 此題類似I

    interface D {
      (arg0: number):number
      //ans:(arg0: string):number
    } 
    let dd:D = function (arg0) {
        return Number(arg0)
    }

    interface E {
      (arg0: string, arg1: string):string,
    } 
    let ee:E = function (arg0, arg1):string {
        return arg0 + arg1
    }

    interface F {
      ():string
    }    
    let ff:F = () => 'Hello'
   
    interface G {
      (x:number, y: number):number
    } 
    let gg:G = (x:number, y: number) => x + y

    interface H {
      // myAns:(cb:(x:number):void):void
      (cb:(x:number)=>void):void
    } 
    let cb = function (x: number) {
        cb(x + 1)
    }
    let hh:H = (cb) => {}

    interface I {
      [key: number]: string
    } 
    let ii:I = {} // 這個 object 的 key 可以是任意整數，value為字串


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
    //ans:let h:Array<number|string> = [1, '2']
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