export default {
    template: `
        <div v-show="assignments.length" class="bg-gray-200 rounded-lg p-6 mt-6">
            <h2 class="font-bold mb-4">{{ title }}</h2>

            <ul>
                <li
                    v-for="assignment in assignments" 
                    :key="assignment.id" class="mb-2"
                >
                    <label>
                        <input type="checkbox" v-model="assignment.isCompleted" class="mr-2">

                        {{ assignment.name }}

                    </label>
                </li>
            </ul>
        </div>
    `,
    props: {
        assignments: Array,
        title: String,
    }
}