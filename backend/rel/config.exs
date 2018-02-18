use Mix.Releases.Config,
    # This sets the default release built by `mix release`
    default_release: :default,
    # This sets the default environment used by `mix release`
    default_environment: :dev

# For a full list of config options for both releases
# and environments, visit https://hexdocs.pm/distillery/configuration.html


# You may define one or more environments in this file,
# an environment's settings will override those of a release
# when building in that environment, this combination of release
# and environment configuration is called a profile

environment :dev do
  set dev_mode: true
  set include_erts: false
  set cookie: :"p%A>8WS4B7P4Z}D[3%@?e(4c]<!::`HEGex0ZsS=&(>R7P,T4{d(Rxmp%bSgK:@:"
end

environment :prod do
  set include_erts: true
  set include_src: false
  set cookie: :"jX]O(M[lm]GP*@5cjqlLZvuV!^nVo~IaSW=EGOXL2PzQ?3k,_!qF>{uSyf!]1i8V"
end

# You may define one or more releases in this file.
# If you have not set a default release, or selected one
# when running `mix release`, the first release in the file
# will be used by default

release :fake_internet do
  set version: current_version(:fake_internet)
end

