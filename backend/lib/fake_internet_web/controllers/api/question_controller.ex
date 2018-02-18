defmodule FakeInternetWeb.Api.QuestionController do
  use FakeInternetWeb, :controller
  alias FakeInternet.Questions

  action_fallback FakeInternetWeb.FallbackController

  def index(conn, _params) do
    render(conn, "index.json", questions: Questions.list_questions())
  end
end
