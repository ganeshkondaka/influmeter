import Link from 'next/link'
import React from 'react'
import { channels } from '../data'

export const PersonBar = () => {
    return (
        <div className='flex flex-col gap-5 text-xs p-5'>
            {
                channels.map((channel, index) => {
                    return (
                        <Link key={index} href={channel.channel_url} className="relative w-[900px]">
                            <div className="clip-hexagon bg-yellow-500 p-[2px] rounded-xl">
                                <div className="clip-hexagon bg-black flex items-center justify-between gap-2 p-2 px-5 rounded-xl">
                                    {/* your actual content here */}

                                    {/* <Link key={index} href={channel.channel_url} className="flex items-center justify-between gap-2 p-2 px-5 clip-hexagon w-[900px] border-3 border-yellow-900 rounded-xl"> */}
                                    <img src={channel.profile_image_url}
                                        className="w-10 h-10 rounded-lg border-2 border-orange-600 p-1" alt="profile image" />
                                    <div className='w-[12rem]'>
                                        <div>{channel.channel_name}</div>
                                        <div className='text-[10px] text-zinc-500'> - {channel.quick_summary}</div>
                                    </div>
                                    <div className='flex flex-row gap-1'>
                                        <div className='border border-zinc-500 rounded-lg w-44 '>
                                            <div className='w-20 bg-zinc-200 rounded-lg'> .</div>
                                        </div>
                                        <div> %</div>
                                    </div>
                                    <div className='flex flex-row gap-3'>
                                        <div>up</div>
                                        <div>down</div>
                                    </div>
                                    {/* </Link> */}
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}
