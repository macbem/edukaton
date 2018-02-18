defmodule FakeInternet.Accounts.User do
  use Ecto.Schema
  import Ecto.Changeset
  alias FakeInternet.Accounts.User


  schema "users" do
    field :email, :string
    field :encrypted_password, :string
    field :password, :string, virtual: true
    field :is_admin, :boolean, default: false
    field :is_teacher, :boolean, default: false

    timestamps()
  end

  @doc false
  def changeset(%User{} = user, attrs, required_fields \\ []) do
    user
    |> cast(attrs, [:email, :password, :is_teacher, :is_admin])
    |> validate_required([:email] ++ required_fields)
    |> unique_constraint(:email)
    |> validate_format(:email, ~r/@/)
    |> validate_length(:password, min: 5)
    |> put_pass_hash()
  end

  defp put_pass_hash(%Ecto.Changeset{valid?: true, changes: %{password: password}} = changeset) do
    change(changeset, Comeonin.Bcrypt.add_hash(password, hash_key: :encrypted_password))
  end
  defp put_pass_hash(changeset), do: changeset
end
