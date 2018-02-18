defmodule FakeInternet.Repo.Migrations.AddQuestionIdsToTest do
  use Ecto.Migration

  def change do
    alter table(:tests) do
      add :question_ids, {:array, :integer}, default: []
    end
  end
end
