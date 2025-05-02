import Link from 'next/link'
import React from 'react'
import { channels } from '../data'

export const PersonBar = () => {
    return (
        <div className='flex flex-col gap-4 text-xs p-3 sm:p-4'>
            {
                channels.map((channel, index) => {
                    return (
                        <Link key={index} href={channel.channel_url} className="relative w-full sm:w-[600px] md:w-[700px] lg:w-[900px] mx-auto">
                            <div className="clip-hexagon bg-cyan-700 p-[1.5px] sm:p-[2px] rounded-xl">
                                <div className="clip-hexagon bg-gray-800 flex items-center justify-between gap-2 p-2 sm:p-2 md:p-3 px-2 sm:px-4 md:px-5 rounded-xl">
                                    
                                    {/* Profile Image */}
                                    <img
                                        src={channel.profile_image_url}
                                        className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-lg border-2 border-purple-500 p-[2px]"
                                        alt="profile image"
                                    />

                                    {/* Channel Info */}
                                    <div className='w-[7rem] sm:w-[10rem] md:w-[12rem]'>
                                        <div className='text-white text-[10px] sm:text-xs md:text-sm font-semibold'>{channel.channel_name}</div>
                                        <div className='text-[7px] sm:text-[8px] md:text-[10px] text-cyan-300'> - {channel.quick_summary}</div>
                                    </div>

                                    {/* Rating Bar */}
                                    <div className='flex flex-row gap-1 items-center'>
                                        <div className='border border-purple-600 rounded-lg w-24 sm:w-36 md:w-44 bg-gray-700'>
                                            <div
                                                className="bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg text-[6px] sm:text-[7px] md:text-[8px] text-center text-white font-semibold py-[2px] sm:py-1"
                                                style={{ width: `${channel.rating}%` }}
                                            >
                                                → given by GROK
                                            </div>
                                        </div>
                                        <div className='text-white text-[8px] sm:text-xs'>{channel.rating} %</div>
                                    </div>

                                    {/* Voting */}
                                    <div className='flex flex-row gap-2 text-[10px] sm:text-sm'>
                                        <div className='text-green-400'>up</div>
                                        <div className='text-pink-400'>down</div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}
