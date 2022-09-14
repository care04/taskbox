import TaskList from "./TaskList.vue"
import * as TaskStories from './Task.stories'

export default {
  component: TaskList,
  title: 'TaskList',
  decorators: [() =>  ({ template: '<div style="margin: 3em;"><story/></div>'})],
  argTypes: {
    onPinTask: {},
    onArchiveTask: {},
  },
};
const Template = args => ({
  components: { TaskList },
  setup() {
    return { args, ...TaskStories.actionsData };
  },
  template: '<TaskList v-bind="args"/>',
});
export const Default = Template.bind({});
Default.args = {
  tasks: [
    { ...TaskStories.Default.args.task, id: '1', title: 'Task1'},
    { ...TaskStories.Default.args.task, id: '2', title: 'Task2'},
    { ...TaskStories.Default.args.task, id: '3', title: 'Task3'},
    { ...TaskStories.Default.args.task, id: '4', title: 'Task4'},
    { ...TaskStories.Default.args.task, id: '5', title: 'Task5'},
    { ...TaskStories.Default.args.task, id: '6', title: 'Task6'},
  ],
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  tasks: [
    ...Default.args.tasks.slice(0, 5),
    { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED'},
  ],
};

export const Loading = Template.bind({})
Loading.args = {
  tasks: [],
  loading: true,
};

export const Empty = Template.bind({})
Empty.args = {
  ...Loading.args,
  loading: false,
}