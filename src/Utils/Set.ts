import { Indexed } from '../utils/Interface';
import Merge from '../utils/Merge';
function Set(object: Indexed | unknown, path: string, value: unknown): Indexed | unknown {
    if (typeof object !== 'object' || object === null) {
        return object;
    }

    if (typeof path !== 'string') {
        throw new Error('path must be string');
    }

    const result = path.split('.').reduceRight<Indexed>((acc, key) => ({
        [key]: acc,
    }), value as Indexed);
    return Merge(object as Indexed, result);
}
export default Set;
