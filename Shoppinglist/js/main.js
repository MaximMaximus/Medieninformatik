var main = (function () {

    function init() {
        var button = document.getElementById("add_item_button");
        button.addEventListener("click", addItemToList);
        var inputContainer = document.getElementById("item_input");
        inputContainer.addEventListener("keypress", function (e) {
            var key = e.which || e.keyCode;
            if (key === 13) {
                addItemToList();
            }
        });
    }

    function addItemToList() {
        var inputField = document.getElementById("item_input");
        var itemName = inputField.value;
        var itemList = document.getElementById("item_list");

        if (itemName != "") {
            inputField.value = "";

            shoppingmodule.addItem(itemName);

            clearList(itemList);
            updateList(itemList, shoppingmodule.getItems());
        }
    }

    function clearList(items) {
        while (items.firstChild) {
            items.removeChild(items.firstChild);
        }
    }

    function updateList(list, arrayList) {
        for (var i = 0; i < arrayList.length; i++) {
            var name = arrayList[i].toString();

            //var liElement = document.createElement("li");
            //liElement.classList.add('data-name=' + name);
            //liElement.innerHTML = arrayList[i].toString();
            //liElement.addEventListener("click", removeItem);
            //list.appendChild(liElement);

            node = Node.fromString("<li data-name='" + name + "'>" + name + "</li>");
            node.addEventListener("click", removeItem);
            list.appendChild(node);
        }
    }

    function removeItem(event) {
        var item = event.target.dataset.name;
        shoppingmodule.removeItem(item);
        var htmlList = document.getElementById("item_list");
        htmlList.removeChild(event.target);
    }

    return {
        init: init
    };

})();
