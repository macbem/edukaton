defmodule FakeInternet.Repo.Migrations.AddImageToQuestion do
  use Ecto.Migration

  def change do
    alter table(:questions) do
      add :image, :string
    end
  end
end
