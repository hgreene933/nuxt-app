<script setup lang="ts">
defineProps<{
    howAreYouFeeling: string
}>();

defineEmits(["update:howAreYouFeeling"]);
</script>

<template>
    <fieldset>
        <legend>How are you feeling?</legend>
        <div class="input-wrap--radio">
            <input type="radio" id="feeling-good" value="good" :checked="howAreYouFeeling === 'good'" @input="$emit('update:howAreYouFeeling', $event.target?.value)" name="howAreYouFeeling">
            <label for="feeling-good">Good</label>

            <input type="radio" id="feeling-bad" value="bad" :checked="howAreYouFeeling === 'bad'" @input="$emit('update:howAreYouFeeling', $event.target?.value)" name="howAreYouFeeling">
            <label for="feeling-bad">Bad</label>

            <input type="radio" id="feeling-undecided" value="undecided" :checked="howAreYouFeeling === 'undecided'" @input="$emit('update:howAreYouFeeling', $event.target?.value)" name="howAreYouFeeling">
            <label for="feeling-undecided">Undecided</label>
        </div>
    </fieldset>
</template>

<style lang="scss">
.input-wrap--checkbox,
.input-wrap--radio {
    display: flex;
    gap: 20px;
}
</style>
