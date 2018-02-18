defmodule FakeInternet.Repo.Migrations.CreateTestSubmissionAnswers do
  use Ecto.Migration

  def change do
    create table(:test_submission_answers) do
      add :test_submission_id, references(:test_submissions, on_delete: :nothing)
      add :question_id, references(:questions, on_delete: :nothing)
      add :answer_id, references(:question_answers, on_delete: :nothing)

      timestamps()
    end

    create index(:test_submission_answers, [:test_submission_id])
    create index(:test_submission_answers, [:question_id])
    create index(:test_submission_answers, [:answer_id])
  end
end
