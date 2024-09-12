import { Dialog, DialogContent, DialogHeader, DialogTitle, } from "@/components/ui/dialog";
import { useCreateChannelModal } from "../store/use-create-channel-modal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useCreateChannel } from "../api/use-create-channel";
import { useWorkspaceId } from "@/hooks/use-workspace-id";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const CreateChannelModal = () => {
    const router = useRouter()
    const workspaceId = useWorkspaceId()
    const [open, setOpen] = useCreateChannelModal()
    const {mutate, isPending} = useCreateChannel()
    const [name, setName] = useState('')
    const handleClose = () => {
        setName('')
        setOpen(false)
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\s+/g, '-').toLowerCase()
        setName(value)

    }
    const handleSubmit =  (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
      
        mutate({
            name,
            workspaceId
        },
        {
            onSuccess: (id) => {
                toast.success('Channel created')
                router.push(`/workspace/${workspaceId}/channel/${id}`)
                handleClose()
            },
            onError: () => {
                toast.error('Failed to create channel')
            }
        }
    )
        if(isPending) return
    }
    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add a channel</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className=" space-y-4">
                    <Input value={name} disabled={isPending} onChange={handleChange} required autoFocus minLength={3} maxLength={80} placeholder="e.g. plan-budget" />
                    <div className="flex justify-end">
                        <Button disabled={isPending} >
                            Create
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};

