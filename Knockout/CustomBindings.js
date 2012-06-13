/// <reference path="../Scripts/knockout-2.1.0.js" />
/// <reference path="../Scripts/jquery-1.7.2.js" />

ko.bindingHandlers.searchInputText = {
  init: function (element, valueAccessor, allBindingsAccessor, model) {
    var viewModel = valueAccessor();
    $(element).keypress(function (event) {
      if (event.which === 13) {
        var inputVal = $(element).val();
        if (inputVal) {
          viewModel.search(inputVal);
        } else {
          viewModel.error('Error: Blank search input. Please enter a search term.');
        }
      }
    });
  }
}

ko.bindingHandlers.searchInput = {
  init: function (element, valueAccessor, allBindingsAccessor, model) {
    var viewModel = valueAccessor();
    $(element).click(function () {
      var inputVal = $('#searchInput').val();
      if (inputVal) {
        viewModel.search(inputVal);
      } else {
        viewModel.error('Error: Blank search input. Please enter a search term.');
      }
    });
  }
}

ko.bindingHandlers.viewProduct = {
  init: function (element, valueAccessor, allBindingsAccessor, model) {
    var viewModel = valueAccessor();
    $(element).click(function () {
      viewModel.viewProduct(model.ProductId);
    });
  }
}