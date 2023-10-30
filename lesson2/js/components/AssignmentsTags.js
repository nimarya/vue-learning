export default {
    template: `
        <div class="flex gap-2 mb-6">
            <button
                @click="$emit('update:modelValue', tag)"
                v-for="tag in tags"
                class="hover:text-slate-500 text-xs"
                :class="{
                    'text-sky-600': tag === modelValue,
                }"
            >{{ tag }}</button>
        </div>
    `,

    props: {
        tags: Array,
        modelValue: String,
    },
}