defmodule ProjectManager.Router do
  use ProjectManager.Web, :router

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

  scope "/", ProjectManager do
    pipe_through :browser # Use the default browser stack

    # Handle any http request through the index action of the PageController
    # which will just render the main layout and our Root component.
    get "/*path", PageController, :index
  end

  # Other scopes may use custom stacks.
  # scope "/api", ProjectManager do
  #   pipe_through :api
  # end
end
