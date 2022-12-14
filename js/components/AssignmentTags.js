export default {
    template: `
    <div className="flex gap-2 flex-wrap">
        <button 
            @click="$emit('update:currentTag', tag)"
            v-for="tag in tags" 
            class="border rounded px-1 py-px text-xs"
            :class="{'border-blue-500 text-blue-500': tag === currentTag }"
        >{{ tag }}</button>
    </div>`,
    props: {
        initialTags: Array,
        currentTag: String
    },
    computed: {
        tags() {
            return ['all', ...new Set( this.initialTags )];
        }
    }
}
