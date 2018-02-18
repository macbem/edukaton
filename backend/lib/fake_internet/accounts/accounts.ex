defmodule FakeInternet.Accounts do
  import Ecto.Query, warn: false
  alias FakeInternet.Repo

  alias FakeInternet.Accounts.User

  #
  #   CRUD
  #
  def list_users do
    Repo.all(User)
  end

  def get_user!(id), do: Repo.get!(User, id)

  def create_user(attrs \\ %{}) do
    %User{}
    |> User.changeset(attrs)
    |> Repo.insert()
  end

  def update_user(%User{} = user, attrs) do
    user
    |> User.changeset(attrs)
    |> Repo.update()
  end

  def delete_user(%User{} = user) do
    Repo.delete(user)
  end

  def change_user(%User{} = user) do
    User.changeset(user, %{})
  end

  #
  #   Auth
  #
  def sign_up_user(attrs \\ %{}) do
    %User{}
    |> User.changeset(attrs, [:password])
    |> Repo.insert()
  end

  def get_by_email_and_password(email, password) do
    User
    |> Repo.get_by(email: email)
    |> Comeonin.Bcrypt.check_pass(password, hash_key: :encrypted_password)
  end
end
