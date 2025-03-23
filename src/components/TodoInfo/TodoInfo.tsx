import React from 'react';
import { TodoInfoProps } from '../../types/types';
import { UserInfo } from '../UserInfo';

export const TodoInfo: React.FC<TodoInfoProps> = ({
  id,
  title,
  user,
  completed,
}: TodoInfoProps) => {
  return (
    <article
      className={completed ? 'TodoInfo TodoInfo--completed' : 'TodoInfo'}
      data-id={id}
    >
      <h2 className="TodoInfo__title">{title}</h2>

      <UserInfo user={user} />
    </article>
  );
};
