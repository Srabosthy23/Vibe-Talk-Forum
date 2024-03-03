// loadAllPost function
const loadAllPost = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`)
    const data = await res.json();
    const posts = data.posts
    console.log(posts)

    const postContainer = document.getElementById('post-container')
    

    posts.forEach((post) => {
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
                        <!-- comment, view, type -->
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
                        <!-- read post -->
                        <div>
                            <button onclick="check(${post.id})" class ="btn"><i class="fa-regular fa-envelope text-2xl"></i></button>    
                        </div>
                    </div>
                </div>
            </div>
        </div>            
        `
        postContainer.appendChild(postInfo);
          // active status
          const active = document.getElementById('active')
          const status = post.isActive
          console.log(status)
          if(status === true){
            active.style.backgroundColor = "green";
          }
          else{
            active.style.backgroundColor = "red";
          }
        //   if(status === false){
        //       active.style.backgroundColor = "red";
        //   }
        
        
        // const readPost = document.getElementById('read-post')
              
    })
}

// call function
loadAllPost()

// read info function check call
const check = (id) =>{
            console.log(id)
         } 