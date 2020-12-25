import { Record } from "../entities/record.entity";
import { Project } from "../entities/project.entity";
import { User } from "../entities/user.entity";
import { generateUuid } from "../functions/generate-uuid.function";
import { Uuid } from "../types/uuid.type";


interface Example {
  project1: Uuid,
  project2: Uuid,
  record1: Uuid,
  record2: Uuid,
  record3: Uuid,
  user1: Uuid,
  user2: Uuid,
  admin: Uuid,
}

const EXAMPLE_UUID_OBJECT: Example = {
  project1: generateUuid(),
  project2: generateUuid(),
  record1: generateUuid(),
  record2: generateUuid(),
  record3: generateUuid(),
  user1: generateUuid(),
  user2: generateUuid(),
  admin: generateUuid(),
};

const TODAY: Date = new Date();
const YESTERDAY: Date = new Date(new Date().setDate(new Date().getDate()-1));

const USER_1: User<Date> = {
  login: 'gaevivan',
  name: 'Гаев Иван Антонович',
  id: EXAMPLE_UUID_OBJECT.user1,
  created: YESTERDAY,
  updated: TODAY
};
const USER_2: User<Date> = {
  login: 'petrov',
  name: 'Петров Пётр Петрович',
  id: EXAMPLE_UUID_OBJECT.user2,
  created: YESTERDAY,
  updated: TODAY
};
const ADMIN_USER: User<Date> = {
  login: 'admin',
  name: 'Админ',
  id: EXAMPLE_UUID_OBJECT.admin,
  created: YESTERDAY,
  updated: TODAY
};
const PROJECT_1: Project<Date> = {
  title: 'Проект 1',
  description: 'Тестовый проект 1', 
  author: ADMIN_USER,
  id: EXAMPLE_UUID_OBJECT.project1,
  created: YESTERDAY,
  updated: TODAY
};
const PROJECT_2: Project<Date> = {
  title: 'Проект 2',
  description: 'Тестовый проект 2', 
  author: USER_1,
  id: EXAMPLE_UUID_OBJECT.project2,
  created: YESTERDAY,
  updated: TODAY
};
const RECORD_1: Record<Date> = {
  id: EXAMPLE_UUID_OBJECT.record1,
  created: YESTERDAY,
  updated: TODAY,
  index: 1,
  title: 'record 1',
  text: 'record 1 text \n second row',
  author: USER_1,
  assignee: USER_1,
  ancestor: null,
  project: PROJECT_1
};
const RECORD_2: Record<Date> = {
  id: EXAMPLE_UUID_OBJECT.record2,
  created: YESTERDAY,
  updated: TODAY,
  index: 2,
  title: 'record 2',
  text: 'record 2 text \n second row',
  author: USER_1,
  assignee: USER_2,
  ancestor: RECORD_1,
  project: PROJECT_1
};
const RECORD_3: Record<Date> = {
  id: EXAMPLE_UUID_OBJECT.record3,
  created: YESTERDAY,
  updated: TODAY,
  index: 1,
  title: 'admin record 1',
  text: 'admin record 1 text \n second row',
  author: ADMIN_USER,
  assignee: ADMIN_USER,
  ancestor: null,
  project: PROJECT_2
};

export const RECORDS_EXAMPLE: Record<Date>[] = [RECORD_1, RECORD_2, RECORD_3];
export const PROJECTS_EXAMPLE: Project<Date>[] = [PROJECT_1, PROJECT_2];
export const USERS_EXAMPLE: User<Date>[] = [USER_2, USER_1, ADMIN_USER];
