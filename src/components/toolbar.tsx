interface ToolbarProps{
    isAuthor: boolean;
    isPending: boolean;
    handleEdit: ()=> void;
    handleThread: () => void;
    handleDelete: () => void;
    handleReaction: (value: string) => void;
    hideThreadButton?: boolean
}


export const Toolbar = ({
    isAuthor,
    isPending,
    handleEdit,
    handleThread,
    handleDelete,
    handleReaction,
    hideThreadButton
}: ToolbarProps) => {
    return (
        <div className=""></div>
    )
}