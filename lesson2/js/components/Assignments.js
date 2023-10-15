import AssignmentsList from "./AssignmentsList.js";

export default {
    components: { AssignmentsList },

    template: `
        <div class="">
            <assignments-list :assignments="filters.todoAssignments" title="To do tasks"></assignments-list>
            <assignments-list :assignments="filters.completedAssignments" title="Completed tasks"></assignments-list>

            <form class="mt-6 ml-2" @submit.prevent="add">
                <input class="placeholder:text-white bg-slate-500 text-white rounded-md p-2" type="text" placeholder="New assignment..">
                <button class="ml-6 bg-slate-500 p-2 text-white rounded-md hover:bg-slate-400" type="submit">Add</button>
            </form>
        </div>
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
        filters() {
            return {
                completedAssignments: this.assignments.filter(assignment => assignment.isCompleted),
                todoAssignments: this.assignments.filter(assignment => ! assignment.isCompleted)
            };
        },
    },

    methods: {
        add() {
            alert('hiii');
        }
    }
}