defmodule FakeInternetWeb.Api.TestController do
  use FakeInternetWeb, :controller
  alias FakeInternet.Tests
  alias FakeInternet.Tests.{Test, TestSubmission}

  action_fallback FakeInternetWeb.FallbackController

  def index(conn, _params) do
    [authorization_header] = get_req_header(conn, "authorization")
    authorization_token = String.replace(authorization_header, "Bearer ", "")

    case Phoenix.Token.verify(conn, "user_token", authorization_token) do
      {:ok, user_id} ->
        render(conn, "index.json", tests: Tests.list_user_tests(user_id))
      {:error, _} ->
        conn
        |> put_status(:bad_request)
        |> json(%{error: "Invalid user"})
    end
  end


  def show(conn, %{"test_id" => test_id}) do
    render(conn, "test.json",
      test: Tests.get_test!(test_id)
    )
  end


  def create(conn, test_params) do
    [authorization_header] = get_req_header(conn, "authorization")
    authorization_token = String.replace(authorization_header, "Bearer ", "")

    # TODO: Multiline with??
    with {:ok, user_id} <- Phoenix.Token.verify(conn, "user_token", authorization_token),
         {:ok, %Test{} = test} <- Map.merge(test_params, %{"user_id" => user_id}) |> Tests.create_test do
      render(conn, "test.json", test: test)
    end
  end


  def submit(conn, submission_params) do
    [authorization_header] = get_req_header(conn, "authorization")
    authorization_token = String.replace(authorization_header, "Bearer ", "")

    with {:ok, user_id} <- Phoenix.Token.verify(conn, "user_token", authorization_token),
         {:ok, %TestSubmission{} = submission} <- Map.merge(submission_params, %{"user_id" => user_id}) |> Tests.submit_test,
         %Test{} = test <- Tests.get_test!(submission_params["test_id"])
    do
      render(conn, "test_submission.json", test: test, submission: submission)
    end
  end
end
