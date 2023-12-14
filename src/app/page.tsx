import Image from "next/image";
import {IconDots, IconHeart, IconMessage, IconRefresh} from "@tabler/icons-react";
import {postData} from "../../lib/data";
export default function Home() {

    return (
        <>
            <div className={"m-4 font-bold"}>
                All posts
            </div>
            {
            postData.map((item, index)=>{
                return (
                    <div key={index} className={'m-4 p-4 bg-neutral-100/90 dark:bg-neutral-900/90 rounded-lg'}>
                        <div className={'flex flex-row justify-start items-center'}>
                            <Image className={'w-14 h-14 rounded-full'} src={item.avatar} alt={'刘铭熙'}/>
                            <div className={'ml-2'}>
                                <h6 className={'text-base font-bold'}>{item.name}</h6>
                                <p className={'text-xs font-light'}>@ {item.username}</p>
                            </div>
                        </div>
                        <p className={'text-justify my-2 indent-8 text-sm font-normal leading-7 antialiased line-clamp-4'}>
                            {item.content}
                        </p>
                        {
                            item.img && <Image className={'rounded-lg'} src={item.img} alt={'bg'}/>
                        }
                        <div className={'mt-4 bg-neutral-300/30 dark:bg-neutral-800/90 rounded-lg py-2 px-4'}>
                            <p className={'text-xs font-black my-2'}>{item.time} · {item.likes} Likes</p>
                            <div
                                className={'flex flex-row justify-between items-center my-2'}>

                                <div className={'flex flex-row justify-start items-center'}>
                                    <IconRefresh size={20}/>
                                    <p className={'text-sm ml-1 font-normal'}>10</p>
                                </div>
                                <div className={'flex flex-row justify-start items-center'}>
                                    <IconHeart size={20}/>
                                    <p className={'text-sm ml-1 font-normal'}>1</p>
                                </div>
                                <IconDots size={20}/>
                            </div>
                        </div>

                        <div className={'mt-4 bg-neutral-300/20 dark:bg-neutral-800/90 rounded-lg p-4'}>
                            <div className={'flex flex-row justify-between items-center'}>
                                <div className={'flex flex-row justify-start items-center'}>
                                    <IconMessage size={20} className={'mr-2'}/>
                                    <p className={'text-sm font-bold'}>
                                        Comments
                                    </p>
                                </div>
                                <div
                                    className={'w-24 h-8 text-white dark:text-black bg-neutral-900/90 dark:bg-stone-50 rounded-full text-sm flex justify-center items-center'}>
                                    评论
                                </div>
                            </div>
                            <div className={'my-4 bg-neutral-300/50 dark:bg-neutral-700/20 rounded-lg py-2 px-4'}>
                                <div className={'flex flex-row justify-start items-start my-2'}>
                                    <Image className={'w-10 h-10 rounded-full'} src={item.avatar} alt={'刘铭熙'}/>
                                    <div className={'ml-2'}>
                                        <div className={'flex flex-row justify-between items-center'}>
                                            <h6 className={'text-base font-bold'}>{item.name}</h6>
                                            <p className={'text-sm font-bold'}>回复</p>
                                        </div>
                                        <p className={'text-xs font-light mb-1'}>回复：@LiuMingXi</p>
                                        <p className={'text-xs leading-5'}>
                                            Tailwind 允许您使用变体修饰符有条件地在不同状态下应用实用程序类。例如，用于仅在悬停时应用该实用程序
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={'my-4 bg-neutral-300/50 dark:bg-neutral-700/20 rounded-lg py-2 px-4'}>
                                <div className={'flex flex-row justify-start items-start my-2'}>
                                    <Image className={'w-10 h-10 rounded-full'} src={item.avatar} alt={'刘铭熙'}/>
                                    <div className={'ml-2'}>
                                        <h6 className={'text-base font-bold'}>{item.name}</h6>
                                        <p className={'text-xs font-light mb-1'}>回复：@LiuMingXi</p>
                                        <p className={'text-xs leading-5'}>
                                            Tailwind 允许您使用变体修饰符有条件地在不同状态下应用实用程序类。例如，用于仅在悬停时应用该实用程序
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={'my-4 bg-neutral-300/50 dark:bg-neutral-700/20 rounded-lg py-2 px-4'}>
                                <div className={'flex flex-row justify-start items-start my-2'}>
                                    <Image className={'w-10 h-10 rounded-full'} src={item.avatar} alt={'刘铭熙'}/>
                                    <div className={'ml-2'}>
                                        <h6 className={'text-base font-bold'}>{item.name}</h6>
                                        <p className={'text-xs font-light mb-1'}>回复：@LiuMingXi</p>
                                        <p className={'text-xs leading-5'}>
                                            Tailwind 允许您使用变体修饰符有条件地在不同状态下应用实用程序类。例如，用于仅在悬停时应用该实用程序
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
            }
        </>
    )
}
