document.addEventListener('DOMContentLoaded', main)
    //console.log(document.getElementById('ramen-menu'))
    const ramens = [
        { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "/images/shoyu.jpg", rating: 5, comment: "Delicious!" },
        { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "/images/naruto.jpg", rating: 4, comment: "Very flavorful!" },
        { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "/images/kojiro.jpg" }
     ];

     
//displaying ramen images
   function displayRamens(arr){
    arr.forEach((ramen)=>{
        let menu=document.getElementById('ramen-menu')
        let img=document.createElement('img')
        let click=document.getElementsByTagName('img');
        click.addEventListener('click',handleClick)
        img.dataset.id=ramen.id;
        img.src=ramen.image;
        img.style.height='260px'
        img.style.width='300px'
        menu.appendChild(img)
           
   })
}


   
     //main function
     function main(){
        displayRamens(ramens)
        
    }
    