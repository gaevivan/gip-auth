import { Issue } from "../entities/issue.entity";
import { Project } from "../entities/project.entity";
import { User } from "../entities/user.entity";
import { generateUuid } from "../functions/generate-uuid.function";
import { Uuid } from "../types/uuid.type";


interface Example {
  project1: Uuid,
  project2: Uuid,
  issue1: Uuid,
  issue2: Uuid,
  issue3: Uuid,
  user1: Uuid,
  user2: Uuid,
  admin: Uuid,
}

const EXAMPLE_UUID_OBJECT: Example = {
  project1: generateUuid(),
  project2: generateUuid(),
  issue1: generateUuid(),
  issue2: generateUuid(),
  issue3: generateUuid(),
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
const ISSUE_1: Issue<Date> = {
  id: EXAMPLE_UUID_OBJECT.issue1,
  created: YESTERDAY,
  updated: TODAY,
  index: 1,
  title: 'Issue 1',
  text: 'Issue 1 text \n second row',
  author: USER_1,
  assignee: USER_1,
  ancestor: null,
  project: PROJECT_1
};
const ISSUE_2: Issue<Date> = {
  id: EXAMPLE_UUID_OBJECT.issue2,
  created: YESTERDAY,
  updated: TODAY,
  index: 2,
  title: 'Issue 2',
  text: 'Issue 2 text \n second row',
  author: USER_1,
  assignee: USER_2,
  ancestor: ISSUE_1,
  project: PROJECT_1
};
const ISSUE_3: Issue<Date> = {
  id: EXAMPLE_UUID_OBJECT.issue3,
  created: YESTERDAY,
  updated: TODAY,
  index: 1,
  title: 'admin issue 1',
  text: 'admin issue 1 text \n second row',
  author: ADMIN_USER,
  assignee: ADMIN_USER,
  ancestor: null,
  project: PROJECT_2
};

export const ISSUES_EXAMPLE: Issue<Date>[] = [ISSUE_1, ISSUE_2, ISSUE_3];
export const PROJECTS_EXAMPLE: Project<Date>[] = [PROJECT_1, PROJECT_2];
export const USERS_EXAMPLE: User<Date>[] = [USER_2, USER_1, ADMIN_USER];
