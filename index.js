 document.addEventListener('DOMContentLoaded', main)
    //console.log(document.getElementById('ramen-menu'))
    const ramens = [
        { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "images/shoyu.jpg", rating: 5, comment: "Delicious!" },
        { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "images/naruto.jpg", rating: 4, comment: "Very flavorful!" },
        { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "images/kojiro.jpg" }
     ];

     
//displaying ramen images
   function displayRamens(ramens){
    let menu=document.getElementById('ramen-menu')
    menu.innerHTML="";//clears previous images before appending new ones
    ramens.forEach((ramen)=>{
        let img=document.createElement('img')
        img.dataset.id=ramen.id;
        img.src = ramen.image;
        img.style.height='260px'
        img.style.width='300px'
        img.addEventListener('click',()=>handleClick(ramen))
        img.id="ramenImage"
        menu.appendChild(img);
           
   })
}
displayRamens(ramens)

//click effect
function handleClick(ramen) {
    let details = document.getElementById('ramen_details');
    details.innerHTML = ""; 
    
    let img = document.createElement('img');
    img.src = ramen.image;
    img.alt = ramen.name;
    img.style.height = '350px';
    img.style.width = '400px';
    
    let name = document.createElement('h2');
    name.textContent = ramen.name;
    
    let restaurant = document.createElement('h3');
    restaurant.textContent = `Restaurant: ${ramen.restaurant}`;
    
    let rating = document.createElement('p');
    rating.textContent = ramen.rating ? `Rating: ${ramen.rating}` : "Rating: N/A";
    
    let comment = document.createElement('p');
    comment.textContent = ramen.comment ? `Comment: ${ramen.comment}` : "Comment:No comment available"

    details.appendChild(img);
    details.appendChild(name);
    details.appendChild(restaurant);
    details.appendChild(rating);
    details.appendChild(comment);
}
//pushing the new ramen

 document.getElementById('rating_form').addEventListener('submit',handleSubmit)
 function handleSubmit(e){
    e.preventDefault();
    form=document.getElementById('rating_form')
    let newName=e.target[0].value
    let newRestaurant=e.target[1].value
    let newRating=e.target[2].value
    let newImage=e.target[3].value
    let newComment=e.target[4].value
    let newId = ramens.length + 1

     let newRamen={
        name:newName,
        restaurant:newRestaurant,
        image:newImage,
        rating:newRating,
        comment:newComment,
        id: newId
     }
     console.log(newRamen)
     ramens.push(newRamen)
     displayRamens(ramens)
     form.reset()
  }
  
//   function deleteRamen(ramen){
//    index=handleClick(ramen)   
//    ramens.length=ramen.length-1
//    displayRamens()
//   }
     function main(){
        displayRamens(ramens)
        handleClick()
        deleteRamen()
    }
    