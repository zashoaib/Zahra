// Fetch data from JSON file
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const cardContainer = document.getElementById("card-container");
    // Loop through the JSON data and create Bootstrap cards
    data.forEach((card) => {
      const cardHTML = `
<div class="col-md-4">
<div class="card card-block" id="productCard">
<img src="${card.image}" class="card-img-top" alt="Card Image" id="cardImg">
<div class="card-img-overlay">
            <div class="d-flex justify-content-between">

                <p ><span id="nine">93 </span><br /><span id="points"> POINTS </br></span></p>
                <i class="fa fa-heart" style="width:32px; height:28px; top:23px;left:354px;color: #965930;"></i>
            </div>
        </div>
<div class="card-body">
<p class="card-text" id="hickinbotham">${card.text}<span class="text-end" id="price"> <small> ${card.price}</small></span></p>
<h5 class="card-title" id="trueman">${card.title}</h5>
<p class="card-text" id="mcLaren">${card.description}</p>
<hr id="hr">

            <p id="container"> <span id="minus" > - </span>
             <span id="quantity">1</span>
            <span id="plus">+</span> <button class="add" onClick="event">Add to Cart</button>

<hr id="line">
            </p>


</div>
</div>
</div>
`;
      cardContainer.innerHTML += cardHTML;
    });
  })
  .catch((error) => console.error("Error fetching data:", error));

const event = () => {
  console.log("Added to cart");
};
