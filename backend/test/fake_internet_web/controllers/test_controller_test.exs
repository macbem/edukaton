defmodule FakeInternetWeb.TestControllerTest do
  use FakeInternetWeb.ConnCase

  alias FakeInternet.Tests

  @create_attrs %{name: "some name"}
  @update_attrs %{name: "some updated name"}
  @invalid_attrs %{name: nil}

  def fixture(:test) do
    {:ok, test} = Tests.create_test(@create_attrs)
    test
  end

  describe "index" do
    test "lists all tests", %{conn: conn} do
      conn = get conn, test_path(conn, :index)
      assert html_response(conn, 200) =~ "Listing Tests"
    end
  end

  describe "new test" do
    test "renders form", %{conn: conn} do
      conn = get conn, test_path(conn, :new)
      assert html_response(conn, 200) =~ "New Test"
    end
  end

  describe "create test" do
    test "redirects to show when data is valid", %{conn: conn} do
      conn = post conn, test_path(conn, :create), test: @create_attrs

      assert %{id: id} = redirected_params(conn)
      assert redirected_to(conn) == test_path(conn, :show, id)

      conn = get conn, test_path(conn, :show, id)
      assert html_response(conn, 200) =~ "Show Test"
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post conn, test_path(conn, :create), test: @invalid_attrs
      assert html_response(conn, 200) =~ "New Test"
    end
  end

  describe "edit test" do
    setup [:create_test]

    test "renders form for editing chosen test", %{conn: conn, test: test} do
      conn = get conn, test_path(conn, :edit, test)
      assert html_response(conn, 200) =~ "Edit Test"
    end
  end

  describe "update test" do
    setup [:create_test]

    test "redirects when data is valid", %{conn: conn, test: test} do
      conn = put conn, test_path(conn, :update, test), test: @update_attrs
      assert redirected_to(conn) == test_path(conn, :show, test)

      conn = get conn, test_path(conn, :show, test)
      assert html_response(conn, 200) =~ "some updated name"
    end

    test "renders errors when data is invalid", %{conn: conn, test: test} do
      conn = put conn, test_path(conn, :update, test), test: @invalid_attrs
      assert html_response(conn, 200) =~ "Edit Test"
    end
  end

  describe "delete test" do
    setup [:create_test]

    test "deletes chosen test", %{conn: conn, test: test} do
      conn = delete conn, test_path(conn, :delete, test)
      assert redirected_to(conn) == test_path(conn, :index)
      assert_error_sent 404, fn ->
        get conn, test_path(conn, :show, test)
      end
    end
  end

  defp create_test(_) do
    test = fixture(:test)
    {:ok, test: test}
  end
end
