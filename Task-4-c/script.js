
function applyfilters()
{
    let category = document.getElementById('categoryfilter').value;
    let maxprice = document.getElementById('pricefilter').value;
    let products = document.querySelectorAll('.product');

    products.forEach(product => {
        let productcategory = product.getAttribute('data-category');
        let productprice = parseFloat(product.getAttribute('data-price'));
        
        if ((category === 'all' || productcategory === category) && 
            (maxprice === '' || productprice <= parseFloat(maxprice)))
        {
            product.style.display = 'block';
        }
        else
        {
            product.style.display = 'none';
        }
    });
}

function sortitems()
{
    let sortvalue = document.getElementById('sortrating').value;
    let productgrid = document.getElementById('productgrid');
    let products = Array.from(productgrid.children);
    
    products.sort((a, b) => {
        let ratingA = parseFloat(a.getAttribute('data-rating'));
        let ratingB = parseFloat(b.getAttribute('data-rating'));
        return sortvalue === 'high' ? ratingB - ratingA : ratingA - ratingB;
    });
    
    products.forEach(product => productgrid.appendChild(product));
}