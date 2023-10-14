import AssignmentsList from "./AssignmentsList.js";

export default {
    components: { AssignmentsList },

    template: `
       <assignments-list :assignments="todoAssignments" title="To do tasks"></assignments-list>
       <assignments-list :assignments="completedAssignments" title="Completed tasks"></assignments-list>
    `,

    data() {
        return {
            assignments: [
                {name: 'first task very very very long', isCompleted: false, id: 1},
                {name: 'second task', isCompleted: false, id: 2},
                {name: 'third task', isCompleted: false, id: 3},
            ]
        }
    },

    computed: {
        completedAssignments() {
            return this.assignments.filter(assignment => assignment.isCompleted);
        },

        todoAssignments() {
            return this.assignments.filter(assignment => ! assignment.isCompleted);
        }
    }
}