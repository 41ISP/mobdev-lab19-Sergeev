const HabitForm = () => {
    return (
        <div className="add-habit-section">
                <h2>➕ Add New Habit</h2>
                <form className="form-grid">
                    <div className="form-group">
                        <label for="habit-name">Habit Name</label>
                        <input
                            type="text"
                            id="habit-name"
                            placeholder="e.g., Morning Exercise"
                            value="" />
                    </div>
                    </form>
                    </div>
    )
}

export default HabitForm