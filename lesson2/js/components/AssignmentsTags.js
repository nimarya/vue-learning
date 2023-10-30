export default {
    template: `
        <div class="flex gap-2 mb-6">
            <button
                @click="$emit('update:currentTag', tag)"
                v-for="tag in tags"
                class="hover:text-slate-500 text-xs"
                :class="{
                    'text-sky-600': tag === currentTag,
                }"
            >{{ tag }}</button>
        </div>
    `,

    props: {
        tags: Array,
        currentTag: String,
    },
}