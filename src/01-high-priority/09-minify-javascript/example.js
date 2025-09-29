// Example JavaScript file for minification demo
function calculateTotal(items) {
    var total = 0;
    
    for (var i = 0; i < items.length; i++) {
        total = total + items[i].price;
    }
    
    return total;
}

function formatCurrency(amount) {
    return "$" + amount.toFixed(2);
}

function processOrder(order) {
    var items = order.items;
    var total = calculateTotal(items);
    
    if (order.discount > 0) {
        total = total - (total * order.discount);
    }
    
    return {
        total: total,
        formatted: formatCurrency(total),
        itemCount: items.length
    };
}
