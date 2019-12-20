<template>
    <div>
        <cart-head></cart-head>
        <cart-list></cart-list>
        
    </div>
</template>
<script>
import carlist from "../components/carlist"
import carhead from "../components/menuheader"

export default {
    components:{
        "cart-list":carlist,
        "cart-head":carhead
    }
}
</script>