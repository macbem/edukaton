defmodule FakeInternetWeb.Api.CategoryController do
  use FakeInternetWeb, :controller
  alias FakeInternet.Categories

  action_fallback FakeInternetWeb.FallbackController

  def index(conn, _params) do
    render(conn, "index.json", categories: Categories.list_categories())
  end
end
