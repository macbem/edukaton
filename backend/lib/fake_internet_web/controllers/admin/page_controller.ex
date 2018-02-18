defmodule FakeInternetWeb.Admin.PageController do
  use FakeInternetWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
