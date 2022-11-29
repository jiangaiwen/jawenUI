<template>
    <div class="j-card" :style="width ? {width : width + 'px'} : {}">
        <div class="j-card-img" :style="imgHeight ? {height : imgHeight + 'px'} : {}">
            <img :src="imgSrc" alt="img" />
        </div>
        <div v-if="summary" class="j-card-summary">
            {{ summary }}
        </div>
        <div v-else class="j-card-summary">
            <slot></slot>
        </div>
        <slot name="footer"></slot>
    </div>
</template>
<script>
export default {
    name: 'j-card',
    props: {
        width: { // 卡片宽度
            type: Number,
            default: 0
        },
        imgSrc: { // 卡片图片资源地址
            type: String,
            default: ''
        },
        imgHeight: { // 卡片图片的高度
            type: Number,
            default: 0
        },
        summary: { // 卡片的概要
            type: String,
            default: ''
        }
    }
}
</script>