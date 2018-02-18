defmodule FakeInternetWeb.Api.UserController do
  use FakeInternetWeb, :controller

  alias FakeInternet.Accounts
  alias FakeInternet.Accounts.User

  action_fallback FakeInternetWeb.FallbackController

  def sign_up(conn, user_params) do
    with {:ok, %User{} = user} <- Accounts.sign_up_user(user_params) do
      reply_with_token(conn, user)
    end
  end

  def sign_in(conn, %{"email" => email, "password" => password}) do
    case Accounts.get_by_email_and_password(email, password) do
      {:ok, %User{} = user} -> reply_with_token(conn, user)
      {:error, _} ->
        conn
        |> put_status(:bad_request)
        |> json(%{error: "Invalid email or password"})
    end
  end

  # TODO: View
  defp reply_with_token(conn, user) do
    json(conn, %{
      token: Phoenix.Token.sign(conn, "user_token", user.id),
      is_teacher: user.is_teacher
    })
  end
end
