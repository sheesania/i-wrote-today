function About() {
  return (
    <div>
      <h1>About</h1>
      <div className='page-content'>
        <p>
          I Wrote Today is an app for tracking what days of the month you completed a task. Click on a day to toggle whether you completed your task on that day.
        </p>
        <p>
          Your data is stored in your browser's local storage, so you will be able to see what days you toggled on and off as long as you keep using the same browser (and don't clear site storage!).
        </p>
        <p>
          I Wrote Today <a href='https://github.com/sheesania/i-wrote-today'>was built by Alison Blomenberg</a>. Calendar CSS based on <a href='https://codepen.io/KennySing/pen/rBDlJ'>Kenny Sing's responsive calendar</a>. "<a href='https://thenounproject.com/search/?q=cat&i=3556313'>Cat</a>" icon by Gregor Cresnar from <a href='https://thenounproject.com/'>the Noun Project</a>.
        </p>
      </div>
    </div>
  );
}

export default About;