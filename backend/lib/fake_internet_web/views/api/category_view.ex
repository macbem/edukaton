defmodule FakeInternetWeb.Api.CategoryView do
  use FakeInternetWeb, :view
  alias FakeInternetWeb.Api.CategoryView

  def render("index.json", %{categories: categories}) do
    %{data: render_many(categories, CategoryView, "category.json")}
  end

  def render("category.json", %{category: category}) do
    %{
      id: category.id,
      title: category.title
    }
  end
end
