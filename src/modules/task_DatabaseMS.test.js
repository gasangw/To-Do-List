import { arrTasks } from './task_DatabaseMS';

// Testing Add Item Todo

describe('Testing Add Item', () => {
  test('Adding todo to array not to be null', () => {
    const todo = arrTasks;
    todo.addTask('WakeUp', false, 0);

    expect(todo.length).not.toBeNull();
  });
  it('Adding new task', () => {
    const todo = arrTasks;
    todo.addTask('Practice', false, 1);

    expect(todo.data[1].description).toEqual('Practice');
  });
  it('Adding todo to return details property', () => {
    const todo = arrTasks;
    todo.addTask('Sleep', false, 2);

    expect(todo.data[2].description).toBe('Sleep');
  });
  it('Adding todo to return boolean', () => {
    const todo = arrTasks;
    todo.addTask('Cook', true, 3);
  });
  it('Adding todo to return index', () => {
    const todo = arrTasks;
    todo.addTask('Singing', false, 4);

    expect(todo.data[4].id - 1).toEqual(4);
  });
});

// Testing Remove Item Todo

describe('Testing Remove Item', () => {
  it('Removing todo from array to be null', () => {
    const todo = arrTasks;
    todo.addTask('Drive', false, 5);
    todo.removeTask(5);

    expect(todo[5]).toBeUndefined();
  });
  it('Removing todo from a multiple added todos which returns details', () => {
    const todo = arrTasks;
    todo.addTask('Read', false, 4);
    todo.removeTask(5);

    expect(todo.data[4].description).toEqual('Read');
  });
  it('Removing  todo from a multiple added todos which return length', () => {
    const todo = arrTasks;
    todo.addTask('Pray', false, 5);
    todo.addTask('Lunch', false, 6);
    todo.removeTask(3);

    expect(todo.data).toHaveLength(6);
  });
  it('remove', () => {
    const todo = arrTasks;
    todo.removeTask(4);
    expect(todo.data[4].description).toEqual('Lunch');
  });
});