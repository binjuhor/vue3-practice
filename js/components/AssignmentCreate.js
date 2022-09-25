export default {
    template: `
        <form @submit.prevent="add">
            <div className="border border-gray-600 text-black flex">
                <input placeholder="Add Assignment" class="p-2 max-w-[161px]" v-model="newAssignment"/>
                <button type="submit" class="bg-white p-2">Add</button>
            </div>
        </form>
    `,
    props: {
        assignments: Array
    },
    data() {
        return {
            newAssignment: ''
        }
    },
    methods: {
        add() {
            if (this.newAssignment) {
                this.$emit('add', this.newAssignment);
                this.newAssignment = '';
            }
        }
    },
}