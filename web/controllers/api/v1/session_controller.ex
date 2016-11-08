defmodule ProjectManager.SessionController do
  use ProjectManager.Web, :controller

  plug :scrub_params, "session" when action in [:create]

  def create(conn, %{ "session" => session_params }) do
    # Use the ProjectManager.Session helper module to authenticate the user with
    # the parameters that we are receiving.
    case ProjectManager.Session.authenticate(session_params) do
      {:ok, user} ->
        {:ok, jwt, _full_claims} = user |> Guardian.encode_and_sign(:token)

        conn
        |> put_status(:created)
        |> render("show.json", jwt: jwt, user: user)

      :error ->
        conn
        |> put_status(:unprocessable_entity)
        |> render("error.json")
    end # case
  end # def

  def delete(conn, _) do
    {:ok, claims} = Guardian.Plug.claims(conn)

    conn
    |> Guardian.Plug.current_token
    |> Guardian.revoke!(claims)

    conn
    |> render("delete.json")
  end

  # Invoked by Guardian.Plug.EnsureAuthenticated when it handles an invalid request.
  def unauthenticated(conn, _params) do
    conn
    |> put_status(:forbidden)
    |> render(ProjectManager.SessionView, "forbidden.json", errors: "Not authenticated")
  end
end # defmodule
