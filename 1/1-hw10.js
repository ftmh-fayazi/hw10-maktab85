const links = document.getElementsByTagName("a");
for(let link of links){
    let linkHref = link.getAttribute("href");
    if(linkHref.includes("://") && !linkHref.startsWith("http://internal.com")){
        link.style.color = "orange"
    }
}