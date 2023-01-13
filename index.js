// (function () {


    // "use strict";

    import {posts} from "/data.js"

    
    const clone = document.getElementById("clone");
    

    // render the clone
    function renderClone() {
        for (let post of posts) {
            


            clone.innerHTML += `
            <main>
                <section class="section-one mb">
                    
                    <div>
                        <h1 class="name" >${post.name}</h1>
                        <p class="location-p">${post.location}</p>
                    </div>
                    <img src="${post.avatar}" alt="${post.name}'s avatar" class="avatar mR">
                    
                </section>

                <section class="section-two mb">
                    
                    <div class="container">
                        <img src="${post.post}" alt="${post.name}'s selfie looking straight at the camera" class="post">
                    </div>
                    
                </section>

                <section class="section-three mb">
                    <div class="container">
                        <div class="icons-container">
                            <i class="fa-regular fa-heart"></i>
                            <i class="fa-regular fa-comment"></i>
                            <i class="fa-duotone fa-arrow-up-from-bracket"></i>
                        </div>
                    </div>
                </section>
            </main>

            <footer class="mb">
                <div class="container" id="footer">
                    <p class="name">${post.likes} likes</p>
                    <p><span class="name">${post.username}</span> ${post.comment}</p>
                </div>
            </footer>

            
            `
        }
    }

    renderClone();


// })() 