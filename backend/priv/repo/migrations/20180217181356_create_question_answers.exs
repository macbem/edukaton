defmodule FakeInternet.Repo.Migrations.CreateQuestionAnswers do
  use Ecto.Migration

  def change do
    create table(:question_answers) do
      add :label, :string
      add :is_correct, :boolean, default: false, null: false
      add :question_id, references(:questions, on_delete: :nothing)

      timestamps()
    end

    create index(:question_answers, [:question_id])
  end
end
