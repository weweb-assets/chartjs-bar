<template>
    <wwLayout path="wwObjects" class="section-base"></wwLayout>
</template>

<script>
export default {
    props: {
        content: { type: Object, required: true },
    },
};
</script>

<style lang="scss" scoped>
.section-base {
    display: flex;
    flex-direction: column;
    align-items: stretch;
}
</style>
