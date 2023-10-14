export default {
    template: `
        <li>
            <label>
                <input type="checkbox" v-model="assignment.isCompleted" class="mr-2">

                {{ assignment.name }}
            </label>
        </li>
    `,
    
    props: {
        assignment: Object,
    }
}