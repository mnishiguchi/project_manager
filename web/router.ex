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

    # Looks for the token in the Authorization header.
    plug Guardian.Plug.VerifyHeader

    # Makes the current resource available through Guardian.Plug.current_resource(conn)
    # if the token is present.
    plug Guardian.Plug.LoadResource
  end

  scope "/api", ProjectManager do
    pipe_through :api

    scope "/v1" do
      post "/registrations", RegistrationController, :create

      post "/sessions", SessionController, :create
      delete "/sessions", SessionController, :delete

      get "/current_user", CurrentUserController, :show
    end
  end

  scope "/", ProjectManager do
    pipe_through :browser # Use the default browser stack

    # Handle any http request through the index action of the PageController
    # which will just render the main layout and our Root component.
    get "/*path", PageController, :index
  end
end
