defmodule FakeInternetWeb.Api.TestView do
  use FakeInternetWeb, :view
  alias FakeInternetWeb.Api.TestView

  def render("index.json", %{tests: tests}) do
    %{data: render_many(tests, TestView, "test.json")}
  end

  def render("test.json", %{test: test}) do
    questions = FakeInternet.Questions.list_questions(test.question_ids)

    %{
      id: test.id,
      user_id: test.user_id,
      name: test.name,
      question_ids: test.question_ids,
      submissions: Enum.map(test.submissions, fn submission ->
        # WTF IS THIS :D
        mapped_questions =
          Enum.map(questions, fn question ->
            Map.merge(question, %{
              submission_answers: Enum.map(question.answers, fn a ->
                user_answer = Enum.find(submission.answers, fn sa -> sa.answer_id == a.id end)

                cond do
                  a.is_correct && !user_answer -> false
                  !a.is_correct && user_answer -> false
                  true -> true
                end
              end)
            })
          end)
          |> Enum.map(fn question ->
            Map.merge(question, %{
              submission_correct: length(Enum.filter(question.submission_answers, fn a -> a end)) == length(question.answers)
            })
          end)

        %{
          id: submission.id,
          user_id: submission.user_id,
          questions: Enum.map(mapped_questions, fn question ->
            %{
              id: question.id,
              answers: question.submission_answers,
              is_correct: question.submission_correct
            }
          end),
          answers: Enum.map(submission.answers, fn answer ->
            %{
              question_id: answer.question_id,
              answer_id: answer.answer_id
            }
          end)
        }
      end)
    }
  end

  def render("test_submission.json", %{test: test, submission: submission}) do
    questions = FakeInternet.Questions.list_questions(test.question_ids)

    mapped_questions =
      Enum.map(questions, fn question ->
        Map.merge(question, %{
          submission_answers: Enum.map(question.answers, fn a ->
            user_answer = Enum.find(submission.answers, fn sa -> sa.answer_id == a.id end)

            cond do
              a.is_correct && !user_answer -> false
              !a.is_correct && user_answer -> false
              true -> true
            end
          end)
        })
      end)
      |> Enum.map(fn question ->
        Map.merge(question, %{
          submission_correct: length(Enum.filter(question.submission_answers, fn a -> a end)) == length(question.answers)
        })
      end)

    %{
      id: test.id,
      user_id: test.user_id,
      name: test.name,
      question_ids: test.question_ids,
      submission: %{
        id: submission.id,
        user_id: submission.user_id,
        questions: Enum.map(mapped_questions, fn question ->
          %{
            id: question.id,
            answers: question.submission_answers,
            is_correct: question.submission_correct
          }
        end),
        answers: Enum.map(submission.answers, fn answer ->
          %{
            question_id: answer.question_id,
            answer_id: answer.answer_id
          }
        end)
      }
    }
  end
end
