import type { Status } from "../types";

export function getStatus( status:Status|null=null,fallback:string=''){
    return `${status==='corect'?'!bg-green-300 border-green-300':status==='close'?'!bg-amber-300 !border-amber-300':status==='wrong'?'!bg-slate-400 border-slate-400':fallback} ${status==='none'?'!text-black':'!text-white'} `
   }