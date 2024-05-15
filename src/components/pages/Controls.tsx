import React from "react";

const Controls = () => {
    return (
        <>
            <div
                className={'flex flex-col h-screen justify-start items-start sticky top-20 left-0 bottom-0 pt-5 pl-10 z-0'}>
                <div className={'space-y-2'}>
                    <h6 className={'text-base font-bold'}>Posts</h6>
                    <p className={'text-xs text-stone-500 font-light'}>A community app by Read.cv</p>
                    <ul className={'flex flex-row space-x-4 text-xs font-light'}>
                        <li>About</li>
                        <li>Conduct</li>
                        <li>TestFlight</li>
                    </ul>
                </div>
            </div>

        </>
    );
}

export default Controls;
