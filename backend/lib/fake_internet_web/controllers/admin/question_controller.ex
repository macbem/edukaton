defmodule FakeInternetWeb.QuestionController do
  use FakeInternetWeb, :controller

  alias FakeInternet.Questions
  alias FakeInternet.Questions.{Question, QuestionAnswer}
  alias FakeInternet.Categories

  def index(conn, _params) do
    questions = Questions.list_questions()
    render(conn, "index.html", questions: questions)
  end


  def new(conn, _params) do
    changeset = Questions.change_question(%Question{
      answers: [
        %QuestionAnswer{},
        %QuestionAnswer{},
        %QuestionAnswer{},
        %QuestionAnswer{},
        %QuestionAnswer{}
      ]
    })

    render(conn, "new.html",
      changeset: changeset,
      categories: Categories.list_categories()
    )
  end


  def create(conn, %{"question" => question_params}) do
    filtered_params = clear_params(question_params)

    case Questions.create_question(filtered_params) do
      {:ok, question} ->
        conn
        |> put_flash(:info, "Question created successfully.")
        |> redirect(to: question_path(conn, :show, question))
      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "new.html",
          changeset: changeset,
          categories: Categories.list_categories()
        )
    end
  end


  def show(conn, %{"id" => id}) do
    question = Questions.get_question!(id)
    render(conn, "show.html", question: question)
  end


  def edit(conn, %{"id" => id}) do
    question = Questions.get_question!(id)
    changeset = Questions.change_question(question)

    updated_question = Map.merge(question, %{
      answers: [
        Enum.at(question.answers, 0) || %QuestionAnswer{},
        Enum.at(question.answers, 1) || %QuestionAnswer{},
        Enum.at(question.answers, 2) || %QuestionAnswer{},
        Enum.at(question.answers, 3) || %QuestionAnswer{},
        Enum.at(question.answers, 4) || %QuestionAnswer{},
      ]
    })

    render(conn, "edit.html",
      question: updated_question,
      changeset: Questions.change_question(updated_question),
      categories: Categories.list_categories()
    )
  end


  def update(conn, %{"id" => id, "question" => question_params}) do
    question = Questions.get_question!(id)
    filtered_params = clear_params(question_params)

    case Questions.update_question(question, filtered_params) do
      {:ok, question} ->
        conn
        |> put_flash(:info, "Question updated successfully.")
        |> redirect(to: question_path(conn, :show, question))
      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "edit.html",
          question: question,
          changeset: changeset,
          categories: Categories.list_categories()
        )
    end
  end


  def delete(conn, %{"id" => id}) do
    question = Questions.get_question!(id)
    {:ok, _question} = Questions.delete_question(question)

    conn
    |> put_flash(:info, "Question deleted successfully.")
    |> redirect(to: question_path(conn, :index))
  end


  defp clear_params(question_params) do
    filtered_answers = Enum.filter(question_params["answers"], fn {k, v} ->
      v["label"] != ""
    end) |> Map.new()

    Map.merge(question_params, %{
      "answers" => filtered_answers
    })
  end
end
