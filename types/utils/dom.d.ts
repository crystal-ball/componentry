/**
 * DOM manipulation and inspection utility fns
 * @module
 */
/**
 * Find the closest DOM parent with the a `data-id` matching `guid`. If a matching
 * ancestor is not found returns `null`
 */
export declare function closest(target: HTMLElement, guid: string): HTMLElement | null;
/**
 * Setup the mouse and touch listeners on app start, suppress outlines only if a
 * user shows us they're not a keyboard user. Re-enable focus outlines if they
 * start navigating w/ keyboard.
 */
export declare function setupOutlineHandlers(): void;
