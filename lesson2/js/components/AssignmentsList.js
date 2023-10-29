import Assignment from "./Assignment.js";

export default {
    components: { Assignment },

    template: `
        <div v-show="assignments.length" class="bg-gray-200 rounded-lg p-6 mt-6">
            <h2 class="font-bold mb-2">
                {{ title }}
                <span>({{ assignments.length }})</span>
            </h2>

            <div class="flex gap-2 mb-6">
                <button
                    @click="currentTag = tag"
                    v-for="tag in tags"
                    class="hover:text-slate-500 text-xs"
                    :class="{
                        'text-sky-700': tag === currentTag,
                    }"
                >{{ tag }}</button>
            </div>

            <ul>
                <assignment
                    v-for="assignment in filteredAssignments" 
                    :key="assignment.id"
                    class="mb-2"
                    :assignment="assignment"
                >
                </assignment>
            </ul>
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

        tags() {
            return ['all', ...new Set(this.assignments.map(a => a.tag))];
        }
    }
}