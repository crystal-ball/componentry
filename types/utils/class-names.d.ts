/** Parses a base className from a component display name */
export declare const parseBaseCx: (displayName: string) => string;
declare type NavFlags = {
    fill?: boolean;
    justify?: boolean;
    pills?: boolean;
    vertical?: boolean;
};
/** Creates the classes for nav elements */
export declare const navClasses: (variant: string, { fill, justify, pills, vertical }: NavFlags) => string;
export {};
