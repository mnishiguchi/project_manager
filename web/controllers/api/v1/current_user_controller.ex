defmodule ProjectManager.CurrentUserController do
  use ProjectManager.Web, :controller

  # The Guardian.Plug.EnsureAuthenticated:
  # - checks if there is a previously verified token
  # - handles an invalid request with the unauthenticated function that we
  # define in SessionController.
  plug Guardian.Plug.EnsureAuthenticated, handler: ProjectManager.SessionController

  def show(conn, _) do
    user = Guardian.Plug.current_resource(conn)

    conn
    |> put_status(:ok)
    |> render("show.json", user: user)
  end
end
