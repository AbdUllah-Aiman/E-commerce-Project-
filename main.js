import { Product } from "./products module.js";
import { Person } from "./person.js";
var products = [
    new Product('Bathroom Golden Ring Mirror', 124.25, 15, 'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.', 'images/bathroom-circle-mirror.png', 1, 'Bathroom', 'Home / Living Room / Chair / Modern Emerald Fabric Chair', 'Chair, Living Room'),
    new Product('Bathroom Wooden Table', 550.00, 8, 'Habitasse eaque wisi molestie, mollis pharetra convallis exercitation, distinctio eu arcu fugit nibh donec exercitationem, quisque imperdiet mattis.', 'images/bathroom-wooden-table.png', 1, 'Bathroom', 'Home / Living Room / Chair / Modern Emerald Fabric Chair', 'Chair, Living Room'),
    new Product('Bedroom Single Chair',504.10,20,'Habitasse eaque wisi molestie, mollis pharetra convallis exercitation, distinctio eu arcu fugit nibh donec exercitationem, quisque imperdiet mattis proident cupi.','images/bedroom-single-chair.png',1,'Bedroom','Home / Bedroom / Chair / Bedroom Single Chair','Bedroom, Chair'),
    new Product('Beige Working Chair With Armrest', 784.00, 15, 'Habitasse eaque wisi molestie, mollis pharetra convallis exercitation, distinctio eu arcu fugit nibh donec exercitationem, quisque imperdiet mattis proident cupiditate habitant assumenda. Pariatur minus nibh necessitatibus sociis minim, consectetur dapibus.', 'images/working-chair-with-armrest.png', 2, ' Home Office', 'Home / Home Office / Beige Working Chair With Armrest', 'Home Office'),
    new Product('Black Metal Lamp', 265.00, 8, 'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.', 'images/black-metal-lamp.png', 1, 'Home Office', 'Home / Home Office / Black Metal Lamp', 'Home Office'),
    new Product('Blue Comfy Fabric Chair',580.50,10,'Habitasse eaque wisi molestie, Habitasse eaque wisi molestie, mollis pharetra convallis exercitation, distinctio eu arcu fugit nibh donec exercitationem, quisque imperdiet mattis proident cupiditate habitant assumenda.','images/single-blue-fabric-chair-1.png',2,'Bedroom','Home / Bedroom / Blue Comfy Fabric Chair','Bedroom'),
    new Product('Brown Circle Stool', 224.00, 15,'Nemo malesuada animi consectetur, cras consectetuer laborum tenetur, cum, lacus nemo imperdiet facilisis! Aute metus, lorem primis anim. Eros dolorem.', 'images/brown-wooden-stool.png', 7, ' Kitchen', 'Home / Kitchen / Stool / Brown Circle Stool', ' Kitchen, Stool'),
    new Product('Brown Living Room Sofa',1.200, 8, 'Nemo malesuada animi consectetur, cras consectetuer laborum tenetur, cum, lacus nemo imperdiet facilisis! Aute metus, lorem primis anim. Eros dolorem.', 'images/living-room-brown-sofa.png', 8, 'Living Room', 'Home / Living Room / Sofa / Brown Living Room Sofa', 'Chair, Living Room, Sofa'),
    new Product('Ceramic Oval Bathtub',11.200, 10,'Nemo malesuada animi consectetur, cras consectetuer laborum tenetur, cum, lacus nemo imperdiet facilisis! Aute metus, lorem primis anim. Eros dolorem.','images/cream-ceramic-oval-bathtub.png',9,'Bathroom','Home / Bathroom / Ceramic Oval Bathtub','Bathroom'),
    new Product('Egyptian Vase', 400.00, 15, 'Habitasse eaque wisi molestie, mollis pharetra convallis exercitation, distinctio eu arcu fugit nibh donec exercitationem, quisque imperdiet mattis proident cupiditate habitant assumenda. Pariatur minus nibh necessitatibus sociis minim, consectetur dapibus.', 'images/egyptian-brown-vase.png', 10, ' Home Office', 'Home / Living Room / Egyptian Vase', 'Home Office, Living Room'),
    new Product('Green Living Room Sofa', 1.200 , 8, 'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.', 'images/living-room-green-sofa-.png', 11, 'Living Room', 'Home / Living Room / Sofa / Green Living Room Sofa', ' Living Room, Sofa'),
    new Product('King Size Master Bedroom',14.500 ,10,'Habitasse eaque wisi molestie, Habitasse eaque wisi molestie, mollis pharetra convallis exercitation, distinctio eu arcu fugit nibh donec exercitationem, quisque imperdiet mattis proident cupiditate habitant assumenda.','images/king-size-master-bedroom.png',12,'Bedroom','Home / Bedroom / King Size Master Bedroom','Bedroom'),
    new Product('Kitchen Cabinet',1.150,10,'Habitasse eaque wisi molestie, Habitasse eaque wisi molestie, mollis pharetra convallis exercitation, distinctio eu arcu fugit nibh donec exercitationem, quisque imperdiet mattis proident cupiditate habitant assumenda.','images/kitchen-furniture-cabinet.png',13,'Cabinet','Home / Kitchen / Cabinet / Kitchen Cabinet','Cabinet, Kitchen'),
    new Product('Brown Circle Stool', 860.00, 15,'Nemo malesuada animi consectetur, cras consectetuer laborum tenetur, cum, lacus nemo imperdiet facilisis! Aute metus, lorem primis anim. Eros dolorem.', 'images/furniture-green-fabric-chair.png', 14, ' Chair', 'Home / Living Room / Chair / Modern Emerald Fabric Chair', ' Cabinet, Living Room'),
    new Product('Wall Hanging Cabinet',840.00, 8, 'Nemo malesuada animi consectetur, cras consectetuer laborum tenetur, cum, lacus nemo imperdiet facilisis! Aute metus, lorem primis anim. Eros dolorem.', 'images/wall-hanging-cabinet-.png', 15, 'Cabinet', 'Home / Living Room / Cabinet / Wall Hanging Cabinet', 'Cabinet, Living Room'),
    new Product('White Kitchen Island',800.50, 10,'Nemo malesuada animi consectetur, cras consectetuer laborum tenetur, cum, lacus nemo imperdiet facilisis! Aute metus, lorem primis anim. Eros dolorem.','images/kitchen-island-set.png',16,'Kitchen','Home / Kitchen / White Kitchen Island',' Kitchen'),
    new Product('Wooden Bath Room Stool', 220.50, 15, 'Habitasse eaque wisi molestie, mollis pharetra convallis exercitation, distinctio eu arcu fugit nibh donec exercitationem, quisque imperdiet mattis proident cupiditate habitant assumenda. Pariatur minus nibh necessitatibus sociis minim, consectetur dapibus.', 'images/wooden-stool.png', 17, ' Bathroom', 'Home / Bathroom / Wooden Bath Room Stool', 'Bathroom'),
    new Product('Wooden Console Table', 1.200 , 8, 'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.', 'images/wooden-console-table-.png', 18, 'Bedroom', 'Home / Home Office / Wooden Console Table', ' Bedroom, Home Office'),
];


