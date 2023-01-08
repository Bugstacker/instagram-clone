// (function () {


    // "use strict";

    const posts = [
        {
            name: "Vincent van Gogh",
            username: "vincey1853",
            location: "Zundert, Netherlands",
            avatar: "images/avatar-vangogh.jpg",
            post: "images/post-vangogh.jpg",
            comment: "just took a few mushrooms lol",
            likes: 21
        },
        {
            name: "Gustave Courbet",
            username: "gus1819",
            location: "Ornans, France",
            avatar: "images/avatar-courbet.jpg",
            post: "images/post-courbet.jpg",
            comment: "i'm feelin a bit stressed tbh",
            likes: 4
        },
            {
            name: "Joseph Ducreux",
            username: "jd1735",
            location: "Paris, France",
            avatar: "images/avatar-ducreux.jpg",
            post: "images/post-ducreux.jpg",
            comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
            likes: 152
        }
    ]

    
    
   

    /*    function createPost() {

            for(let post of posts) {

            // Header

                const header = document.createElement("header");
                header.className = "mb";
        
                const headerContainer = document.createElement("div");
                headerContainer.className = "container header flex";
                header.appendChild(headerContainer);
        
                const logo = document.createElement("img");
                logo.setAttribute("src", "images/logo.png");
                logo.setAttribute("alt", "Oldagram logo");
                headerContainer.appendChild(logo);

                const profilePhoto = document.createElement("img");
                profilePhoto.setAttribute("src", "images/ken.jp");
                profilePhoto.setAttribute("alt", "emkay's potrait");
                headerContainer.appendChild(profilePhoto);

                
            
            

            

            // Section one

            

                const sectionOne = document.createElement("section");
                sectionOne.className = "section-one mb";

                const secOneContainer = document.createElement("div");
                secOneContainer.className = "container flex";
                sectionOne.appendChild(secOneContainer);

                const details = document.createElement("div");
                secOneContainer.appendChild(details);

                const name = document.createElement("h1");
                name.innerHTML = `<span class="name" > ${post.name} </span>`
                details.appendChild(name);

                const location = document.createElement("p");
                location.textContent = post.location;
                details.appendChild(location);

                const avatar = document.createElement("img");
                avatar.setAttribute("src", post.avatar);
                avatar.setAttribute("alt", `${post.name}'s profile picture`);
                avatar.className = "avatar mR"
                secOneContainer.appendChild(avatar);

                
            

            

            // Section two

          

                const sectionTwo = document.createElement("section");
                sectionTwo.className = "section-two mb";

                const secTwoContainer = document.createElement("div");
                secTwoContainer.className = "container";
                sectionTwo.appendChild(secTwoContainer);

                const post = document.createElement("img");
                post.setAttribute("src", post.post);
                post.setAttribute("alt", `${post.name}'s selfie`);
                post.className = "post"
                secTwoContainer.appendChild(post);

              
            

            // Section three

           

                const sectionThree = document.createElement("section");
                sectionThree.className = "section-three mb";

                const secThreeWrapper = document.createElement("div");
                secThreeWrapper.className = "container";
                sectionThree.appendChild(secThreeWrapper);

                const iconsWrapper = document.createElement("div");
                iconsWrapper.className = "icons-container flex";
                secThreeWrapper.appendChild(iconsWrapper);

                const icons = ["images/icon-heart.png", "images/icon-comment.png", "images/icon-dm.png"];

                const iconLink = document.createElement("a");
                iconLink.setAttribute("href", "#");
                iconsWrapper.appendChild(iconLink);

                const iconsImages = document.createElement("img");

                for(let eachIcon of icons) {
                    iconsImages.setAttribute("src", eachIcon);
                    if(eachIcon === icons[0]) {
                        iconsImages.setAttribute("alt", "like icon");
                    }
                    else if (eachIcon === icons[1]) {
                        iconsImages.setAttribute("alt", "comment icon");
                    }
                    else {
                        iconsImages.setAttribute("alt", "share icon");
                    }
                }
                iconLink.appendChild(iconsImages);
                iconsImages.className = "icons";

            
            

            // footer

          

                const footer = document.createElement("footer");
                footer.className = "mb";
    
                const footerWrapper = document.createElement("div");
                footerWrapper.className = "container";
                footer.appendChild(footerWrapper);
    
                const likes = document.createElement("p");
                likes.innerHTML = `<span class="name">${post.likes} likes</span>`
                footerWrapper.appendChild(likes);
    
                const usernameP = document.createElement("p");
                usernameP.innerHTML = `<span class="name"> ${post.username} </span> just took a few mushrooms lol`;

              
                // Create Main Element

                const main = document.createElement("main");
                main.appendChild(sectionOne);
                main.appendChild(sectionTwo);
                main.appendChild(sectionThree);
                // Document Flow

                const flow = document.getElementById("post");
                flow.appendChild(header);
                flow.appendChild(main);
                flow.appendChild(footer);
                
        
                return flow;
        }

    }

    createPost();

// })() */