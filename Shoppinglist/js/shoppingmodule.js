shoppingmodule = (function () {

    var itemarray = [];

    function addItem(itemName) {
        var item = new ShoppingItem(itemName);
        itemarray.push(item);
        return item;
    };

    function getItems() {
        return itemarray;
    }

    function removeItem(name) {
        for (var i = 0; i < itemarray.length; i++) {
            if (itemarray[i].getName() == name) {
                itemarray.splice(i, 1);
            }
        }
    }

    return {
        addItem: addItem,
        getItems: getItems,
        removeItem: removeItem
    };

})();