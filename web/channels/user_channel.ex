# This channel will allow us to broadcast any user related message from anywhere.
defmodule ProjectManager.UserChannel do
  use ProjectManager.Web, :channel

  def join("users:" <> user_id, _params, socket) do
    {:ok, socket}
  end
end
