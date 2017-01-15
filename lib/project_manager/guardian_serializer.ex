defmodule ProjectManager.GuardianSerializer do
  @behaviour Guardian.Serializer

  alias ProjectManager.{Repo, User}

  # Tell Guardian how to encode and decode the user into and out of the token.
  # https://github.com/ueberauth/guardian#serializer
  def for_token(user = %User{}), do: { :ok, "User:#{user.id}" }
  def for_token(_),              do: { :error, "Unknown resource type" }

  def from_token("User:" <> id), do: { :ok, Repo.get(User, String.to_integer(id)) }
  def from_token(_),             do: { :error, "Unknown resource type" }
end
