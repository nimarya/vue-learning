export default {
    template: `
        <li>
            <label>
                <input type="checkbox" v-model="assignment.isCompleted" class="mr-2 accent-slate-500">

                {{ assignment.name }}
            </label>
        </li>
    `,
    
    props: {
        assignment: Object,
    }
}