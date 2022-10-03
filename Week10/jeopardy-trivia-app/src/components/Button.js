import QuestionsData from './QuestionsData'

export default function Button() {
    return (
        <button><a href={QuestionsData} className="btn btn-primary">
        Get Question
    </a></button>
    )
}