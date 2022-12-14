import react from 'react'; 
import Heading from './Heading';
import List from './List';
import InvokingCard from'./InvokingCard';
import StateFunction from './StateFunction';
import Digitalclock from './Digitalclock';
import EventFirst from './EventFirst';
import TextField from './TextField';
import Todolist from './Todolist';
import TodoListsecond from './TodoListsecond';
import ContextFileOne from './FolderForContextPrograms/ContextFileOne';
import FirstContextFile from './SecondTestFolderForContext/FirstContextFile';
import FirstComponentContext from './ContextFolderForReverseDataFlow/FirstComponentContext';
import SimpleProjectOne from './FolderNumberOne/SimpleProjectOne';
import SimpleProjectTwo from './FolderNumberOne/SimpleProjectTwo';
import TestProgramOne from './FolderToTestProgramSnippets/TestProgramOne.jsx';
import SimpleProjectThree from './FolderNumberOne/SimpleProjectThree.jsx';
import Form from './Form';
let ob1={
    display:"grid",
    gridTemplateColumns:'repeat(auto-fit,minmax(0px,1fr))', 
};
let ob2={
    display:"grid",
    gridTemplateColumns:'repeat(auto-fit,minmax(0px,1fr))', 
};
let ob3={
    display:"grid",
    gridTemplateColumns:'repeat(auto-fit,minmax(0px,1fr))', 
};
function App() {
    // digitalClock();
 return(<> 
 <Heading/>
 <List/>
 <hr />
 <InvokingCard/>
 <hr />
 <div style={ob1}>
 <StateFunction/>
 {/* <Digitalclock/> */}
 <EventFirst/>
 </div>
 <hr />
 <div style={ob2}>
<TextField/>
<hr />
 </div>
 <hr />
 <div style={ob3}>
 <Todolist/>
 <TodoListsecond/>
 </div>
 <hr />
 <ContextFileOne/>
 <FirstContextFile/>
 <div style={ob3}>
 <FirstComponentContext/>
 <SimpleProjectOne/>
 </div>
 <hr />
 <div>
 <SimpleProjectTwo/> 
 <TestProgramOne/> 
 </div>
 <hr />
 <div>
  <SimpleProjectThree/>
 </div>
 //new conmment is added
 <div>
 <Form/>
 </div>
 </>);
}
 

export default App;
