defmodule FakeInternet.Tests.TestSubmission do
  use Ecto.Schema
  import Ecto.Changeset
  alias FakeInternet.Tests.{Test, TestSubmission, TestSubmissionAnswer}


  schema "test_submissions" do
    field :user_id, :id
    field :test_id, :id
    has_many :answers, TestSubmissionAnswer

    timestamps()
  end

  @doc false
  def changeset(%TestSubmission{} = test_submission, attrs) do
    test_submission
    |> cast(attrs, [:test_id, :user_id])
    |> cast_assoc(:answers, required: true)
    |> validate_required([:test_id, :user_id])
  end
end
