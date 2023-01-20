export const Form: React.FC = () => {
  return (
    <form className="form">
      <h1 className="form__title">Auth Form</h1> 

      <input
        className="form__field"
        type="email"
        placeholder="email"
      />

      <input
        className="form__field"
        type="password"
        placeholder="password"
      />

      <button
        type="button"
        className="form__button"
      >
        Sign up
      </button>
    </form>
  );
};
