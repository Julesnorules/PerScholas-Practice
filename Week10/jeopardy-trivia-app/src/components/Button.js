import QuestionsData from './QuestionsData'

export default function Button() {
    return (
        <div> 
            <a href={QuestionsData} className="btn btn-primary">
                <button>
                    Get Question
                </button>
            </a>
        </div>
    )
}