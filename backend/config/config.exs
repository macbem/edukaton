# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :fake_internet,
  ecto_repos: [FakeInternet.Repo]

# Configures the endpoint
config :fake_internet, FakeInternetWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "YRxmtEAuMoANcGPLpCRcrdDLv049MQrj54T15PozXMNDEq4YbfyzdWZC1YtedXe+",
  render_errors: [view: FakeInternetWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: FakeInternet.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
