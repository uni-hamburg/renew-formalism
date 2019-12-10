export class ContextToolMapping {
    constructor (targetType) {
        this.targetType = targetType;
        this.title = '';
        this.icon = '';
    }

    static fromJson (toolMapping) {
        const mapping = new ContextToolMapping(toolMapping['target-type']);

        if (toolMapping['tool-title']) {
            mapping.title = toolMapping['tool-title'];
        }

        if (toolMapping['icon']) {
            mapping.icon = toolMapping['icon'];
        }

        return mapping;
    }
}
