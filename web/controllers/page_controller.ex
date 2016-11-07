defmodule ProjectManager.PageController do
  use ProjectManager.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
