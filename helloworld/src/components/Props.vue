<template>
    <div>
        
        <div>
            <img :src="imgsrc" >
        </div>
        <div>
            <p>{{ info }}</p>
            <span>{{ price }}</span>
        </div>
    </div>
</template>
<script>
    const PropsObj={
        props:[
        "imgsrc",
        "info",
        "price"]
    }
   
    export default PropsObj;
</script>