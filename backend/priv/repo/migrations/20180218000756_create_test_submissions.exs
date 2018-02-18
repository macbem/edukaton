defmodule FakeInternet.Repo.Migrations.CreateTestSubmissions do
  use Ecto.Migration

  def change do
    create table(:test_submissions) do
      add :user_id, references(:users, on_delete: :nothing)
      add :test_id, references(:tests, on_delete: :nothing)

      timestamps()
    end

    create index(:test_submissions, [:user_id])
    create index(:test_submissions, [:test_id])
  end
end
