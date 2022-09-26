export default {
    template: `
        <div class="bg-gray-700 p-4 border-gray-600 rounded rounded-lg">
            <h2 class="font-bold mb-2" v-if="$slots.title">
                <slot name="title" />
            </h2>
            <slot />

            <footer v-if="$slots.footer" class="text-sm border-t mt-4 pt-4 border-gray-600">
                <slot name="footer" />
            </footer>
        </div>
    `
}