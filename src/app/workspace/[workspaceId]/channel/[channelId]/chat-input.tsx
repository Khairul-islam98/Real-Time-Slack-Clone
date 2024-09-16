import dynamic from "next/dynamic"

const Editor = dynamic(()=> import("@/components/editor"), {ssr: false})


export const ChatInput = () => {
    return (
        <div className="px-5 w-full">
            <Editor variant="update" />
        </div>
    );
};

