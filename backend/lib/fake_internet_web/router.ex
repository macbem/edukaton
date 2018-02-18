defmodule FakeInternetWeb.Router do
  use FakeInternetWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", FakeInternetWeb do
    pipe_through :browser

    scope "/admin" do
      get "/", Admin.PageController, :index
      resources "/categories", CategoryController
      resources "/questions", QuestionController
      resources "/users", Admin.UserController
      resources "/tests", Admin.TestController
    end
  end

  scope "/api", FakeInternetWeb.Api do
    pipe_through :api
    post "/sign_up", UserController, :sign_up
    post "/sign_in", UserController, :sign_in

    scope "/tests" do
      get "/", TestController, :index
      post "/create", TestController, :create
      get "/questions", QuestionController, :index
      get "/:test_id", TestController, :show
      post "/:test_id/submit", TestController, :submit
    end

    get "/categories", CategoryController, :index
  end
end
