export default function UserInput({ onUserInputChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Invesment</label>
          <input
            type="number"
            id="initial-investment"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              onUserInputChange("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>Annual Invesment</label>
          <input
            type="number"
            id="annual-investment"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              onUserInputChange("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected return</label>
          <input
            type="number"
            id="expected-return"
            required
            value={userInput.expectedReturn}
            onChange={(event) =>
              onUserInputChange("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            id="duration"
            required
            value={userInput.duration}
            onChange={(event) =>
              onUserInputChange("duration", event.target.value)
            }
          />
        </p>
      </div>
    </section>
  );
}
