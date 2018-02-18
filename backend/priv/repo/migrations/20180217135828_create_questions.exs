defmodule FakeInternet.Repo.Migrations.CreateQuestions do
  use Ecto.Migration

  def change do
    create table(:questions) do
      add :question, :text
      add :category_id, references(:categories, on_delete: :nothing)

      timestamps()
    end

    create index(:questions, [:category_id])
  end
end
