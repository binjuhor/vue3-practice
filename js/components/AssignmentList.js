import Assignment from "./Assignment.js";

export default {
    components: {
        Assignment
    },
    props: {
        assignments: Array,
        title: String
    },
    template: `
        <section v-if="assignments.length">
            <h2 class="font-bold mb-2">{{title}}</h2>
            <ul>
                <assignment v-for="assignment in assignments" :key="assignment.id" :assignment="assignment"></assignment>
            </ul>
        </section>
    `,

}