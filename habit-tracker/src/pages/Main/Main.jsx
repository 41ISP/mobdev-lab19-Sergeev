import { useEffect, useState } from "react"
import "./Main.css"
import HabitCard from "../../components/HabitCard"
import Stats from "../../components/Stats"
import HabitForm from "../../components/HabitForm"
const initialHabits = [
    {
        name: "Изучить React",
        notificationTime: "7:00PM",
        frequency: "daily",
        streak: 9,
        isToday: true,
        color: "green"
    },
    {
    name: "Почитать книжку",
    notificationTime: "9:00PM",
    frequency: "weekly",
    streak: 11,
    isToday: false,
    color: "red"
    }
]

const Main = () => {
    const [habits, setHabits] = useState([])
    useEffect(() => {
        const loadHabits = async () => {
            const habits = await getObject("habits")
            setHabits(habits)
        }
        loadHabits()
   }, [])
    return (
         <div className="container">
            <header>
                <h1>🎯 Smart Habit Tracker</h1>
                <p className="subtitle">Build better habits, one day at a time</p>
            </header>

            <Stats habits={habits}/>

            <HabitForm />
            

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

            <div className="habits-section">
                <h2>📋 Today's Habits</h2>
                {habits.map((el) => <HabitCard {...el}/>)}

                {/* <div className="habit-card" >
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
                </div> */}
            </div>
        </div>
    )
}

export default Main