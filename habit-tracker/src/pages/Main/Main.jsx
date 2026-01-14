import "./Main.css"

const Main = () => {
    return (
         <div className="container">
            <header>
                <h1>🎯 Smart Habit Tracker</h1>
                <p className="subtitle">Build better habits, one day at a time</p>
            </header>

            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-value">5</div>
                    <div className="stat-label">Active Habits</div>
                </div>
                <div className="stat-card">
                    <div className="stat-value">87%</div>
                    <div className="stat-label">Completion Rate</div>
                </div>
                <div className="stat-card">
                    <div className="stat-value">23</div>
                    <div className="stat-label">Day Streak</div>
                </div>
            </div>

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

                    <div className="form-row">
                        <div className="form-group">
                            <label for="frequency">Frequency</label>
                            <select id="frequency">
                                <option>Daily</option>
                                <option>Weekly</option>
                                <option>Weekdays</option>
                                <option>Weekends</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label for="notification-time">
                                Notification Time
                            </label>
                            <input
                                type="time"
                                id="notification-time"
                                value="07:00" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Color Theme</label>
                        <div className="color-picker">
                            <div
                                className="color-option selected"
                               ></div>
                            <div
                                className="color-option"
                               ></div>
                            <div
                                className="color-option"
                                ></div>
                            <div
                                className="color-option"
                               ></div>
                            <div
                                className="color-option"
                                ></div>
                            <div
                                className="color-option"
                                ></div>
                        </div>
                    </div>

                    <button type="button" className="btn btn-primary">
                        Add Habit
                    </button>
                </form>
            </div>

            <div className="habits-section">
                <h2>📋 Today's Habits</h2>

                <div className="habit-card" >
                    <div className="habit-info">
                        <div className="habit-name">Morning Meditation</div>
                        <div className="habit-meta">
                            <div className="habit-meta-item">
                                <span>⏰</span>
                                <span>07:00 AM</span>
                            </div>
                            <div className="habit-meta-item">
                                <span>📅</span>
                                <span>Daily</span>
                            </div>
                        </div>
                    </div>
                    <div className="habit-actions">
                        <div className="streak-badge">🔥 15 days</div>
                        <button className="check-btn completed">✓</button>
                    </div>
                </div>

                <div className="habit-card" >
                    <div className="habit-info">
                        <div className="habit-name">Drink 8 Glasses of Water</div>
                        <div className="habit-meta">
                            <div className="habit-meta-item">
                                <span>⏰</span>
                                <span>08:00 AM</span>
                            </div>
                            <div className="habit-meta-item">
                                <span>📅</span>
                                <span>Daily</span>
                            </div>
                        </div>
                    </div>
                    <div className="habit-actions">
                        <div className="streak-badge">🔥 23 days</div>
                        <button className="check-btn">○</button>
                    </div>
                </div>

                <div className="habit-card" >
                    <div className="habit-info">
                        <div className="habit-name">Read for 30 Minutes</div>
                        <div className="habit-meta">
                            <div className="habit-meta-item">
                                <span>⏰</span>
                                <span>09:00 PM</span>
                            </div>
                            <div className="habit-meta-item">
                                <span>📅</span>
                                <span>Daily</span>
                            </div>
                        </div>
                    </div>
                    <div className="habit-actions">
                        <div className="streak-badge">🔥 8 days</div>
                        <button className="check-btn">○</button>
                    </div>
                </div>

                <div className="habit-card" >
                    <div className="habit-info">
                        <div className="habit-name">Evening Workout</div>
                        <div className="habit-meta">
                            <div className="habit-meta-item">
                                <span>⏰</span>
                                <span>06:00 PM</span>
                            </div>
                            <div className="habit-meta-item">
                                <span>📅</span>
                                <span>Weekdays</span>
                            </div>
                        </div>
                    </div>
                    <div className="habit-actions">
                        <div className="streak-badge">🔥 12 days</div>
                        <button className="check-btn completed">✓</button>
                    </div>
                </div>

                <div className="habit-card" >
                    <div className="habit-info">
                        <div className="habit-name">Practice Guitar</div>
                        <div className="habit-meta">
                            <div className="habit-meta-item">
                                <span>⏰</span>
                                <span>07:30 PM</span>
                            </div>
                            <div className="habit-meta-item">
                                <span>📅</span>
                                <span>Daily</span>
                            </div>
                        </div>
                    </div>
                    <div className="habit-actions">
                        <div className="streak-badge">🔥 5 days</div>
                        <button className="check-btn">○</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main