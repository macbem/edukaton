defmodule FakeInternetWeb.Admin.TestController do
  use FakeInternetWeb, :controller

  alias FakeInternet.Tests
  alias FakeInternet.Tests.Test
  alias FakeInternet.Accounts
  alias FakeInternet.Questions

  def index(conn, _params) do
    tests = Tests.list_tests()
    render(conn, "index.html", tests: tests)
  end

  def new(conn, _params) do
    render(conn, "new.html",
      questions: Questions.list_questions(),
      changeset: Tests.change_test(%Test{}),
      users: Accounts.list_users()
    )
  end

  def create(conn, %{"test" => test_params}) do
    case Tests.create_test(test_params) do
      {:ok, test} ->
        conn
        |> put_flash(:info, "Test created successfully.")
        |> redirect(to: test_path(conn, :show, test))
      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "new.html",
          questions: Questions.list_questions(),
          changeset: changeset,
          users: Accounts.list_users()
        )
    end
  end

  def show(conn, %{"id" => id}) do
    test = Tests.get_test!(id)
    render(conn, "show.html",
      questions: Questions.list_questions(),
      test: test
    )
  end

  def edit(conn, %{"id" => id}) do
    test = Tests.get_test!(id)

    render(conn, "edit.html",
      test: test,
      questions: Questions.list_questions(),
      changeset: Tests.change_test(test),
      users: Accounts.list_users()
    )
  end

  def update(conn, %{"id" => id, "test" => test_params}) do
    test = Tests.get_test!(id)

    case Tests.update_test(test, test_params) do
      {:ok, test} ->
        conn
        |> put_flash(:info, "Test updated successfully.")
        |> redirect(to: test_path(conn, :show, test))
      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "edit.html",
          test: test,
          changeset: changeset,
          questions: Questions.list_questions(),
          users: Accounts.list_users()
        )
    end
  end

  def delete(conn, %{"id" => id}) do
    test = Tests.get_test!(id)
    {:ok, _test} = Tests.delete_test(test)

    conn
    |> put_flash(:info, "Test deleted successfully.")
    |> redirect(to: test_path(conn, :index))
  end
end
