defmodule ProjectManager.User do
  use ProjectManager.Web, :model

  # Here, we specify which fields we need to serialize.
  # Phoenix uses Poison as its default JSON library.
  @derive { Poison.Encoder, only: [:id, :first_name, :last_name, :email] }

  # All the metadata regarding table fields.
  schema "users" do
    field :first_name,      :string
    field :last_name,       :string
    field :email,           :string
    field :password_digest, :string
    field :password,        :string, virtual: true

    timestamps()
  end

  @required_fields [
    :first_name,
    :last_name,
    :email,
    :password
  ]
  @optional_fields [
    :password_digest
  ]

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, @required_fields, @optional_fields)
    |> validate_format(:email, ~r/@/)
    |> validate_length(:password, min: 5)
    |> validate_confirmation(:password, message: "Password does not match")
    |> unique_constraint(:email, message: "Email already taken")
    |> generate_password_digest
  end

  defp generate_password_digest(current_changeset) do
    case current_changeset do
      %Ecto.Changeset{ valid?: true, changes: %{password: password} } ->
        put_change(current_changeset, :password_digest,
                                      Comeonin.Bcrypt.hashpwsalt(password))
      _ ->
        current_changeset
    end
  end
end
