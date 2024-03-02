// loadAllPost function
const loadAllPost = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`)
    const data = await res.json();
    const posts = data.posts
    console.log(posts)

    const postContainer = document.getElementById('post-container')
    const readPost = document.getElementById('read-post')

    posts.forEach((post) => {
            // console.log(post)
            const postInfo = document.createElement("div");
            postInfo.classList.add('flex')
            postInfo.innerHTML = `
            <div  class="flex">
                <div class="bg-slate-100 shadow-xl rounded-2xl flex gap-5 border p-5">
                    <div class="relative">
                        <img class=" h-10 lg:h-16 w-28 lg:w-16 rounded-2xl"
                        src="https://i.ibb.co/0QRxkd5/pexels-jan-kop-iva-3525908.jpg" alt="">
                        <div class="absolute top-0 right-0">
                            <input type="radio" name="radio-2" class="radio radio-success" checked />
                        </div>
                    </div>
                    <div>
                        <div class="flex gap-5 font-semibold">
                            <div class="flex gap-1">
                                <p>#</p>
                                <p>music</p>
                            </div>
                        <div>
                        <p><span>Author:  </span>Alwad hossain</p>
                    </div>
                </div>
                        <h2 class="card-title">10 kids unaware of their hallowen kdfkdf </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eveniet magnam fuga nulla
                            eligendi minus.</p>
                        <hr class="mt-5 mb-5 border-dashed border-2">
                        <div class="flex justify-between">
                        <!-- comment, view, type -->
                            <div class="flex gap-7">
                                <div class="flex items-center gap-3">
                                    <i class="fa-regular fa-comment"></i>
                                    <p>560</p>
                                </div>
                                <div class="flex items-center gap-3">
                                    <i class="fa-solid fa-eye"></i>
                                    <p>1566</p>
                                </div>
                                <div class="flex items-center gap-3">
                                    <i class="fa-regular fa-clock"></i>
                                    <p>1566</p>
                                </div>
                        </div>
                        <!-- read post -->
                        <div>
                            <i class="fa-regular fa-envelope text-2xl"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>            
        `
        postContainer.appendChild(postInfo);
        const readInfo = document.createElement("div");
        readInfo.className = "flex justify-between p-5 rounded-2xl shadow-xl bg-white m-2"
        readInfo.innerHTML = `
            <h2>10 kids unware of their fate</h2>
            <div class="flex gap-2 items-center">
                <i class="fa-solid fa-eye"></i>
                <p>1564</p>
            </div>
        `
        readPost.appendChild(readInfo)
        })
}

// call function
loadAllPost()