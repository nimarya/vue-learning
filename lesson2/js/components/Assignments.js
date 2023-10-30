import AssignmentsList from "./AssignmentsList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: { AssignmentsList, AssignmentCreate },

    template: `
        <div class="flex gap-8">
            <assignments-list :assignments="filters.todoAssignments" title="To do tasks">
                <assignment-create @add="add"></assignment-create>
            </assignments-list>
            <assignments-list :assignments="filters.completedAssignments" title="Completed tasks"></assignments-list>
        </div>
    `,

    data() {
        return {
            assignments: [],
        }
    },

    computed: {
        filters() {
            return {
                completedAssignments: this.assignments.filter(assignment => assignment.isCompleted),
                todoAssignments: this.assignments.filter(assignment => ! assignment.isCompleted)
            };
        },
    },

    created() {
        fetch('http://localhost:3000/assignments')
            .then(response => response.json())
            .then(assignments => {
                this.assignments = assignments;
            });
    },

    methods: {
        add(name) {
            this.assignments.push({
                name: name,
                isCompleted: false,
                id: this.assignments.length + 1,
            });
        }
    }
}