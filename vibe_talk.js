// loadAllPost function
const loadAllPost = async (searchText) => {
    const spinner = document.getElementById("spinner");
    spinner.classList.remove("hidden")

    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`)
    const data = await res.json();
    const posts = data.posts
    // console.log(posts)

    const postContainer = document.getElementById('post-container')
    postContainer.innerHTML = ''
    

    posts.forEach((post) => {
            spinner.classList.add('hidden')
            // console.log(post)
            const postInfo = document.createElement("div");
            postInfo.classList.add('flex')

            postInfo.innerHTML = `
            <div  class="flex ">
                <div class="bg-slate-100 shadow-xl rounded-2xl flex gap-5 border p-5 lg:w-[550px]">
                    <div class="relative">
                        <img class=" h-10 lg:h-16 w-28 lg:w-16 rounded-2xl"
                        src="${post.image}" alt="">
                        ${post.isActive? '<div id="active" class="absolute top-0 right-0 w-4 h-4 bg-green-400 rounded-full border"></div>' : '<div id="active" class="absolute top-0 right-0 w-4 h-4 bg-red-600 rounded-full border"></div>'}
                    </div>
                    <div>
                        <div class="flex gap-5 font-semibold">
                            <div class="flex gap-1">
                                <p>#</p>
                                <p>${post.category}</p>
                            </div>
                        <div>
                        <p><span>Author: </span>${post.author.name}</p>
                    </div>
                </div>
                        <h2 class="card-title">${post.title}</h2>
                        <p>${post.description}</p>
                        <hr class="mt-5 mb-5 border-dashed border-2">
                        <div class="flex justify-between">
                        
                            <div class="flex gap-7">
                                <div class="flex items-center gap-3">
                                    <i class="fa-regular fa-comment"></i>
                                    <p>${post.comment_count}</p>
                                </div>
                                <div class="flex items-center gap-3">
                                    <i class="fa-solid fa-eye"></i>
                                    <p>${post.view_count}</p>
                                </div>
                                <div class="flex items-center gap-3">
                                    <i class="fa-regular fa-clock"></i>
                                    <p>${post.posted_time}</p>
                                </div>
                            </div>
                        
                        <div>
                            <button onclick="check('${post.title.replace(/'/g,'')}' , ${post.view_count})" class ="btn rounded-full"><i class="fa-regular fa-envelope text-2xl"></i></button>    
                        </div>
                    </div>
                </div>
            </div>
        </div>            
        `
        postContainer.appendChild(postInfo);
         
       
              
    })
}
// ------------------------------------------------------------------------------------------------------


// latestPost Function
const latestPost = async () => {
    const spinner2 = document.getElementById("spinner2");
    spinner2.classList.remove("hidden")  

    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/latest-posts`);
    const data = await res.json();
    // console.log(data)

    const latestPostContainer = document.getElementById('latest-post-container')

    data.forEach((info) => {
        spinner2.classList.add("hidden") 
        const latestPostInfo = document.createElement("div")
        latestPostInfo.className = "card bg-base-100 shadow-xl p-5"
        latestPostInfo.innerHTML = `
        <figure>
            <img src="${info.cover_image}" alt="Shoes" />
        </figure>
        <div class="card-body space-y-2 p-0 pt-5">
            <div class="flex gap-2 items-center">
                <i class="fa-regular fa-calendar"></i>
                <p>${info.author?.posted_date || 'No posted Date'}</p>
            </div>
            <p class="font-bold">${info.title}</p>
            <p>${info.description}</p>
            <div class="flex gap-3">
                <div>
                    <img class="w-12 h-12 rounded-full"
                    src="${info.profile_image}" alt="">
                </div>
                <div>
                    <h2>${info.author.name}</h2>
                    <h2>${info.author?.designation || 'Unknown'}</h2>
                </div>
         </div>
        </div>
        `
        latestPostContainer.appendChild(latestPostInfo)
    })
}
// --------------------------------------------------------------------------------------------------


// searchCategory function
const searchCategory = () => {
    const search = document.getElementById('search-field')
    const searchText = search.value
    console.log(searchText)
    if(searchText   ){
        loadAllPost(searchText)
    }
    else{
        alert("PLease Enter Category Name")
    }
}


// function calling
loadAllPost('comedy')


latestPost()


let count = 0;
const check = (title, view) =>{
    const readPost = document.getElementById('read-post')
    const readInfo = document.createElement("div");
        readInfo.className = "flex justify-between p-5 rounded-2xl shadow-xl bg-white m-2"
        readInfo.innerHTML = `
        <h2>"${title}"</h2>
        <div class="flex gap-2 items-center">
            <i class="fa-solid fa-eye"></i>
            <p>${view}</p>
        </div>
    `
    readPost.appendChild(readInfo)    
    count++;
    const countRead = document.getElementById('count-read');
    countRead.textContent = (count)    
    } 