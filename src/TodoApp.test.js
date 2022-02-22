import React from 'react';
import { fireEvent, getByPlaceholderText, render } from '@testing-library/react';
import TodoApp from './TodoApp';

describe('<TodoApp />', () => {
  it('renders TodoForm and TodoList', () => {
    const {getByText, getByTestId} = render(<TodoApp />);
    getByText('등록');
    getByTestId("TodoList");
  });
  it('renders two defaults todos', () => {
    const {getByText} = render(<TodoApp />);
    getByText('TDD 배우기');
    getByText('react-testing-library 사용하기');
  });
  it('creates new todo', () => {
    const {getByPlaceholderText, getByText} = render(<TodoApp />);
    fireEvent.change(getByPlaceholderText('할 일을 입력하세요~'), {target: {value: '새 항목 추가하기'}})
    fireEvent.click(getByText('등록'));
    getByText('새 항목 추가하기');
  });
 
})