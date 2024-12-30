export type ButtonEvent=MouseEvent & {
    currentTarget: EventTarget & HTMLButtonElement;
}