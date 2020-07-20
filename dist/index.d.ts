import { VueDecorator } from "vue-class-component";
export interface IAsyncComputedOptions<TResult> {
    /**
     * The default value or a function which return the default value that will
     * be used until the data is loaded for the first time.
     */
    default?: TResult | (() => TResult);
    /**
     * An array of (nested) properties which are additional dependencies of
     * this computed value.
     */
    watch?: string[] | (() => void);
    /**
     * A function which determines whether the recalculation of the value is
     * required or not.
     */
    shouldUpdate?: () => boolean;
    /**
     * This flag indicates whether the value will be computed on first access
     * or immediately when initializing the corresponding Vue component.
     *
     * By default, or if this flag is `false`, the former behavior will take
     * place, otherwise (if the flag is `true`) the latter one will happen.
     */
    lazy?: boolean;
}
export default function AsyncComputed<TResult>(computedOptions?: IAsyncComputedOptions<TResult>): VueDecorator;
