<template>
    <div class="ww-base">
        <wwObject v-bind="content.container" class="content" />
        <wwLayout path="wwObjects"></wwLayout>
    </div>
</template>

<script>
export default {
    name: '__COMPONENT_NAME__',
    props: {
        content: Object,
    },
    wwDefaultContent: {
        container: {
            isWwObject: true,
            type: 'ww-container',
        },
        wwObjects: [],
    },
};
</script>

<style lang="scss" scoped>
.ww-base {
    position: relative;
    box-sizing: border-box;
    padding: 100px 30px;
    .content {
        height: 100%;
        width: 100%;
    }
}
</style>
