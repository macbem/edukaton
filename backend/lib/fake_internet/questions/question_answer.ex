defmodule FakeInternet.Questions.QuestionAnswer do
  use Ecto.Schema
  import Ecto.Changeset
  alias FakeInternet.Questions.{QuestionAnswer, Question}


  schema "question_answers" do
    field :is_correct, :boolean, default: false
    field :label, :string
    field :delete, :boolean, virtual: true
    belongs_to :question, Question

    timestamps()
  end

  @doc false
  def changeset(%QuestionAnswer{} = question_answer, attrs) do
    question_answer
    |> cast(attrs, [:label, :is_correct, :question_id])
    |> set_delete_action
    |> validate_required([:label, :is_correct])
    |> foreign_key_constraint(:question_id)
  end

  defp set_delete_action(changeset) do
    if get_change(changeset, :delete) do
      %{changeset | action: :delete}
    else
      changeset
    end
  end
end