var persons = [
    new Person("Person 1", "Email 1", "Password 1", "Address 1", "Phone 1", "Admin"),
    new Person("Person 2", "Email 2", "Password 2", "Address 2", "Phone 2", "Customer"),
    new Person("Person 3", "Email 3", "Password 3", "Address 3", "Phone 3", "Seller"),
    new Person("Person 4", "Email 4", "Password 4", "Address 4", "Phone 4", "Guest"),
    new Person("Person 5", "Email 5", "Password 5", "Address 5", "Phone 5", "Admin"),
];
function createTableProducts() {
    let myTable = document.getElementById("myTable");
    let tableHead = document.getElementsByTagName("thead")[0];
    let tableBody = document.getElementsByTagName("tbody")[0];
    let tableRow = document.createElement("tr");
    for (let key in products[0].getProduct()) {
        let tableHeadData = document.createElement("th");
        tableHeadData.innerHTML = key;
        tableRow.appendChild(tableHeadData);
    }
    tableHead.appendChild(tableRow);
    myTable.appendChild(tableHead);
    for (let i = 0; i < products.length; i++) {
        tableRow = document.createElement("tr");
        for (let key in products[i].getProduct()) {
            if (key == "image") {
                let img = document.createElement("img");
                img.src = products[i].image;
                img.alt = "Main Product Img";
                let tableData = document.createElement("td");
                tableData.appendChild(img);
                tableRow.appendChild(tableData);
            }
            else {
                let tableData = document.createElement("td");
                tableData.innerHTML = products[i].getProduct()[key];
                tableRow.appendChild(tableData);
            }
        }
        tableBody.appendChild(tableRow);
        myTable.appendChild(tableBody);
    }
    myTable.appendChild(tableHead);
}
createTableProducts();
function addProductRow() {
    let myTableBody = document.querySelectorAll('tbody')[0];
    let newRow = document.createElement("tr");
    for (let key in products[0].getProduct()) {
        let td = document.createElement('td');
        newRow.appendChild(td);
    }
    myTableBody.appendChild(newRow);
}
addProductRow();