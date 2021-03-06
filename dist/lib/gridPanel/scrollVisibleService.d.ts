import { BeanStub } from "../context/beanStub";
export interface SetScrollsVisibleParams {
    horizontalScrollShowing: boolean;
    verticalScrollShowing: boolean;
}
export declare class ScrollVisibleService extends BeanStub {
    private columnController;
    private columnApi;
    private gridApi;
    private gridOptionsWrapper;
    private horizontalScrollShowing;
    private verticalScrollShowing;
    setScrollsVisible(params: SetScrollsVisibleParams): void;
    isHorizontalScrollShowing(): boolean;
    isVerticalScrollShowing(): boolean;
}
