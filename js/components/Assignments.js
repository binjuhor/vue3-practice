import AssignmentList from './AssignmentList.js';
import AssignmentCreate from './AssignmentCreate.js';

export default  {
    components: {
        AssignmentList,
        AssignmentCreate
    },
    template: `
    <div class="space-y-6">
        <assignment-list :assignments="filters.inProgress" title="In Progress" />
        <assignment-list :assignments="filters.completed" title="Completed" />
        <assignment-create @add="add"/>
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
