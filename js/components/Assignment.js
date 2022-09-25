export default {
    template: `
        <li>
            <label class="cursor-pointer p-2 flex justify-between items-center whitespace-nowarp">{{ assignment.name }}
                <input class="ml-3 border-gray-500" type="checkbox" v-model="assignment.complete" />
            </label>
        </li>
    `,
    props: {
        assignment: Object
    }
}