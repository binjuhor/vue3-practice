import AssignmentList from './AssignmentList.js';
import AssignmentCreate from './AssignmentCreate.js';
import Panel from './Panel.js';

export default  {
    components: {
        AssignmentList,
        AssignmentCreate,
        Panel
    },
    template: `
        <div class="flex gap-8">
            <assignment-list :assignments="filters.inProgress" title="In Progress">
                <assignment-create @add="add" />
            </assignment-list>
            <assignment-list :assignments="filters.completed" title="Completed" can-toggle />
        </div>
    `,
    data() {
        return {
            assignments: [],
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
    created() {
        fetch('http://localhost:3000/assignments')
        .then(response => response.json())
        .then(assignments => {
            this.assignments = assignments;
        });
    },
    methods: {
        add(name){
            this.assignments.push({
                name: name,
                complete: false,
                id: this.assignments.length + 1
            });
        }
    },
}
