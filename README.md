# GDGC.1

**E-commerce platform

This website is a basic e-commerce platform where the users are allowed to search for their desirred products, add them to the cart.
It also allows us to check the price being updated in live as the user adds items to the cart. The website is made using HTML,CSS & JS. The product data fetched from the [FakeStore API](https://fakestoreapi.com).

**Features
.Display- The platform displays the products from api in the forms of tiles.


![image](https://github.com/user-attachments/assets/f59301ec-58c8-4027-bb41-dae2f19c7c65)

.Searching- The platform has a live search bar on top right side which allows the user to search for the products.
![image](https://github.com/user-attachments/assets/22ba6be5-8445-4ff0-9499-b30f5ad46b49)
As in the image uploaded above, only the products with the word "mens" in their title are filtered.



.Add to Cart- The user has the option to add their liked products to cart and manage their items.
            The cart section shows each product's details, and the price details will automatically update as products are added or removed.
            
![image](https://github.com/user-attachments/assets/46dd3ac4-33c1-4139-a54a-ed4654ab002d)

.Cart Features- In the cart, the user can increase the quantity of product selected while checking the real time updation of prices.
![image](https://github.com/user-attachments/assets/91d39a41-fbba-4d3f-bbff-d989fe70d6a7)

.Final price- The final price which is the sum of website charges and delivery charges is updated live in the cart.
![image](https://github.com/user-attachments/assets/fdf7122f-1ead-4d3c-89f0-d7717d7957ee)

**Tech stack:

.Html- Structure and layout of the web page.

.Css- Styling and responsive design.

.Js- The JavaScript file that handles dynamic functionalities like searching and cart management.

.Api is used to fetch the product details.
      all the buttons and elements are inserted using java script while the html is only used to give a fundamental layout of the page.


**File Names:

  "index.html"

  "styles.css"

  "thinks.js"
  

**Implementation:

...The the product data is fetched from fakestore api by this:
        fetch('https://fakestoreapi.com/products')
              .then(response => response.json())
              .then(data => displayProducts(data));


...The platform calculates the total price, including a fixed discount, platform fees, and shipping charges. The final amount is displayed dynamically.
          function calculateTotal() {
                let totalMrp = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
                let totalAmount = totalMrp - discount + platformFee + shippingCharges;
                totalMrpEl.innerText = totalMrp;
                totalAmountEl.innerText = totalAmount;
            }



**Contact Information:
For any inquiries or feedback, feel free to reach out:

->Email: kaushik.pasumarthi@gmail.com

->LinkedIn: https://www.linkedin.com/in/sai-srinivasa-kaushik-pasumarthi-019504293

->GitHub: https://github.com/Kaushik-pasumarthi



**Responsiveness
...The platform is designed look professional in all the devices.The platform is designed to be fully responsive, ensuring an optimal user experience on both mobile devices and desktops. The layout adapts to various screen sizes using CSS media queries and Flexbox.
![image](https://github.com/user-attachments/assets/836a5a9a-25d4-4e63-b310-c558001e5e87) ![image](https://github.com/user-attachments/assets/65df00e8-50ab-4c7a-8013-97ff1e800d79)




