import AssignmentsList from "./AssignmentsList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: { AssignmentsList, AssignmentCreate },

    template: `
        <div class="">
            <assignments-list :assignments="filters.todoAssignments" title="To do tasks"></assignments-list>
            <assignments-list :assignments="filters.completedAssignments" title="Completed tasks"></assignments-list>

            <assignment-create @add="add"></assignment-create>
        </div>
    `,

    data() {
        return {
            assignments: [
                {name: 'first task very very very long', isCompleted: false, id: 1},
                {name: 'second task', isCompleted: false, id: 2},
                {name: 'third task', isCompleted: false, id: 3},
            ],
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