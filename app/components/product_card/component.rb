class ProductCard::Component < ViewComponent::Base
  def initialize(product:)
    @product = product
  end
end