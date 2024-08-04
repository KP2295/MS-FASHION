//  document.addEventListener('DOMContentLoaded', () => {
//     const menProducts = document.getElementById('men-products');
//     const womenProducts = document.getElementById('women-products');

//     const products = [
//         {
//             id: 1,
//             name: 'Men T-Shirt',
//             category: 'men',
//             price: '20 USD',
//             photos: [
//                 'aseets/Screenshot (1).png',
//                 'aseets/Screenshot 2024-04-03 114207.png',
//                 'photo3.jpg'
//             ]
//         },
//         {
//             id: 2,
//             name: 'Women Dress',
//             category: 'women',
//             price: '50 USD',
//             photos: [
                
//             ]
//         }
//     ];

//     products.forEach(product => {
//         addProductToPage(product);
//     });

//     function addProductToPage(product) {
//         const productDiv = document.createElement('div');
//         productDiv.className = 'product';
//         productDiv.innerHTML = `
//             <h3>${product.name}</h3>
//             <img src="${product.photos[0]}" alt="${product.name}">
//             <p>Price: ${product.price}</p>
//             <a href="product.html?id=${product.id}">View Details</a>
//             <button onclick="sendInquiry(${product.id})">WhatsApp Inquiry</button>
//         `;

//         if (product.category === 'men') {
//             menProducts.appendChild(productDiv);
//         } else {
//             womenProducts.appendChild(productDiv);
//         }
//     }

//     window.sendInquiry = function(productId) {
//         const product = products.find(p => p.id === productId);
//         const phoneNumber =+918469693771; // Replace with your WhatsApp number
//         const message = `I'm interested in the product:\n\nName: ${product.name}\nPrice: ${product.price}\nCategory: ${product.category}`;
//         const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
//         window.open(url, '_blank');
//     };
// });
document.addEventListener('DOMContentLoaded', () => {
    const menProducts = document.getElementById('men-products');
    const womenProducts = document.getElementById('women-products');

    const products = [
        {
            id: 1,
            name: 'Men T-Shirt',
            category: 'men',
            price: '20 USD',
            size: 'M',
            code:'32',
            description: 'Comfortable and stylish T-Shirt for men.',
            photos: [
              
            ]
        },
        {
            id: 2,
            name: 'Women Dress',
            category: 'women',
            price: '50 USD',
            size: 'L',
            code:'32',
            description: 'Elegant and beautiful dress for women.',
            photos: []
        },
        // Removed duplicate products with same ID for clarity
        {
            id: 4,
            name: 'Men T-Shirt',
            category: 'men',
            price: '20 USD',
            size: 'M',
            code:'32',
            description: 'Comfortable and stylish T-Shirt for men.',
            photos: [
              
            ]
        }
    ];

    products.forEach(product => {
        addProductToPage(product);
    });

    function addProductToPage(product) {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <img src="${product.photos[0] || 'default-image.jpg'}" alt="${product.name}">
            <p>Price: ${product.price}</p>
            <p>Size: ${product.size}</p>
            <p>Description: ${product.description}</p>
            <a href="product.html?id=${product.id}">View Details</a>
            <button onclick="sendInquiry(${product.id})">WhatsApp Inquiry</button>
        `;

        if (product.category === 'men') {
            menProducts.appendChild(productDiv);
        } else {
            womenProducts.appendChild(productDiv);
        }
    }

    window.sendInquiry = function(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) {
            alert('Product not found!');
            return;
        }
        
        const phoneNumber = '916351261634'; // Ensure this is correct
        const message = `I'm interested in the product:\n\nName: ${product.name}\nPrice: ${product.price}\nCategory: ${product.category}`;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        
        try {
            window.open(url, '_blank');
        } catch (error) {
            console.error('Failed to open WhatsApp link:', error);
            alert('Unable to open WhatsApp. Please try again later.');
        }
    };
});

