export default {
    template: `
      <div className="flex gap-2">
        <button 
            @click="$emit('change', tag)"
            v-for="tag in tags" 
            class="border rounded px-1 py-px text-xs"
            :class="{'border-blue-500 text-blue-500': currentTag === tag}"
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
