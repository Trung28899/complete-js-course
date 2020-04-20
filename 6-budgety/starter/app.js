// DATA MODULE
// function got assigned to budgetController as an Object
// this is the practice of closure
var budgetController = (function() {
  // Function constructor for expense object
  var Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  // Function constructor for income object
  var Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  // create a data structure that stores
  // all expenses and income with total expenses and incomes
  var data = {
    allItems: {
      exp: [],
      inc: []
    },

    total: {
      exp: 0,
      inc: 0
    }
  };

  return {
    addItem: function(type, description, value) {
      var newItem;

      // Create new ID
      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        ID = 0;
      }

      // Create new item based on 'inc' or 'exp' type
      if (type === "exp") {
        newItem = new Expense(ID, description, value);
      } else if (type === "inc") {
        newItem = new Income(ID, description, value);
      }

      // push() add new element at the end of the array
      data.allItems[type].push(newItem);

      // return the new element
      return newItem;
    },

    testing: function() {
      console.log(data);
    }
  };
})();

// UI MODULE:
var UIcontroller = (function() {
  var DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputButton: ".add__btn"
  };
  return {
    getinput: function() {
      // Returning the object with the following fields
      return {
        // type will be either 'inc' or 'exp' based on html
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      };
    },

    getDOMstrings: function() {
      return DOMstrings;
    }
  };
})();

// CONTROLLER MODULE:
var controller = (function(budgetCtrl, UICtrl) {
  //
  //
  var setupEventListeners = function() {
    // getting the DOM string from UIController
    var DOM = UICtrl.getDOMstrings();

    document
      .querySelector(DOM.inputButton)
      .addEventListener("click", ctrlAddItem);

    document.addEventListener("keypress", function(event) {
      // you can search for 'key code for ...'
      // This is the key code for enter
      if (event.keyCode === 13) {
        ctrlAddItem();
      }
    });
  };

  var ctrlAddItem = function() {
    var input, newItem;
    // 1. Get the field input data
    input = UICtrl.getinput();
    // 2. Add the item to the budget controller
    newItem = budgetCtrl.addItem(input.type, input.description, input.value);
    // 3. Add the item to the UI
    // 4. Calculate the budget
    // 5. Display budget on the UI
  };

  return {
    init: function() {
      console.log("Application has started");
      setupEventListeners();
    }
  };
})(budgetController, UIcontroller);

// initialization code
controller.init();
