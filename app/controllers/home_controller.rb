class HomeController < ApplicationController
  def index
    @products = find_all()
  end

  private
  def find_all
    [
      {
        name: "Camera",
        image_url: "/images/product01.jpg",
        description: "Uma camera legal..."
      },
      {
        name: "Vaso",
        image_url: "/images/product02.jpg",
        description: "Um vaso legal..."
      },
      {
        name: "Óculos",
        image_url: "/images/product03.jpg",
        description: "Um Óculos legal..."
      },
      {
        name: "Carro",
        image_url: "/images/product04.jpg",
        description: "Um carro legal..."
      },
      {
        name: "Banco",
        image_url: "/images/product05.jpg",
        description: "Um banco legal..."
      }
    ]
  end
end