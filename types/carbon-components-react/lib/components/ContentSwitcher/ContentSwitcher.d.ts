import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";
import { SwitchOnKeyDownData } from "../Switch";

export type ContentSwitcherOnChangeData = Omit<SwitchOnKeyDownData, "key"> & Partial<Pick<SwitchOnKeyDownData, "key">>;

export interface ContentSwitcherProps extends Omit<ReactDivAttr, "onChange" | "role"> {
    light?: boolean,
    onChange?(data: ContentSwitcherOnChangeData): void,
    selectedIndex?: number,
    selectionMode?: "automatic" | "manual";
    size?: "sm" | "xl";
}

declare class ContentSwitcher extends React.Component<ContentSwitcherProps> {}

export default ContentSwitcher;
