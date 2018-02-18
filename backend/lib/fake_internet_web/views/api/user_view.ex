defmodule FakeInternetWeb.Api.UserView do
  use FakeInternetWeb, :view
  alias FakeInternetWeb.UserView

  def render("index.json", %{users: users}) do
    %{data: render_many(users, UserView, "user.json")}
  end

  def render("show.json", %{user: user}) do
    %{data: render_one(user, UserView, "user.json")}
  end

  def render("user.json", %{user: user}) do
    %{id: user.id,
      email: user.email,
      is_teacher: user.is_teacher,
      is_admin: user.is_admin}
  end
end
