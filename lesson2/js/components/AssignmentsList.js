import Assignment from "./Assignment.js";
import AssignmentsTags from "./AssignmentsTags.js";

export default {
    components: { Assignment, AssignmentsTags },

    template: `
        <div>
            <div v-show="assignments.length" class="bg-gray-200 rounded-lg p-6 mt-6 w-70">
                <h2 class="font-bold mb-2">
                    {{ title }}
                    <span>({{ assignments.length }})</span>
                </h2>

                <assignments-tags
                    v-model:currentTag="currentTag"
                    :tags="['all', ...new Set(assignments.map(a => a.tag))]">
                </assignments-tags>

                <ul>
                    <assignment
                        v-for="assignment in filteredAssignments" 
                        :key="assignment.id"
                        class="mb-2"
                        :assignment="assignment">
                    </assignment>
                </ul>
            </div>
            <slot></slot>
        </div>
    `,

    data() {
        return {
            currentTag: 'all',
        };
    },

    props: {
        assignments: Array,
        title: String,
    },

    computed: {
        filteredAssignments() {
            if (this.currentTag === 'all') {
                return this.assignments;
            }
            return this.assignments.filter(a => a.tag === this.currentTag);
        },
    },
}