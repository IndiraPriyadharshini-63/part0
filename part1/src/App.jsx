import Anecdotes from "./anecdotes/Anecdotes";
import CourseInfo from "./courseInfo/CourseInfo";
import Feedback from "./unicafe/Feedback";

const App = () => {
  return (
    <div>
      <CourseInfo />
      <Feedback />
      <Anecdotes />
    </div>
  );
};

export default App;
