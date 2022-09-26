import Assignments from './Assignments.js';
import Panel
 from './Panel.js';
export default  {
    components: { Assignments, Panel },
    template: `
        <div className="grid gap-8">
            <assignments />
            <panel>
                <template #title>This is header</template>
                <p>Default body</p>
                <template #footer>This is footer</template>
            </panel>
        </div>
    `,
}
