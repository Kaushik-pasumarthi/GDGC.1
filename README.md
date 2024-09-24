# GDGC.1
**E-commerce platform
This website is a basic e-commerce platform where the users are allowed to search for their desirred products, add them to the cart.
It also allows us to check the price being updated in live as the user adds items to the cart. The website is made using HTML,CSS & JS. The product data fetched from the [FakeStore API](https://fakestoreapi.com).

**Features

.Searching- The platform has a live search bar on top right side which allows the user to search for the products.
![image](https://github.com/user-attachments/assets/a7306461-042b-4faa-88e7-656d428d8b06)  ![image](https://github.com/user-attachments/assets/e63a7d30-d48a-4e10-a6bf-37edde061cfc)
As in the image uploaded above, only the products with the word "mens" in their title are filtered.


.Add to Cart- The user has the option to add their liked products to cart and manage their items.
.Cart Features- In the cart, the user can increase the quantity of product selected while checking the real time updation of prices.
.Final price- The final price which is the sum of website charges and delivery charges is updated live in the cart.

**Tech stack
.Html- Structure and layout of the web page.
.Css- Styling and responsive design.
.Js- The JavaScript file that handles dynamic functionalities like searching and cart management.
.Api is used to fetch the product details.
      all the buttons and elements are inserted using java script while the html is only used to give a fundamental layout of the page.


**File Names
  "index.html"
  "styles.css"
  "thinks.js"
  

**Implementation
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


**Contact Information
For any inquiries or feedback, feel free to reach out:

->Email: kaushik.pasumarthi@gmail.com
->LinkedIn: https://www.linkedin.com/in/sai-srinivasa-kaushik-pasumarthi-019504293
->GitHub: https://github.com/Kaushik-pasumarthi



**Responsiveness
...The platform is designed look professional in all the devices.The platform is designed to be fully responsive, ensuring an optimal user experience on both mobile devices and desktops. The layout adapts to various screen sizes using CSS media queries and Flexbox.


