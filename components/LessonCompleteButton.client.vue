<template>
    <label
        class="inline-block rounded px-3 py-1 font-bold text-white"
        :class="{ 'bg-green-500': modelValue, 'bg-gray-500': !modelValue }"
    >
        <input
            type="checkbox"
            :value="modelValue"
            @input="() => $emit('update:modelValue', !modelValue)"
            class="hidden"
        />
        {{ modelValue ? 'Completed!' : 'Mark as complete' }}
    </label>
</template>

<script lang="ts" setup>
defineProps({
    modelValue: {
        type: Boolean,
        default: false,
    },
})

defineEmits(['update:modelValue'])
</script>

<style scoped>
::selection {
    display: none;
}
</style>
