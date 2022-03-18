function showSearch(){
    const show = document.querySelector("#showSearch");
    show.innerHTML=`
    <input type="search" placeholder="Search...">
    <button type="submit">Search</button>
    `
 }


 function showImage(){
    const show = document.querySelector("#showImage");
    show.innerHTML=`
    <img src="Assets/search 1.png" 
    alt="" onmouseenter="showSearch()" onmouseleave="showImage()" id="search__image">
    `
 }


 