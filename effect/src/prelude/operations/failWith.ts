import * as T from "@effect-ts/core/Effect";
import { Effect } from "../definition/Effect";
import { LazyArgument } from "../../utils/LazyArgument.js";

/**
 * Returns an effect that models failure with the specified error.
 * The moral equivalent of `throw` for pure code.
 *
 * @ets static ets/EffectOps fail
 */
export function failWith<E>(e: LazyArgument<E>, __etsTrace?: string): Effect<unknown, E, never> {
    return T.failWith(e, __etsTrace);
}
