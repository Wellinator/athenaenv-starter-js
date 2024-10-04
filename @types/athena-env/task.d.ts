declare interface ITask {
  id: number;
  name: string;
  status: number;
  stack: number;
}

declare interface ITasks {
  new: (taskFn: () => void) => void;
  get: () => Array<ITask>;
  kill: (id: number) => void;
}

declare const Tasks: ITasks;
