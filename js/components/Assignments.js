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
            assignments: [
                {name: 'Finish Project', complete: false, id: 1, tag: 'math' },
                {name: 'Read chapter 4', complete: false, id: 2, tag: 'science' },
                {name: 'Turn in homework', complete: false, id: 3, tag: 'reading' },
                {name: 'Turn in homework 1', complete: false, id: 3, tag: 'reading' }
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
        add(name){
            this.assignments.push({
                name: name,
                complete: false,
                id: this.assignments.length + 1
            });
        }
    },
}
