'use client'
import React from 'react'
import { useEffect, useState } from 'react'
import { GoHeart, GoHeartFill } from "react-icons/go";

const Tweet = ({ tweet }) => {
    const [likes, setLikes] = useState(tweet?.likes);
    const [liked, setLiked] = useState(null);

    useEffect(() => {
        if (liked === null) return

        const endpoint = liked ? `/api/tweets/${tweet.id}/like` : `/api/tweets/${tweet.id}/unlike`

        fetch(endpoint, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res => res.json())
        .then(({tweet}) => {
            setLikes(tweet?.likes)
        })

    }, [liked, tweet.id]);

    const handleClick = () => setLiked(liked => !liked);

    return (
        <li className="my-3 rounded bg-stone-200 p-4 text-stone-600">
            <div className="flex justify-between">
                <p>{tweet.body}</p>
                <div className="flex items-center gap-2">
                    <button onClick={handleClick}>
                        {
                            liked ? (
                                <GoHeartFill className="w-7 h-7 text-red-500" />
                            ) :
                            (
                                <GoHeartFill className="w-7 h-7 text-slate-500" />
                            )
                        }
                    </button>
                    <span className="text-sm">{likes}</span>
                </div>
            </div>
        </li>
    )
}

export default Tweet;
