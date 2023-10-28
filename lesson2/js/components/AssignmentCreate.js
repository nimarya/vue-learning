export default{
    template: `
        <form class="mt-6 ml-2" @submit.prevent="add">
            <input v-model="newAssignment" class="placeholder:text-white bg-slate-500 text-white rounded-md p-2" type="text" placeholder="New assignment..">
            <button class="ml-6 bg-slate-500 p-2 text-white rounded-md hover:bg-slate-400" type="submit">Add</button>
        </form>
    `,

    data() {
        return {
            newAssignment: '',
        }
    },

    methods: {
        add() {
            alert('add');
        },
    }
}