function main(){
    const growMe = document.getElementById("grow-me");
        growMe.classList.add("big");

    const shrinkMe = document.getElementById("shrink-me");
        shrinkMe.classList.remove("big");

    const links = document.querySelectorAll("li");
    console.log(links[0].innerText);
    console.log(links[1].innerText);
    console.log(links[2].innerText);

    const href = document.querySelector(".link");
        href.setAttribute("href", "https://www.example.com");
        href.innerText = "somewhere";


    const hideMe = document.getElementById('hide-me');
        hideMe.style.display = 'none';

    const showMe = document.getElementById('show-me');
        showMe.style.display = 'block';

    const name = document.getElementById('name');
        
}