import AssignmentList from './AssignmentList.js';

export default  {
    components: {
        AssignmentList
    },
    template: `
    <div class="space-y-6">
        <assignment-list :assignments="filters.inProgress" title="In Progress" />
        <assignment-list :assignments="filters.completed" title="Completed" />

        <form @submit.prevent="add">
            <div className="border border-gray-600 text-black">
                <input placeholder="Add Assignment"  class="p-2"  v-model="newAssignment"/>
                <button type="submit" class="bg-white p-2 border-l">Add</button>
            </div>
        </form>
    </div>
    `,
    data() {
        return {
            assignments: [
                {name: 'Finish Project', complete: false, id: 1},
                {name: 'Read chapter 4', complete: false, id: 2},
                {name: 'Turn in homework', complete: false, id: 3}
            ],
            newAssignment: ''
        }
    },
    computed: {
        filters() {
            return {
                inProgress:  this.assignments.filter(assignment => !assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete)
            }
        }
    },
    methods: {
        add() {
            if (this.newAssignment) {
                this.assignments.push({
                    name: this.newAssignment,
                    complete: false,
                    id: this.assignments.length + 1
                });
                this.newAssignment = '';
            }
        }
    },
}
