defmodule FakeInternet.AccountsTest do
  use FakeInternet.DataCase

  alias FakeInternet.Accounts

  describe "users" do
    alias FakeInternet.Accounts.User

    @valid_attrs %{email: "test@test.com", password: "123456"}
    @invalid_attrs %{email: "fail"}

    def user_fixture(attrs \\ %{}) do
      {:ok, user} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Accounts.create_user()
      user
    end

    test "create_user/1 with valid data creates a user" do
      assert {:ok, %User{} = user} = Accounts.create_user(@valid_attrs)
      assert user.email == "test@test.com"
      assert Comeonin.Bcrypt.checkpw("123456", user.encrypted_password)
      assert user.is_admin == false
      assert user.is_teacher == false
    end

    test "create_user/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Accounts.create_user(@invalid_attrs)
    end

    test "get_by_email_and_password/2" do
      user = user_fixture(@valid_attrs)
      assert {:error, "invalid password"} = Accounts. get_by_email_and_password(user.email, "test")
      assert {:ok, _} = Accounts.get_by_email_and_password(user.email, "123456")
    end
  end
end
