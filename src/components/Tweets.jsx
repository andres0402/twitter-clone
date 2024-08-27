import { useState } from "react"

export function Tweets({tweets}){
    const [likes, setLikes] = useState(tweets.map(tweet => tweet.liked))


    const handleLike = (tweet, index) =>{
        const updatedLikes = [...likes];  // Crea una copia del estado actual de los likes

        if (!tweet.liked) {
            tweet.likes++;
        } else {
            tweet.likes--;
        }

        tweet.liked = !tweet.liked;
        updatedLikes[index] = !updatedLikes[index];  // Actualiza el valor específico en la copia

        setLikes(updatedLikes);  // Actualiza el estado con la nueva copia
    }
    return (
        <>
            <div className="flex flex-col text-white">
                <div className="flex flex-row w-full border-zinc-800 border-[1px] border-t-0">
                    <button className="w-1/2 py-4 hover:bg-zinc-900 transition-all font-bold">Para ti</button>
                    <button className="w-1/2 py-4 hover:bg-zinc-900 transition-all text-zinc-500">Siguiendo</button>
                </div>

                <div className="flex flex-col justify-between px-3 py-3 border-zinc-800 border-[1px] border-t-0">
                    <div className="flex flex-row gap-2">
                        <img src="	https://pbs.twimg.com/profile_images/1167451096073347073/-mS0roCO_normal.jpg" class="rounded-full"/>
                        <input placeholder="¡¿Qué está pasando?!" className="bg-transparent text-xl outline-none"/>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row gap-3 ml-11">
                            <button className="flex items-center justify-center rounded-full hover:bg-zinc-900 transition-all px-1 py-1">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M15 8h.01" />
                                <path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z" />
                                <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" />
                                <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3" />
                                </svg>
                            </button>
                            <button className="flex items-center justify-center rounded-full hover:bg-zinc-900 transition-all px-1 py-1">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-gif" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M8 8h-2a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2v-4h-1" />
                                <path d="M12 8v8" />
                                <path d="M16 12h3" />
                                <path d="M20 8h-4v8" />
                                </svg>
                            </button>
                            <button className="flex items-center justify-center rounded-full hover:bg-zinc-900 transition-all px-1 py-1">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mood-smile" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                <path d="M9 10l.01 0" />
                                <path d="M15 10l.01 0" />
                                <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
                                </svg>
                            </button>
                           
                        </div>
                        <button className="bg-sky-400 hover:bg-sky-500 transition-all ease-in-out px-5 py-1 rounded-full">Postear</button>
                    </div>
                </div>
                    
                    {tweets ? (
                        tweets.map((tweet, index) => (
                        
                            
                            <button className="flex flex-col border-zinc-800 border-[1px] border-t-0 py-2 px-3 hover:bg-zinc-950 transition-all">
                                <div className="flex flex-row gap-2 items-start">
                                    <button className="rounded-full hover:opacity-85 transition-all">
                                        <img src={tweet.profile_pic} width={"40px"} className="rounded-full"/>
                                    </button>
                                    <div className="group flex flex-row gap-1 items-center">
                                        <a href="" className="text-white font-bold group-hover:underline">{tweet.u_name}</a>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-check-filled" width="20" color="#38bdf8" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9e9e9e" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" stroke-width="0" fill="currentColor" />
                                        </svg>
                                    </div>
                                    <p className="text-zinc-500">{tweet.username}</p>
                                </div>
                                <div className="flex flex-col ml-12">
                                    <p className="text-start">{tweet.content}</p>
                                    <img src={tweet.img} className="rounded-xl mt-4"/>
                                    <div className="flex flex-row justify-between mt-2 w-full">
                                        <button className="flex flex-row gap-1 items-center group w-0">
                                            <div className="rounded-full group-hover:bg-sky-700 transition-all flex items-center justify-center p-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message-circle" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9e9e9e" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                <path d="M3 20l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c3.255 2.777 3.695 7.266 1.029 10.501c-2.666 3.235 -7.615 4.215 -11.574 2.293l-4.7 1" />
                                                </svg>
                                            </div>
                                            <p className="text-sm text-zinc-500 group-hover:text-sky-700 transition-all">123</p>
                                        </button>

                                        <button className="flex flex-row gap-1 items-center group w-0">
                                            <div className="rounded-full group-hover:bg-green-600 transition-all flex items-center justify-center p-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-refresh-dot" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9e9e9e" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
                                                <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
                                                <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                                </svg>
                                            </div>
                                            <p className="text-sm text-zinc-500 group-hover:text-green-600 transition-all">123</p>
                                        </button>


                                        <button className="flex flex-row gap-1 items-center group w-0" onClick={() => handleLike(tweet, index)}>
                                            {likes[index] ? (
                                                <>
                                                    <div className="rounded-full group-hover:bg-pink-900 transition-all flex items-center justify-center p-1">
                                                        <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20" color="red" viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-heart"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" /></svg>
                                                    </div>
                                                    <p className="text-sm text-red-600">{tweet.likes}</p>
                                                </>
                                            )
                                            :
                                            (
                                                <>
                                                    <div className="rounded-full group-hover:bg-pink-900 transition-all flex items-center justify-center p-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9e9e9e" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                                                    </svg>
                                                    </div>
                                                    <p className="text-sm text-zinc-500 group-hover:text-red-600 transition-all">{tweet.likes}</p>
                                                </>
                                            )
                                        }
                                        </button>

                                        <button className="flex flex-row gap-1 items-center group w-0">
                                            <div className="rounded-full group-hover:bg-sky-700 transition-all flex items-center justify-center p-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chart-infographic" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9e9e9e" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                <path d="M7 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                                                <path d="M7 3v4h4" />
                                                <path d="M9 17l0 4" />
                                                <path d="M17 14l0 7" />
                                                <path d="M13 13l0 8" />
                                                <path d="M21 12l0 9" />
                                                </svg>
                                            </div>
                                            <p className="text-sm text-zinc-500 group-hover:text-sky-700 transition-all">123</p>
                                        </button>
                                       
                                       <div className="flex flex-row gap-6">
                                            <button className="flex flex-row gap-1 items-center group w-0">
                                                <div className="rounded-full group-hover:bg-sky-700 transition-all flex items-center justify-center p-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9e9e9e" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                    <path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z" />
                                                    </svg>
                                                </div>
                                            </button>
                                            <button className="flex flex-row gap-1 items-center group w-0">
                                                <div className="rounded-full group-hover:bg-sky-700 transition-all flex items-center justify-center p-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-upload" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9e9e9e" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                                                    <path d="M7 9l5 -5l5 5" />
                                                    <path d="M12 4l0 12" />
                                                    </svg>
                                                </div>
                                            </button>
                                       </div>

                                    </div>

                                </div>
                        
                        
                            </button>
                        ))
                    )
                    :
                    (
                        <p className="text-white text-lg">Lo sentimos, no se pueden recuperar los tweets en este momento</p>
                    )
                    }
                
            </div>
        </>
    )
}
