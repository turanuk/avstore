/// <reference path="../Scripts/knockout-2.1.0.js" />
/// <reference path="../Scripts/jquery-1.7.2.js" />

ko.bindingHandlers.searchInput = {
  init: function (element, valueAccessor, allBindingsAccessor, model) {
    var viewModel = valueAccessor();
    $(element).click(function () {
      viewModel.search($('#searchInput').val());
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