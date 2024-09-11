'use client'

import { CreateWorkspaceModal } from "@/features/workspaces/components/create-workspace-modal"
import { CreateChannelModal } from "@/features/channels/components/create-channel-modal"
import { useEffect, useState } from "react"

export const Modals = () => {
    const [mounted, setMounted] = useState(false)

    useEffect(()=> {
        setMounted(true)
       
    },[])
    if(!mounted) return null
    return(
        <>
        <CreateChannelModal />
        <CreateWorkspaceModal />
        </>
    )
}