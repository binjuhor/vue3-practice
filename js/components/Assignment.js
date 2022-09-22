export default {
    template: `
        <li>
            <label class="cursor-pointer">{{ assignment.name }}</label>
            <input class="ml-2" type="checkbox" v-model="assignment.complete" />
        </li>
    `,
    props: {
        assignment: Object
    }
}