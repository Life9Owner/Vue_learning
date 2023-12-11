<template>
    <h1>点击显示英文</h1>
    <button @click='showMsg("Hello",$event)'>你好</button>
    <button @click='showMsg("World",$event)'>世界</button>
    <button @click='showMsg("Welcome",$event)'>欢迎</button>
    <slot></slot>
</template>
<script>
    var emitObj={
      
        methods: {
            showMsg:function(v,event)
            {
                console.log(v+" : "+event);
                this.$emit("emiting",v);
            }
        },
        emits: ['emiting'],
    }
    
    export default emitObj;
</script>