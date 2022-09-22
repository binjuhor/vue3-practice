export default {
    template: `
        <button 
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
            :disabled="processing"
        >
            <slot/>
        </button>
    `,
    mounted() {
        console.log('Mounted');
    },
    data() {
        return {
            processing: true
        }
    },
}