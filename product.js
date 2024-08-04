document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");
  const productDetails = document.getElementById("product-details");

  const products = [
      {
          id: 1,
          name: 'Men T-Shirt',
          category: 'men',
          price: '20 USD',
          size: 'M',
          code: '32',
          description: 'Comfortable and stylish T-Shirt for men.',
          photos: [] // No photos
      },
      {
          id: 2,
          name: 'Women Dress',
          category: 'women',
          price: '50 USD',
          size: 'L',
          code: '32',
          description: 'Elegant and beautiful dress for women.',
          photos: [] // No photos
      },
      {
          id: 4,
          name: 'Men T-Shirt',
          category: 'men',
          price: '20 USD',
          size: 'M',
          code: '32',
          description: 'Comfortable and stylish T-Shirt for men.',
          photos: [] // No photos
      }
  ];

  // Log the productId and products array to debug
  console.log('Product ID:', productId);
  console.log('Products:', products);

  // Convert productId to number for comparison
  const product = products.find(p => p.id === Number(productId));

  if (product) {
      // Check if photos exist
      const photoElements = product.photos.length > 0
          ? product.photos.map(photo => `<img src="${photo}" alt="${product.name}">`).join('')
          : '<p>No photos available</p>';

      productDetails.innerHTML = `
          <h2>${product.name}</h2>
          <p>Category: ${product.category}</p>
          <p>Price: ${product.price}</p>
          <p>Size: ${product.size || 'N/A'}</p>
          <p>Description: ${product.description}</p>
          <div class="photos">
              ${photoElements}
          </div>
          <button onclick="sendInquiry(${product.id})">WhatsApp Inquiry</button>
      `;
  } else {
      productDetails.innerHTML = `<p>Product not found.</p>`;
  }

  window.sendInquiry = function (productId) {
      const product = products.find(p => p.id === Number(productId));
      if (!product) {
          alert('Product not found!');
          return;
      }

      const phoneNumber = +916351261634; // Ensure this is correct
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
