defmodule ProjectManager.Session do
  alias ProjectManager.{Repo, User}

  def authenticate(%{"email" => email, "password" => password}) do
    user = Repo.get_by(User, email: String.downcase(email))

    case check_password(user, password) do
      true -> {:ok, user}
      _    -> :error
    end
  end

  # Checks if the specified password matches the user's password_digest.
  defp check_password(user, password) do
    case user do
      nil -> false
      _   -> Comeonin.Bcrypt.checkpw(password, user.password_digest)
    end
  end

end
