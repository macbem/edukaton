defmodule FakeInternet.Tests.Test do
  use Ecto.Schema
  import Ecto.Changeset
  alias FakeInternet.Tests.{Test, TestSubmission}


  schema "tests" do
    field :name, :string
    field :user_id, :id
    field :question_ids, {:array, :integer}
    has_many :submissions, TestSubmission

    timestamps()
  end

  @doc false
  def changeset(%Test{} = test, attrs) do
    test
    |> cast(attrs, [:name, :user_id, :question_ids])
    |> validate_required([:name, :user_id, :question_ids])
  end
end
