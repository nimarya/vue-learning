export default {
    template: `
        <button class="bg-gray-200 hover:bg-gray-400 rounded px-4 py-2 font-bold m-4 disabled:cursor-not-allowed" :disabled="processing">
            <slot />
        </button>
    `,

    data() {
        return {
            processing: true,
        }
    }
}