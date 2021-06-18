import React from 'react';
interface ThemeProps {
    /** Default component props overrides */
    theme: Record<string, unknown>;
}
/**
 * [Theme component 📝](https://componentry.design/components/theme)
 * @experimental
 */
export declare const Theme: React.FC<ThemeProps>;
/**
 * [Theme hook 📝](https://componentry.design/components/theme)
 * @param componentName Library component name, eg Button, Dropdown, Modal, etc.
 */
export declare function useTheme<Theme>(componentName: string, __precompile?: boolean): Theme | null;
export {};
