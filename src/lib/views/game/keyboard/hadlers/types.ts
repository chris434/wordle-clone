export type KeyboardEventType= KeyboardEvent & {
    currentTarget: EventTarget & Document;
}