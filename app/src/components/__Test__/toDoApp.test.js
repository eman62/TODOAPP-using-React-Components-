import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Child2 from '../child2';

describe('Child2 Component', () => {
  test('marks task as done when "Done" button is clicked', () => {
    const tasks = [
      { text: 'Task 1', isDone: false },
      { text: 'Task 2', isDone: true },
    ];
    
    const markAsDone = jest.fn();
    render(<Child2 toDoArray={tasks} markAsDone={markAsDone} />);

    const doneButton = screen.getAllByText('Done')[0];
    userEvent.click(doneButton);
    expect(markAsDone).toHaveBeenCalledWith(0);
  });
});
