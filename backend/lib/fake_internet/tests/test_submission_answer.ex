defmodule FakeInternet.Tests.TestSubmissionAnswer do
  use Ecto.Schema
  import Ecto.Changeset
  alias FakeInternet.Tests.TestSubmissionAnswer


  schema "test_submission_answers" do
    field :test_submission_id, :id
    field :question_id, :id
    field :answer_id, :id

    timestamps()
  end

  @doc false
  def changeset(%TestSubmissionAnswer{} = test_submission_answer, attrs) do
    test_submission_answer
    |> cast(attrs, [:test_submission_id, :answer_id, :question_id])
    |> validate_required([:answer_id, :question_id])
  end
end
