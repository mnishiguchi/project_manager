defmodule ProjectManager.RegistrationView do
  use ProjectManager.Web, :view

  def render("error.json", %{changeset: changeset}) do
    errors = Enum.map(changeset.errors, fn { field, detail } ->
      Map.put(%{}, field, render_detail(detail))
    end)

    %{ errors: errors }
  end

  defp reder_detail({message, values}) do
    # https://github.com/elixir-ecto/ecto/pull/921
    Enum.reduce(values, message, fn { k, v }, acc ->
      String.replace(acc, "%{#{k}}", to_string(v))
    end)
  end

  defp render_detail(message) do
    message
  end
end
