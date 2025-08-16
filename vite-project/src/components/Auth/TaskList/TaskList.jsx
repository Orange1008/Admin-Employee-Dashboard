import React from 'react';
import ScrollStack, { ScrollStackItem } from './ScrollStack';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const TaskList = ({ data }) => {
  return (
    <div id="tasklist" className="h-90 w-full flex items-center justify-center bg-gray-100">
      <ScrollStack>
        {data.tasks.map((elem, index) => {
          let Component = null;

          if (elem.active) Component = AcceptTask;
          else if (elem.newTask) Component = NewTask;
          else if (elem.completed) Component = CompleteTask;
          else if (elem.failed) Component = FailedTask;

          return (
            Component && (
              <ScrollStackItem key={index}>
                <Component task={elem} />
              </ScrollStackItem>
            )
          );
        })}
      </ScrollStack>
    </div>
  );
};

export default TaskList;