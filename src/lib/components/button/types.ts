import type { Snippet } from "svelte"

export type Props={
    className?: string
    overrideClass?: string
    children:Snippet
    onClick:()=>void
}