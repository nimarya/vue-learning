export default {
    template: `
        <button
            :class="{
                'rounded px-4 py-2 font-bold m-4 disabled:cursor-not-allowed': true,
                'bg-gray-200 hover:bg-gray-400': type === 'primary',
                'bg-purple-200 hover:bg-purple-400': type === 'secondary',
            }"

            :disabled="processing"
        >
            <slot />
        </button>
    `,

    props: {
        type: {
            type: String,
            default: 'primary',
        },
        processing: {
            type: Boolean,
            default: false,
        }
    },
};