# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :project_manager,
  ecto_repos: [
    ProjectManager.Repo
  ]

# Configures the endpoint
config :project_manager, ProjectManager.Endpoint,
  url: [
    host: "localhost"
  ],
  secret_key_base: "+5BXgL/Z3uaViPU03CJku7W9T5VKejvyPpPnBmNRY7UkZ8W6NHl1u+ofuYWjSYUu",
  render_errors: [
    view:    ProjectManager.ErrorView,
    accepts: ~w(html json)
  ],
  pubsub: [
    name:    ProjectManager.PubSub,
    adapter: Phoenix.PubSub.PG2
  ]

# Configures Elixir's Logger
config :logger, :console,
  format:   "$time $metadata[$level] $message\n",
  metadata: [
    :request_id
  ]

# Configure authentication requirements
# https://github.com/ueberauth/guardian
config :guardian, Guardian,
  issuer: "ProjectManager",
  ttl: { 3, :days },
  verify_issuer: true,
  # https://github.com/ueberauth/guardian/issues/152
  allowed_algos: ["HS256"],
  secret_key: %{ "k" => "Nb7KsmHglkEVAqWjxpCG0A", "kty" => "oct" },
  serializer: ProjectManager.GuardianSerializer

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
