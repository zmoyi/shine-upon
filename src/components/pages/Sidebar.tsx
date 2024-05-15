import React from "react";
import {Button} from "@/components/ui/button";
import {PlusIcon} from "@radix-ui/react-icons";
import {InfoIcon, SearchIcon, SendIcon, User2Icon} from "lucide-react";

const Sidebar = () => {
    return (
        <>
            <div
                className={'flex flex-col h-screen justify-center items-end sticky top-0 left-0 bottom-0 pt-10 pr-10'}>
                <div className={'my-4 flex flex-col items-center space-y-4'}>
                    <Button className={'rounded-full'} variant={'ghost'} size="icon">
                        <User2Icon className="h-4 w-4" />
                    </Button>
                    <Button className={'rounded-full'} variant={'ghost'} size="icon">
                        <SearchIcon className="h-4 w-4" />
                    </Button>
                    <Button className={'rounded-full'} variant={'ghost'} size="icon">
                        <SendIcon className="h-4 w-4" />
                    </Button>
                    <Button className={'rounded-full'} variant={'ghost'} size="icon">
                        <InfoIcon className="h-4 w-4" />
                    </Button>
                    <Button className={'rounded'} variant={'secondary'} size={'icon'}>
                        <PlusIcon />
                    </Button>
                </div>
            </div>

        </>
    );
}

export default Sidebar;
