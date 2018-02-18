defmodule FakeInternetWeb.FallbackController do
  @moduledoc """
  Translates controller action results into valid `Plug.Conn` responses.

  See `Phoenix.Controller.action_fallback/1` for more details.
  """
  use FakeInternetWeb, :controller

  def call(conn, {:error, %Ecto.Changeset{} = changeset}) do
    conn
    |> put_status(:unprocessable_entity)
    |> render(FakeInternetWeb.ChangesetView, "error.json", changeset: changeset)
  end

  def call(conn, {:error, :not_found}) do
    conn
    |> put_status(:not_found)
    |> render(FakeInternetWeb.ErrorView, :"404")
  end

  def call(conn, {:error, message}) do
    conn
    |> put_status(:bad_request)
    |> json(%{error: message})
  end
end
