import Image from "next/image";
import {IconDots, IconHeart, IconMessage2, IconRefresh} from "@tabler/icons-react";
import {postData} from "../../lib/data";
export default function Home() {

    return (
        <>{
            postData.map((item, index)=>{
                return (
                    <div key={index} className={'my-4 mx-4 px-4 py-4 bg-neutral-900/90 rounded-sm'}>
                        <div className={'flex flex-row justify-start items-center'}>
                            <Image className={'w-11 h-11 rounded-full'} src={item.avatar} alt={'刘铭熙'}/>
                            <div className={'ml-2'}>
                                <h6 className={'text-sm font-bold'}>{item.name}</h6>
                                <p className={'text-xs font-light'}>@ {item.username}</p>
                            </div>
                        </div>
                        <p className={'text-justify my-2 indent-8 text-sm font-light leading-relaxed'}>
                            {item.content}
                        </p>
                        {
                            item.img && <Image className={'rounded-lg'} src={item.img} alt={'bg'}/>
                        }
                        <p className={'text-xs font-black my-2'}>{item.time} · {item.likes} Likes</p>
                        <div className={'flex flex-row mt-3'}>
                            <div className={'basis-2/3 flex flex-row justify-between items-center'}>
                                <IconMessage2/>
                                <IconRefresh/>
                                <IconHeart/>
                                <IconDots/>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        </>
    )
}
