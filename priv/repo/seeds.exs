# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     ProjectManager.Repo.insert!(%ProjectManager.SomeModel{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

alias ProjectManager.{Repo, User}

[
  %{
    first_name: "User",
    last_name:  "Example",
    email:      "user@example.com",
    password:   "password"
  },
]
|> Enum.map(&User.changeset(%User{}, &1))
|> Enum.each(&Repo.insert!(&1))
