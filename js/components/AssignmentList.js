import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";

export default {
    components: {
        Assignment,
        AssignmentTags
    },
    template: `
        <section v-if="show && assignments.length" class="w-60 bg-gray-700 p-4 border-gray-600 rounded rounded-lg" >
            <div class="flex items-start justify-between mb-2">
                <h2 class="font-bold mb-2">
                    {{title}}
                    <span>({{ assignments.length }})</span>
                </h2>
                <button v-show="canToggle" @click="show = false">&times;</button>
            </div>

            <assignment-tags 
                v-model:currentTag="currentTag"
                :initial-tags="assignments.map(a => a.tag)"
            />

            <ul class="border border-gray-600 divide-y divide-gray-600 mt-6 mb-2">
                <assignment v-for="assignment in filteredAssignments" :key="assignment.id" :assignment="assignment" />
            </ul>

            <slot />
        </section>
    `,
    props: {
        assignments: Array,
        title: String,
        canToggle: { type: Boolean,  default: false}
    },
    data() {
        return {
            currentTag: 'all',
            show: true
        }
    },
    computed: {
        filteredAssignments() {
            if (this.currentTag === 'all') {
                return this.assignments;
            }
            return this.assignments.filter(assignment => assignment.tag === this.currentTag);
        }
    }
}
