import { InMemoryActivityRepository } from '@modules/activities/repositories/in-memory/InMemoryActivityRepository';
import { InMemoryOptionsRepository } from '@modules/activities/repositories/in-memory/InMemoryOptionsRepository';

import { CreateActivityUseCase } from './CreateActivityUseCase';

let createActivityUseCase: CreateActivityUseCase;
let inMemoryActivitiesRepository: InMemoryActivityRepository;
let inMemoryOptionsRepository: InMemoryOptionsRepository;

enum enActivityType {
  BLOCK_ACTIVITY = 'block_activity',
  QUIZ = 'quiz',
}

enum enOptionType {
  JS_FUNCTION = 'js_function',
  COMMAND = 'command',
}

describe('Create activity', () => {
  beforeEach(() => {
    inMemoryActivitiesRepository = new InMemoryActivityRepository();
    inMemoryOptionsRepository = new InMemoryOptionsRepository();

    createActivityUseCase = new CreateActivityUseCase(
      inMemoryActivitiesRepository,
      inMemoryOptionsRepository
    );
  });

  it('should be able to create an activity', async () => {
    const result = await createActivityUseCase.execute({
      description: 'Description',
      title: 'Title',
      type: enActivityType.BLOCK_ACTIVITY,
      options: [
        {
          activity_id: '123',
          hexadecimal_color: '#fff',
          name: 'print',
          type: enOptionType.COMMAND,
        },
      ],
      activity_answer: [
        {
          activity_id: '123',
          hexadecimal_color: '#fff',
          name: 'print',
          type: enOptionType.COMMAND,
          id: null,
          activity: null,
          created_at: null,
        },
      ],
      order: 1,
    });

    expect(result).toHaveProperty('id');
    expect(result.title).toEqual('Title');
    expect(result.description).toEqual('Description');
    expect(result.type).toEqual(enActivityType.BLOCK_ACTIVITY);
    expect(result.is_needed_code).toBeFalsy();
  });
});
