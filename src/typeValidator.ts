// typeValidator.ts
export function validateType(response: any, expectedType: string): boolean {
    switch (expectedType) {
        case 'array':
            return Array.isArray(response);
        case 'object':
            return typeof response === 'object' && !Array.isArray(response);
        case 'string':
            return typeof response === 'string';
        case 'number':
            return typeof response === 'number';
        case 'boolean':
            return typeof response === 'boolean';
        default:
            throw new Error(`Unknown return type: ${expectedType}`);
    }
}
