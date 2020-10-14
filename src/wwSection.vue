<template>
    <div class="ww-base">
        <wwObject v-if="content.background" isBackground v-bind="content.background" class="background"></wwObject>
        <wwObject v-bind="content.container" class="content" />
    </div>
</template>

<script>
export default {
    name: '__COMPONENT_NAME__',
    props: {
        content: Object,
    },
    wwDefaultContent: {
        background: { isWwObject: true, type: 'ww-color' },
        container: { isWwObject: true, type: 'ww-container' },
    },
};
</script>

<style lang="scss" scoped>
.ww-base {
    position: relative;
    min-height: 120px;
    box-sizing: border-box;
    .background {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }
    .content {
        height: 100%;
        width: 100%;
    }
}
</style>
