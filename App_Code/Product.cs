using System;
using System.Collections.Generic;
using System.Web;

public class Product
{
  public string ProductName { get; set;}
  public string ProductId { get; set;}
  public Product(string Name, string Id) {
    ProductName = Name;
    ProductId = Id;
  }
}
