import Assignment from "./Assignment.js";

export default {
    components: { Assignment },

    template: `
        <div v-show="assignments.length" class="bg-gray-200 rounded-lg p-6 mt-6">
            <h2 class="font-bold mb-4">{{ title }}</h2>

            <ul>
                <assignment
                    v-for="assignment in assignments" 
                    :key="assignment.id"
                    class="mb-2"
                    :assignment="assignment"
                >
                </assignment>
            </ul>
        </div>
    `,

    props: {
        assignments: Array,
        title: String,
    }
}