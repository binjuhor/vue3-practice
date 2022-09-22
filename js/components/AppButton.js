export default {
    template: `
        <button 
            :class="{
                'text-white font-bold py-2 px-4 rounded cursor-pointer relative': true,
                'bg-blue-500 hover:bg-blue-700': type === 'primary',
                'bg-red-500 hover:bg-red-700': type === 'danger',
                'bg-green-500 hover:bg-green-700': type === 'success',
                'is-loading text-transparent': processing
            }"
            :disabled="processing"
        >
            <slot/>
        </button>
    `,
    mounted() {
        console.log('Mounted');
    },
    props: {
        type: {
            type: String,
            default: 'primary'
        },
        processing: {
            type: Boolean,
            default: false
        }
    },
}